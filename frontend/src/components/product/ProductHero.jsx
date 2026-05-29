import { motion } from "framer-motion";

const ProductHero = () => {
  return (
    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-slate-950
      to-black
      flex
      items-center
      px-8
      overflow-hidden
      relative
      "
    >
      {/* blur circles */}

      <div
        className="
        h-[350px]
        w-[350px]
        bg-blue-600/20
        rounded-full
        blur-[120px]
        absolute
        top-10
        left-10
        "
      />

      <div
        className="
        h-[300px]
        w-[300px]
        bg-purple-600/20
        rounded-full
        blur-[120px]
        absolute
        bottom-0
        right-0
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-10
        items-center
        z-10
        "
      >
        {/* left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div
            className="
          inline-block
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          px-5
          py-2
          rounded-full
          text-white
          mb-6
          "
          >
            🚀 New Collection Available
          </div>

          <h1
            className="
          text-6xl
          font-bold
          text-white
          leading-tight
          "
          >
            Discover Amazing
            <span
              className="
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
            >
              {" "}
              Products
            </span>
          </h1>

          <p
            className="
          text-gray-400
          mt-6
          text-lg
          max-w-xl
          "
          >
            Explore premium products with modern design and best quality. Manage
            your products and collections with style.
          </p>

          <div
            className="
          flex
          gap-5
          mt-10
          "
          >
            <button
              className="
            px-8
            py-4
            bg-blue-600
            rounded-2xl
            text-white
            hover:scale-105
            duration-300
            "
            >
              Shop Now
            </button>

            <button
              className="
            px-8
            py-4
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            text-white
            hover:bg-white/20
            duration-300
            "
            >
              View Products
            </button>
          </div>
        </motion.div>

        {/* right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
        relative
        flex
        justify-center
        "
        >
          <div
            className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-[40px]
          p-8
          "
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000"
              alt=""
              className="
          h-[500px]
          rounded-[30px]
          object-cover
          "
            />

            <div
              className="
          absolute
          -bottom-6
          -left-8
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          p-5
          rounded-3xl
          "
            >
              <h1
                className="
          text-white
          text-2xl
          font-bold
          "
              >
                500+
              </h1>

              <p
                className="
          text-gray-400
          "
              >
                Products Available
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
