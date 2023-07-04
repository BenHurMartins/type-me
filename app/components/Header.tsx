"use client";
import { useState } from "react";
import BuyMeACoffeeButton from "./BuyMeACoffeeButton";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6 border-b">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-white text-2xl cursor-pointer">TYPE ME</span>
        </div>
        <div className="block md:hidden">
          <button
            aria-controls="navbar-default"
            aria-expanded="false"
            data-collapse-toggle="navbar-default"
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="navbar-default"
          className={`w-full flex-grow md:flex md:items-center  md:w-auto ${
            navbarOpen ? " flex" : " hidden"
          }`}
        >
          <div className="flex text-sm flex-grow items-end p-2 flex-col md:flex-row md:justify-end">
            <a
              href="https://github.com/BenHurMartins/type-me"
              className="flex mt-4  md:mt-0 hover:text-gray-200 mr-4 flex-row gap-2 items-center"
            >
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                ></path>
              </svg>
              Github
            </a>
            {/* <BuyMeACoffeeButton /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
