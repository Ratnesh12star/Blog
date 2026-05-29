import {
  FaLayerGroup,
  FaArrowRight,
  FaEnvelope,
  FaDatabase,
} from "react-icons/fa";

const CategoryHero = () => {

  return (

    <section
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
      py-20
      relative
      overflow-hidden
      "
    >

      {/* Blur Background */}

      <div
        className="
        absolute
        top-[-100px]
        left-[-100px]
        h-[400px]
        w-[400px]
        bg-indigo-500/20
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-[-100px]
        right-[-100px]
        h-[400px]
        w-[400px]
        bg-pink-500/20
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

        {/* LEFT */}

        <div>

          <p
            className="
            uppercase
            tracking-[8px]
            text-pink-400
            font-semibold
            "
          >

            Categories Section

          </p>


          <h1
            className="
            text-6xl
            md:text-7xl
            font-black
            text-white
            leading-tight
            mt-6
            "
          >

            Manage
            Your

            <span
              className="
              bg-gradient-to-r
              from-pink-400
              to-indigo-500
              bg-clip-text
              text-transparent
              "
            >

              {" "}
              Categories

            </span>

          </h1>


          <p
            className="
            text-gray-400
            text-lg
            leading-8
            mt-8
            max-w-2xl
            "
          >

            Create and manage category data
            with a modern admin dashboard UI.
            Easily organize names, emails,
            and category information in one place.

          </p>



          {/* BUTTONS */}

          <div
            className="
            flex
            flex-wrap
            gap-5
            mt-10
            "
          >

            <button
              className="
              bg-gradient-to-r
              from-pink-500
              to-indigo-600
              hover:scale-105
              duration-300
              px-8
              py-4
              rounded-2xl
              text-white
              font-semibold
              flex
              items-center
              gap-3
              shadow-lg
              shadow-pink-500/20
              "
            >

              Explore Categories

              <FaArrowRight />

            </button>


            <button
              className="
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              hover:bg-white/20
              duration-300
              px-8
              py-4
              rounded-2xl
              text-white
              font-semibold
              "
            >

              Learn More

            </button>

          </div>



          {/* STATS */}

          <div
            className="
            grid
            grid-cols-3
            gap-5
            mt-14
            "
          >

            <div
              className="
              bg-white/10
              backdrop-blur-xl
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

                50+

              </h1>

              <p className="text-gray-400 mt-2">

                Categories

              </p>

            </div>


            <div
              className="
              bg-white/10
              backdrop-blur-xl
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

                Emails

              </p>

            </div>


            <div
              className="
              bg-white/10
              backdrop-blur-xl
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

          </div>

        </div>



        {/* RIGHT */}

        <div className="relative">

          {/* Main Card */}

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

                <FaLayerGroup
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

                Category Management

              </h1>


              <p
                className="
                text-gray-300
                leading-8
                mt-6
                "
              >

                Easily add category names and
                emails with a modern dashboard
                interface and powerful backend API.

              </p>



              {/* INFO CARDS */}

              <div
                className="
                space-y-5
                mt-10
                "
              >

                <div
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-pink-500/20
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <FaEnvelope
                      className="
                      text-pink-400
                      text-2xl
                      "
                    />

                  </div>

                  <div>

                    <h1 className="text-white font-bold">

                      Email Management

                    </h1>

                    <p className="text-gray-400 text-sm mt-1">

                      Store and manage category emails

                    </p>

                  </div>

                </div>



                <div
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-indigo-500/20
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <FaDatabase
                      className="
                      text-indigo-400
                      text-2xl
                      "
                    />

                  </div>

                  <div>

                    <h1 className="text-white font-bold">

                      MongoDB Database

                    </h1>

                    <p className="text-gray-400 text-sm mt-1">

                      Real-time backend integration

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default CategoryHero;