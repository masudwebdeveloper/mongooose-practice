import express from "express";
import { createBlog, getBlogs } from "./blog.controller";
const router = express.Router();

router.get("/", getBlogs);
router.post("/create-blog", createBlog);

export default router;
