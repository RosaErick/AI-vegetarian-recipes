import React from "react";
import ReactMarkdown from "react-markdown";

const Card = ({ _id, name, prompt, recipe }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <div className="flex justify-center items-center h-[94.5%]">
      <ReactMarkdown className="text-sm recipe-md">{recipe}</ReactMarkdown>
    </div>

    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
            {name[0]}
          </div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <button
          type="button"
          className="outline-none bg-transparent border-none"
        >
          try it
        </button>
      </div>
    </div>
  </div>
);

export default Card;
