import { motion } from "framer-motion";

const StudentHero = () => {
  return (
    <section
      id="student"
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-black
      flex
      items-center
      justify-center
      px-6
      overflow-hidden
      relative
      "
    >

      {/* Blur Circles */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

      <div
        className="
        max-w-7xl
        w-full
        grid
        md:grid-cols-2
        gap-10
        items-center
        "
      >

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="text-blue-400 text-lg mb-3">
            👨‍🎓 Student Profile
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            text-white
            leading-tight
            "
          >
            Hello, I'm{" "}
            <span
              className="
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              text-transparent
              bg-clip-text
              "
            >
              Ratnesh
            </span>
          </h1>

          <p
            className="
            text-gray-300
            mt-6
            text-lg
            leading-8
            "
          >
            Passionate student exploring
            modern web development,
            React projects and creative
            UI design with beautiful user
            experiences.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              className="
              px-8
              py-4
              rounded-2xl
              bg-blue-600
              text-white
              hover:scale-105
              duration-300
              "
            >
              View Projects
            </button>

            <button
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              text-white
              bg-white/10
              backdrop-blur-xl
              hover:scale-105
              duration-300
              "
            >
              Contact
            </button>

          </div>

        </motion.div>


        {/* Right */}

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
          relative
          flex
          justify-center
          "
        >

          {/* Main glass card */}

          <div
            className="
            w-[350px]
            h-[450px]
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/20
            rounded-[40px]
            shadow-2xl
            p-8
            relative
            overflow-hidden
            "
          >

            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000"
              alt=""
              className="
              h-52
              w-52
              rounded-full
              object-cover
              mx-auto
              border-4
              border-white/20
              "
            />

            <h1 className="text-white text-center text-3xl font-bold mt-6">
              Ratnesh
            </h1>

            <p className="text-gray-300 text-center mt-2">
              Frontend Student
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div
                className="
                bg-white/10
                rounded-2xl
                p-4
                text-center
                "
              >
                <h1 className="text-white text-2xl font-bold">
                  15+
                </h1>

                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div
                className="
                bg-white/10
                rounded-2xl
                p-4
                text-center
                "
              >
                <h1 className="text-white text-2xl font-bold">
                  100%
                </h1>

                <p className="text-gray-400">
                  Learning
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StudentHero;