import express from "express";
import router from "./routes/routes.js";
import connectDB from "./database/connect.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


const start = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    const PORT = 8080;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
