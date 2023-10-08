import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler,checkObjectId } from "./middleware/errorHandler.js";
const port = process.env.PORT;

connectDB(); // Connect to MongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("hello i am working");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);
app.use(checkObjectId);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
