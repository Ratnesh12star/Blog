import { motion } from "framer-motion";

const StudentAbout = () => {
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-black
      to-blue-950
      px-6
      py-32
      overflow-hidden
      relative
      "
    >

      {/* Blur Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1
          }}
          className="text-center"
        >

          <p className="text-blue-400 mb-4">
            ABOUT US
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white">

            About
            <span className="text-blue-500">
              {" "}BlogHub
            </span>

          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            BlogHub is a modern blogging
            platform where creativity,
            technology and learning meet
            together to create beautiful
            experiences.
          </p>

        </motion.div>


        {/* Main section */}

        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">

          {/* Left image */}

          <motion.div
            initial={{
              opacity:0,
              x:-100
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:1
            }}
          >

            <div
              className="
              bg-white/10
              backdrop-blur-2xl
              rounded-[40px]
              p-5
              border
              border-white/20
              "
            >

              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80"
                alt=""
                className="
                rounded-[30px]
                h-[500px]
                w-full
                object-cover
                "
              />

            </div>

          </motion.div>


          {/* Right content */}

          <motion.div
            initial={{
              opacity:0,
              x:100
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:1
            }}
          >

            <p className="text-blue-400">
              WHO WE ARE
            </p>

            <h1 className="text-5xl font-bold text-white mt-4 leading-tight">

              Building Future With
              Creative Blogging

            </h1>

            <p className="text-gray-400 mt-6 leading-8">

              We create a space where
              students and developers can
              share knowledge, discover
              ideas and build amazing
              projects together.

            </p>


            {/* cards */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                border
                border-white/10
                "
              >

                <h1 className="text-white text-3xl font-bold">
                  50+
                </h1>

                <p className="text-gray-400">
                  Blogs Published
                </p>

              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                border
                border-white/10
                "
              >

                <h1 className="text-white text-3xl font-bold">
                  1k+
                </h1>

                <p className="text-gray-400">
                  Active Readers
                </p>

              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                border
                border-white/10
                "
              >

                <h1 className="text-white text-3xl font-bold">
                  100%
                </h1>

                <p className="text-gray-400">
                  Creativity
                </p>

              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                border
                border-white/10
                "
              >

                <h1 className="text-white text-3xl font-bold">
                  24/7
                </h1>

                <p className="text-gray-400">
                  Support
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default StudentAbout;