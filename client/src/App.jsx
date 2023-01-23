import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreateRecipe } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="
     w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/">
          <p>AI Vegetarian Recipes🥦</p>
        </Link>

        <Link
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          to="/create-post"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe min-h-[calc(100vh-73px)]]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreateRecipe />} />
        </Routes>
      </main>

      <footer className="w-full border-t border-b-[#e6ebf4] py-4 px-4 sm:px-8  gap-5">
        <div
          className="
      flex justify-center gap-2 items-center"
        >
                    <svg
            class="h-4 w-4 text-black-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <p className="text-center text-sm text-gray-500">
            <a
              href="https://github.com/RosaErick/AI-vegetarian-recipes"
              className="text-[#6469ff] font-medium"
            >
              Github
            </a>
          </p>

        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
