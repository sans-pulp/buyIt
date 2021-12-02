import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import { usersRouter } from "./routes/userRoutes.js";
import config from "./config/config.js";

const PORT = Number(config.server.port);
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); //parse URL-encoded bodies
app.use(express.json()); //parse JSON bodies

//connect to MongoDB

mongoose
  .connect(`${config.server.dbURI}`)
  .then((res) => {
    console.log(`Connected to Mongo Db:`, config.server.dbName);
  })
  .catch((err) => {
    console.error("MongoDb connection error:", err);
  });

//Setup Routes
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`BuyIt Server running on port: ${PORT}`);
});
