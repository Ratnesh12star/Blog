import {
  FaLayerGroup,
  FaEnvelope,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

const CategoryAbout = () => {

  return (

    <section
      className="
      bg-gradient-to-br
      from-black
      via-slate-950
      to-black
      py-24
      px-6
      overflow-hidden
      relative
      "
    >

      {/* Blur Effects */}

      <div
        className="
        absolute
        top-0
        left-0
        h-72
        w-72
        bg-pink-500/20
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        h-72
        w-72
        bg-indigo-500/20
        blur-[120px]
        rounded-full
        "
      />



      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-20
        items-center
        relative
        z-10
        "
      >

        {/* LEFT SIDE */}

        <div>

          <p
            className="
            text-pink-400
            uppercase
            tracking-[8px]
            font-semibold
            "
          >

            About Categories

          </p>


          <h1
            className="
            text-6xl
            font-black
            text-white
            leading-tight
            mt-6
            "
          >

            Smart Category

            <span
              className="
              block
              bg-gradient-to-r
              from-pink-400
              to-indigo-500
              bg-clip-text
              text-transparent
              "
            >

              Management System

            </span>

          </h1>



          <p
            className="
            text-gray-400
            text-lg
            leading-8
            mt-8
            "
          >

            Our category management system helps
            admins organize names and emails in a
            modern and professional way. Built
            with React, Tailwind CSS, Node.js,
            Express.js and MongoDB.

          </p>



          {/* FEATURES */}

          <div className="space-y-5 mt-10">

            <div
              className="
              flex
              items-center
              gap-5
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-5
              rounded-3xl
              "
            >

              <div
                className="
                h-16
                w-16
                rounded-2xl
                bg-pink-500/20
                flex
                items-center
                justify-center
                "
              >

                <FaLayerGroup
                  className="
                  text-pink-400
                  text-3xl
                  "
                />

              </div>

              <div>

                <h1
                  className="
                  text-white
                  text-xl
                  font-bold
                  "
                >

                  Category Control

                </h1>

                <p className="text-gray-400 mt-1">

                  Easily manage category details.

                </p>

              </div>

            </div>



            <div
              className="
              flex
              items-center
              gap-5
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-5
              rounded-3xl
              "
            >

              <div
                className="
                h-16
                w-16
                rounded-2xl
                bg-indigo-500/20
                flex
                items-center
                justify-center
                "
              >

                <FaEnvelope
                  className="
                  text-indigo-400
                  text-3xl
                  "
                />

              </div>

              <div>

                <h1
                  className="
                  text-white
                  text-xl
                  font-bold
                  "
                >

                  Email Management

                </h1>

                <p className="text-gray-400 mt-1">

                  Save and organize emails safely.

                </p>

              </div>

            </div>



            <div
              className="
              flex
              items-center
              gap-5
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-5
              rounded-3xl
              "
            >

              <div
                className="
                h-16
                w-16
                rounded-2xl
                bg-cyan-500/20
                flex
                items-center
                justify-center
                "
              >

                <FaDatabase
                  className="
                  text-cyan-400
                  text-3xl
                  "
                />

              </div>

              <div>

                <h1
                  className="
                  text-white
                  text-xl
                  font-bold
                  "
                >

                  MongoDB Integration

                </h1>

                <p className="text-gray-400 mt-1">

                  Real-time database connection.

                </p>

              </div>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}

        <div className="relative">

          {/* MAIN CARD */}

          <div
            className="
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[40px]
            p-10
            relative
            overflow-hidden
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-br
              from-pink-500/10
              to-indigo-500/10
              "
            />



            <div className="relative z-10">

              <div
                className="
                h-24
                w-24
                rounded-3xl
                bg-gradient-to-r
                from-pink-500
                to-indigo-600
                flex
                items-center
                justify-center
                shadow-lg
                shadow-pink-500/30
                "
              >

                <FaUsers
                  className="
                  text-white
                  text-5xl
                  "
                />

              </div>



              <h1
                className="
                text-white
                text-4xl
                font-black
                mt-10
                "
              >

                Why Choose Us?

              </h1>



              <p
                className="
                text-gray-300
                leading-8
                mt-6
                "
              >

                We provide a modern admin experience
                with smooth UI, glassmorphism design,
                responsive layouts and powerful
                backend integration.

              </p>



              {/* STATS */}

              <div
                className="
                grid
                grid-cols-2
                gap-5
                mt-10
                "
              >

                <div
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  text-center
                  "
                >

                  <h1
                    className="
                    text-4xl
                    font-black
                    text-white
                    "
                  >

                    100+

                  </h1>

                  <p className="text-gray-400 mt-2">

                    Categories

                  </p>

                </div>



                <div
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  text-center
                  "
                >

                  <h1
                    className="
                    text-4xl
                    font-black
                    text-white
                    "
                  >

                    24/7

                  </h1>

                  <p className="text-gray-400 mt-2">

                    Support

                  </p>

                </div>



                <div
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  text-center
                  "
                >

                  <h1
                    className="
                    text-4xl
                    font-black
                    text-white
                    "
                  >

                    Secure

                  </h1>

                  <p className="text-gray-400 mt-2">

                    Database

                  </p>

                </div>



                <div
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  text-center
                  "
                >

                  <h1
                    className="
                    text-4xl
                    font-black
                    text-white
                    "
                  >

                    Fast

                  </h1>

                  <p className="text-gray-400 mt-2">

                    Performance

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default CategoryAbout;