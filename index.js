import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/productRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/products", router);

mongoose
  .connect(
    `${process.env.MONGODB_URL}`
  )
  .then(() => {
    console.log("> Connected to MongoDB.");
    app.listen(port, () =>
      console.log(`> Server is listening on PORT ${port}.`)
    );
  })
  .catch((error) => {
    console.log("> Connection failed.\n", error);
  });
