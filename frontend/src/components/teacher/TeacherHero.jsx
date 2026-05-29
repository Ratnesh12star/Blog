import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";

const TeacherHero = () => {

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
      justify-center
      px-6
      pt-32
      pb-16
      overflow-hidden
      relative
      "
    >

      {/* Blur Effects */}

      <div
        className="
        absolute
        top-20
        left-20
        h-72
        w-72
        bg-cyan-500/20
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-20
        h-72
        w-72
        bg-blue-600/20
        blur-[120px]
        rounded-full
        "
      />



      <div
        className="
        max-w-7xl
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
        relative
        z-10
        "
      >

        {/* Left Content */}

        <div>

          <div
            className="
            inline-flex
            items-center
            gap-3
            bg-white/10
            border
            border-white/10
            px-5
            py-3
            rounded-full
            text-cyan-400
            backdrop-blur-xl
            mb-8
            "
          >

            <FaChalkboardTeacher />

            Best Teachers Platform

          </div>


          <h1
            className="
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            text-white
            "
          >

            Learn From
            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >

              {" "}
              Expert Teachers

            </span>

          </h1>


          <p
            className="
            text-gray-400
            text-lg
            mt-8
            leading-8
            max-w-xl
            "
          >

            Discover highly qualified teachers,
            modern courses, and professional
            mentorship with an advanced learning
            platform built for students.

          </p>


          {/* Buttons */}

          <div
            className="
            flex
            gap-5
            mt-10
            "
          >

            <button
              className="
              bg-cyan-500
              hover:bg-cyan-600
              px-8
              py-4
              rounded-2xl
              text-white
              font-semibold
              duration-300
              shadow-lg
              shadow-cyan-500/30
              "
            >

              Explore Teachers

            </button>


            <button
              className="
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              hover:bg-white/20
              px-8
              py-4
              rounded-2xl
              text-white
              duration-300
              "
            >

              Learn More

            </button>

          </div>


          {/* Stats */}

          <div
            className="
            grid
            grid-cols-3
            gap-6
            mt-16
            "
          >

            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-5
              backdrop-blur-xl
              "
            >

              <h1
                className="
                text-3xl
                font-bold
                text-white
                "
              >

                150+

              </h1>

              <p className="text-gray-400 mt-2">

                Teachers

              </p>

            </div>


            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-5
              backdrop-blur-xl
              "
            >

              <h1
                className="
                text-3xl
                font-bold
                text-white
                "
              >

                80+

              </h1>

              <p className="text-gray-400 mt-2">

                Courses

              </p>

            </div>


            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-5
              backdrop-blur-xl
              "
            >

              <h1
                className="
                text-3xl
                font-bold
                text-white
                "
              >

                5k+

              </h1>

              <p className="text-gray-400 mt-2">

                Students

              </p>

            </div>

          </div>

        </div>



        {/* Right Side */}

        <div className="relative flex justify-center">

          {/* Main Image */}

          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200"
            alt=""

            className="
            w-full
            max-w-[520px]
            h-[650px]
            object-cover
            rounded-[40px]
            border
            border-white/10
            shadow-2xl
            "
          />


          {/* Floating Card 1 */}

          <div
            className="
            absolute
            top-10
            -left-10
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            p-5
            rounded-3xl
            text-white
            flex
            items-center
            gap-4
            animate-bounce
            "
          >

            <FaBookOpen className="text-cyan-400 text-3xl" />

            <div>

              <h1 className="font-bold">

                Modern Learning

              </h1>

              <p className="text-gray-400 text-sm">

                Updated Courses

              </p>

            </div>

          </div>


          {/* Floating Card 2 */}

          <div
            className="
            absolute
            bottom-10
            -right-10
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            p-5
            rounded-3xl
            text-white
            flex
            items-center
            gap-4
            animate-pulse
            "
          >

            <FaUserGraduate className="text-blue-400 text-3xl" />

            <div>

              <h1 className="font-bold">

                Student Success

              </h1>

              <p className="text-gray-400 text-sm">

                Career Growth

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default TeacherHero;