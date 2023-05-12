import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
import blogRouter from './app/modules/blogs/blog.route';
//middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/blog", blogRouter);

export default app;





