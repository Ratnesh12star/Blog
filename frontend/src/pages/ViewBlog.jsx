import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewBlog = () => {

  const { id } = useParams();

  const [blog, setBlog] =
    useState({});

  useEffect(() => {

    loadBlog();

  }, []);

  const loadBlog =
    async () => {

      try {

        const res =
          await axios.get(
            `http://localhost:5000/api/blog`
          );

        const singleBlog =
          res.data.find(
            (item) =>
              item._id === id
          );

        setBlog(singleBlog);

      }

      catch (error) {

        console.log(error);

      }

    };

  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-slate-950
      to-black
      flex
      items-center
      justify-center
      p-10
      "
    >

      <div
        className="
        max-w-5xl
        w-full
        bg-white/10
        backdrop-blur-2xl
        border
        border-white/10
        rounded-[40px]
        overflow-hidden
        grid
        md:grid-cols-2
        "
      >

        <img
          src={blog.image}
          alt=""
          className="
          h-full
          w-full
          object-cover
          "
        />

        <div className="p-10">

          <h1
            className="
            text-white
            text-5xl
            font-black
            "
          >
            {blog.title}
          </h1>

          <p
            className="
            text-cyan-400
            text-xl
            mt-4
            "
          >
            By {blog.author}
          </p>

          <p
            className="
            text-gray-300
            leading-8
            mt-8
            text-lg
            "
          >
            {blog.description}
          </p>

        </div>

      </div>

    </div>

  );

};

export default ViewBlog;