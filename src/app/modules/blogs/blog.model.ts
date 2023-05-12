import { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

  comments: [
    {
      body: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
  hidden: {
    type: Boolean,
    required: true,
  },
  meta: {
    votes: {
        type: Number,
        required: true,
    },
    favs: {
        type: Number,
        required: true,
    }
  }
});

const Blog = model("Blog", blogSchema);

export default Blog;