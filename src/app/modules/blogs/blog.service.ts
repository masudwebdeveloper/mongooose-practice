import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

export const createBlogDB = async(payload: IBlog): Promise<IBlog> => {
    const blog = new Blog(payload);
    await blog.save();
    return blog;
}

export const getBlogsDB = async():Promise<IBlog[]>=>{
    const blogs = await Blog.find({});
    return blogs;
}

// {
//     title: "Web Development",
//     author: "Masud Rana",
//     body: "Lorem 100 text",
//     comments: [{body: "hello", date: Date}],
//     date: Date,
//     hidden: false,
//     meta: {
//         votes: 100,
//         favs: 200,
//     }
// }