import mongoose from "mongoose";

const Recipe = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
});

const RecipeSchema = mongoose.model("Recipe", Recipe);

export default RecipeSchema;
