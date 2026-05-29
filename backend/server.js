import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import morgan from "morgan";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan());

mongoose
  .connect("mongodb+srv://mauryaratnesh32_db_user:mSsD5OzVYsWS44ya@blogifycluster.tgbzlup.mongodb.net/blogDB")

  .then(() => { 
    console.log("mongodb connected");
  })

  .catch((err) => {
    console.log(err);
  });

app.use("/api/blog", blogRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/student", studentRoutes);

app.use("/api/product", productRoutes);

app.use("/api/teacher", teacherRoutes);

app.use("/api/category", categoryRoutes);

app.listen(5000, () => {
  console.log("server running on 5000");
});
