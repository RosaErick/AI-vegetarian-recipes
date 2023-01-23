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
    </BrowserRouter>
  );
};

export default App;
