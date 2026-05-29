import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://blog-1-5frq.onrender.com/blog"
      );

      setBlogs(res.data || []);
    } catch (error) {
      console.log(error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="blogs"
      className="
      py-24
      px-6
      md:px-16
      bg-gradient-to-b
      from-slate-950
      via-black
      to-slate-900
    "
    >
      <div className="text-center">
        <p
          className="
          text-blue-400
          tracking-[6px]
          uppercase
        "
        >
          Latest Articles
        </p>

        <h1
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          mt-4
        "
        >
          Trending Blogs
        </h1>

        <p
          className="
          text-gray-400
          max-w-2xl
          mx-auto
          mt-5
          leading-8
        "
        >
          Discover the latest stories, tutorials,
          tech articles and creative ideas from
          our modern blogging platform.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-white mt-20 text-2xl">
          Loading Blogs...
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {blogs?.map((item) => (
            <div
              key={item._id}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-[30px]
              overflow-hidden
              shadow-xl
              hover:scale-105
              duration-500
              group
            "
            >
              <div className="overflow-hidden">
                <img
                  src={
                    item.image ||
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={item.title}
                  className="
                  h-60
                  w-full
                  object-cover
                  group-hover:scale-110
                  duration-700
                "
                />
              </div>

              <div className="p-6">
                <p className="text-blue-400 text-sm mb-2">
                  Technology Blog
                </p>

                <h2 className="text-2xl font-bold text-white">
                  {item.title}
                </h2>

                <p
                  className="
                  text-gray-300
                  mt-4
                  leading-7
                  line-clamp-3
                "
                >
                  {item.description}
                </p>

                <div
                  className="
                  flex
                  justify-between
                  items-center
                  mt-8
                "
                >
                  <p className="text-gray-400">
                    By {item.author}
                  </p>

                  <button
                    className="
                    px-5
                    py-2
                    rounded-full
                    bg-blue-600
                    text-white
                    hover:scale-105
                    duration-300
                  "
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blogs;