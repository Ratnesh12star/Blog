import { useState } from "react";
import axios from "axios";

const AddBlogForm = ({ loadBlogs }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
  });

  const [loading, setLoading] =
    useState(false);

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitHandler = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      await axios.post(
        "http://localhost:5000/api/blog/create",
        data,
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      setData({
        title: "",
        description: "",
        author: "",
        image: "",
      });

      loadBlogs?.();

      alert(
        "Blog Created Successfully 🚀"
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to create blog"
      );
    } finally {
      setLoading(false);
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
      justify-center
      items-center
      px-6
      py-10
    "
    >
      <div
        className="
        w-full
        max-w-5xl
        bg-white/10
        backdrop-blur-2xl
        border
        border-white/10
        rounded-[35px]
        shadow-2xl
        p-10
      "
      >
        <h1
          className="
          text-4xl
          text-center
          font-bold
          text-white
        "
        >
          Create New Blog
        </h1>

        <p
          className="
          text-center
          text-gray-400
          mt-3
          mb-10
        "
        >
          Add your latest article
          with image and content
        </p>

        <form
          onSubmit={
            submitHandler
          }
          className="
          grid
          md:grid-cols-2
          gap-6
        "
        >
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={
              changeHandler
            }
            placeholder="Blog Title"
            className="
            bg-black/20
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            focus:border-blue-500
            duration-300
          "
          />

          <input
            type="text"
            name="author"
            value={data.author}
            onChange={
              changeHandler
            }
            placeholder="Author Name"
            className="
            bg-black/20
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            focus:border-blue-500
            duration-300
          "
          />

          <input
            type="text"
            name="image"
            value={data.image}
            onChange={
              changeHandler
            }
            placeholder="Paste Image URL"
            className="
            md:col-span-2
            bg-black/20
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            focus:border-blue-500
          "
          />

          <textarea
            rows="6"
            name="description"
            value={
              data.description
            }
            onChange={
              changeHandler
            }
            placeholder="Write Blog Description..."
            className="
            md:col-span-2
            bg-black/20
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            resize-none
            focus:border-blue-500
          "
          />

          {data.image && (
            <div className="md:col-span-2">

              <h2
                className="
                text-white
                font-semibold
                mb-4
              "
              >
                Image Preview
              </h2>

              <img
                src={
                  data.image
                }
                alt="preview"
                className="
                w-full
                h-[300px]
                object-cover
                rounded-3xl
                border
                border-white/10
                hover:scale-[1.02]
                duration-500
              "
              />

            </div>
          )}

          <button
            disabled={
              loading
            }
            className="
            md:col-span-2
            p-4
            rounded-2xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            text-lg
            font-semibold
            duration-300
          "
          >
            {loading
              ? "Creating..."
              : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;