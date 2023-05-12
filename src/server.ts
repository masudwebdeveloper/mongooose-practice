// getting-started.js
import mongoose from "mongoose";
import app from "./app";
const port = process.env.PORT || 5000;
run().catch((err) => console.log(err));

async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogs");
    console.log("MongoDB Connected");
    app.listen(port, () => {
      console.log(`server is lestening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
