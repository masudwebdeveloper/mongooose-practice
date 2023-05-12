import { NextFunction, Request, Response } from "express";
import { createBlogDB, getBlogsDB } from "./blog.service";

export const createBlog = async(req: Request, res: Response, next: NextFunction) =>{
    const data = req.body;
    const blog = await createBlogDB(data);
    res.status(200).json({
        status: "Successful",
        data: blog,
    })
};

export const getBlogs = async(req: Request, res: Response, next: NextFunction) =>{
    const blogs = await getBlogsDB();
    res.status(200).json({status: "successful", data: blogs})
}