import Recipe from "../database/models/recipe.js";

class RecipesController {
  async getAllRecipes(req, res) {
    try {
      const recipes = await Recipe.find();
      res.json({
        data: recipes,
        status: "success",
      });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  async create(req, res) {
    try {
      const { name, prompt, recipe } = req.body;
      const newRecipe = new Recipe({ name, prompt, recipe });

      await newRecipe.save();

      res.status(201).json(newRecipe);
    } catch (err) {
      console.error(err);
      res.status(409).json({ message: err });
    }
  }
}

export default new RecipesController();
