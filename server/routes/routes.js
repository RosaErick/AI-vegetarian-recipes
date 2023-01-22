import express from "express";
import generateAnswer from "../service/service.js";
import RecipesController from "../controller/recipes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("health check");
});

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("hit")
    console.log(prompt);

    const answer = await generateAnswer(prompt);

    console.log(answer);

    res.json(answer);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/recipes", RecipesController.getAllRecipes);

router.post("/recipes", RecipesController.create);

export default router;
