import express from "express";

import Blog from "../models/Blog.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let blogs = await Blog.find();

  res.json(blogs);
});

router.post(
  "/create",
  auth,

  async (req, res) => {
    let blog = await Blog.create(req.body);

    res.json(blog);
  },
);

router.put(
  "/update/:id",
  auth,

  async (req, res) => {
    let data = await Blog.findByIdAndUpdate(
      req.params.id,

      req.body,

      { new: true },
    );

    res.json(data);
  },
);

router.delete(
  "/delete/:id",
  auth,

  async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      msg: "Deleted",
    });
  },
);

export default router;
