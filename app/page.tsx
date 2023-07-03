"use client";
import { useEffect, useState } from "react";
import myJSON from "./test.json";
import Disclaimer from "./components/Disclaimer";
import { NextSeo } from "next-seo";

const BORDER_ERROR = "border-solid border-2 border-rose-500 ";

const JSON_REGEX = /((\[[^\}]{3,})?\{s*[^\}\{]{3,}?:.*\}([^\{]+\])?)/;

const capitalizeFirstChar = (key: string) => {
  return `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
};

const isValidJSON = (item: string) => JSON_REGEX.test(item);

export default function Home() {
  const [error, setError] = useState("");
  const [textfield, setTextField] = useState(JSON.stringify(myJSON));
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    textfield && parseObject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textfield]);

  const parseObject = () => {
    try {
      if (!isValidJSON(textfield)) {
        setError("JSON is not valid");
        return;
      }
      setError("");
      setTypes([]);
      const result = JSON.parse(textfield);
      getType(result);
    } catch (error) {
      if (error instanceof Error) setError(error.message as string);
    }
  };

  const getType = (entry: Record<string, any>, typeName?: string) => {
    const result: string = Object.keys(entry).reduce((acc, curr) => {
      if (Array.isArray(entry[curr])) {
        if (entry[curr].length > 0) {
          if (typeof entry[curr][0] === "object") {
            getType(entry[curr][0], capitalizeFirstChar(curr));
            return `${acc} ${curr}: ${capitalizeFirstChar(curr)}[];`;
          }
          return `${acc} ${curr}: ${typeof entry[curr][0]}[];`;
        }
        return `${acc} ${curr}: unknown[];`;
      } else if (typeof entry[curr] === "object") {
        getType(entry[curr], capitalizeFirstChar(curr));
        return `${acc} ${curr}: ${capitalizeFirstChar(curr)};`;
      }
      if (typeof entry[curr] === "string") {
        return `${acc} ${curr}: string;`;
      }
      if (typeof entry[curr] === "number") {
        return `${acc} ${curr}: number;`;
      }
      if (typeof entry[curr] === "boolean") {
        return `${acc} ${curr}: boolean;`;
      }
      return acc;
    }, `type ${typeName || "MyType"} = {`);
    setTypes((prev) => [...prev, result + "};"]);
  };

  return (
    <>
      <NextSeo
        title="Easily Generate Your TS Types"
        description="Generate your TS/Typescript types just by pasting your JSON object."
      />
      <main className="flex min-h-screen flex-col items-center justify-top px-24 py-12 gap-16">
        <Disclaimer />
        <section className="w-full flex justify-center">
          <textarea
            className={`h-96 text-black w-full p-2 rounded ${
              error && BORDER_ERROR
            }`}
            value={textfield}
            onChange={(e) => {
              setTextField(e.target.value);
            }}
          ></textarea>
        </section>
        {error && <div>{<span className="text-white">{error}</span>}</div>}
        <section className="w-full flex justify-center flex-col gap-8">
          {types.map((t) => {
            return (
              <p key={t} className="text-white whitespace-pre-wrap">
                {t
                  .replaceAll("{", "{\n\t")
                  .replaceAll("}", "\n}")
                  .replaceAll("; ", ";\n\t")}
              </p>
            );
          })}
        </section>
      </main>
    </>
  );
}
