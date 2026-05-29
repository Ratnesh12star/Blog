import axios from "axios";
import { useEffect, useState } from "react";
import {
    useParams,
    useNavigate,
} from "react-router-dom";

const UpdateBlog = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        author: "",
        image: "",
        description: "",
    });

    useEffect(() => {
        loadSingleBlog();
    }, []);

    const loadSingleBlog = async () => {
        try {
            const res = await axios.get(
                "https://blog-1-5frq.onrender.com/api/blog"
            );

            const blog = res.data.find(
                (item) => item._id === id
            );

            if (blog) {
                setData(blog);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]:
                e.target.value,
        });
    };

    const updateBlog = async (e) => {
        e.preventDefault();

        try {
            const token =
                localStorage.getItem(
                    "token"
                );

            await axios.put(
                `https://blog-1-5frq.onrender.com/api/blog/update/${id}`,
                data,
                {
                    headers: {
                        Authorization:
                            token,
                    },
                }
            );

            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-black
      to-slate-900
      flex
      items-center
      justify-center
      px-6
      py-10
      "
        >
            <div
                className="
        max-w-6xl
        w-full
        grid
        md:grid-cols-2
        rounded-[40px]
        overflow-hidden
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        shadow-2xl
        "
            >
                {/* Left Side */}

                <div
                    className="
          hidden
          md:flex
          relative
          items-center
          justify-center
          p-10
          "
                >
                    <img
                        src={
                            data.image ||
                            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200"
                        }
                        alt=""
                        className="
            rounded-3xl
            h-[550px]
            w-full
            object-cover
            "
                    />

                    <div
                        className="
            absolute
            bottom-10
            left-10
            right-10
            bg-black/50
            backdrop-blur-xl
            rounded-2xl
            p-6
            "
                    >
                        <h1 className="text-white text-3xl font-bold">
                            Edit Your Blog
                        </h1>

                        <p className="text-gray-300 mt-3">
                            Update title, image,
                            author and content.
                        </p>
                    </div>
                </div>

                {/* Right Form */}

                <div className="p-10">

                    <h1
                        className="
            text-white
            text-4xl
            font-bold
            mb-8
            "
                    >
                        Update Blog
                    </h1>

                    <form
                        onSubmit={updateBlog}
                        className="space-y-5"
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
              w-full
              bg-white/10
              border
              border-white/10
              text-white
              p-4
              rounded-2xl
              outline-none
              "
                        />

                        <input
                            type="text"
                            name="author"
                            value={data.author}
                            onChange={
                                changeHandler
                            }
                            placeholder="Author"
                            className="
              w-full
              bg-white/10
              border
              border-white/10
              text-white
              p-4
              rounded-2xl
              "
                        />

                        <input
                            type="text"
                            name="image"
                            value={data.image}
                            onChange={
                                changeHandler
                            }
                            placeholder="Image URL"
                            className="
              w-full
              bg-white/10
              border
              border-white/10
              text-white
              p-4
              rounded-2xl
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
                            placeholder="Description"
                            className="
              w-full
              bg-white/10
              border
              border-white/10
              text-white
              p-4
              rounded-2xl
              resize-none
              "
                        />

                        <button
                            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              p-4
              rounded-2xl
              duration-300
              "
                        >
                            Update Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;