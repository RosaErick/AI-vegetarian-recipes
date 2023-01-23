import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";
import ReactMarkdown from "react-markdown";
import { recipeSampleMarkDown } from "../constants";

const CreatePost = () => {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_PROD;

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    recipe: "",
  });

  const [generatingRecipe, setGeneratingRecipe] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    if (form.prompt) {
      try {
        setGeneratingRecipe(true);
        const response = await fetch(`${baseURL}/generate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, recipe: data.recipe });
      } catch (error) {
        console.log(error);
      } finally {
        setGeneratingRecipe(false);
      }
    } else {
      alert("Please enter a ingredient");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.recipe) {
      setLoading(true);

      try {
        const response = await fetch(`${baseURL}/recipes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        await response.json();
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate a recipe");
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>

          <p className="mt-2 text-[#666e75 text-[14px] max-w[500px]">
            Create imaginative recipes by combining ingredients
          </p>
        </div>
      </div>

      <form
        className="
        mt-16  max-w-3xl
      "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            LabelName="Ingredients"
            type="text"
            name="prompt"
            placeholder="Enter one or more ingredients... ex:potato, onion, garlic"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rouded-lg focus:ring-blue-500 focus:border-blue-500  flex justify-center items-center">
            {form.recipe ? (
              <div className="flex flex-col gap-5 h-full  p-6 recipe-md">
                <ReactMarkdown>{form.recipe}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col gap-5 h-full  p-6 recipe-md">
                <ReactMarkdown>{recipeSampleMarkDown}</ReactMarkdown>
              </div>
            )}

            {generatingRecipe && (
              <div className="absolute inset-0 z-0 flex justify-center item-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateRecipe}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingRecipe ? "Generating..." : "Generate Recipe"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the recipe you want, you can share it with the
            community
          </p>

          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            {loading ? "sharing..." : "Share"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
