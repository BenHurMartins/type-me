import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Hotjar from "@hotjar/browser";

const siteId = 4941525;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easily Generate Your TS Types",
  description:
    "Generate your TS/Typescript types just by pasting your JSON object.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
