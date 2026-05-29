import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

const TeacherAbout = () => {

  return (

    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-black
      to-slate-900
      py-24
      px-6
      relative
      overflow-hidden
      "
    >

      {/* Blur Background */}

      <div
        className="
        absolute
        top-10
        left-10
        w-72
        h-72
        bg-cyan-500/20
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-10
        right-10
        w-72
        h-72
        bg-blue-500/20
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
        gap-16
        items-center
        relative
        z-10
        "
      >

        {/* Left Image */}

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200"
            alt=""

            className="
            rounded-[40px]
            w-full
            h-[650px]
            object-cover
            border
            border-white/10
            shadow-2xl
            "
          />


          {/* Floating Card */}

          <div
            className="
            absolute
            bottom-10
            left-10
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            p-6
            text-white
            "
          >

            <h1
              className="
              text-4xl
              font-bold
              "
            >

              10+

            </h1>

            <p className="text-gray-300 mt-2">

              Years Teaching Experience

            </p>

          </div>

        </div>



        {/* Right Content */}

        <div>

          <p
            className="
            text-cyan-400
            uppercase
            tracking-[6px]
            font-semibold
            mb-5
            "
          >

            About Teachers

          </p>


          <h1
            className="
            text-5xl
            md:text-6xl
            font-extrabold
            text-white
            leading-tight
            "
          >

            Inspiring Students
            Through
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
              Quality Education

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

            Our teachers are highly skilled,
            experienced, and passionate about
            helping students achieve success.
            We focus on modern teaching methods,
            practical learning, and career growth.

          </p>


          {/* Features */}

          <div
            className="
            grid
            sm:grid-cols-2
            gap-6
            mt-12
            "
          >

            {/* Card */}

            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-xl
              hover:scale-105
              duration-300
              "
            >

              <FaChalkboardTeacher
                className="
                text-4xl
                text-cyan-400
                "
              />

              <h1
                className="
                text-white
                text-2xl
                font-bold
                mt-5
                "
              >

                Expert Faculty

              </h1>

              <p
                className="
                text-gray-400
                mt-3
                "
              >

                Professional teachers with
                industry experience.

              </p>

            </div>


            {/* Card */}

            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-xl
              hover:scale-105
              duration-300
              "
            >

              <FaGraduationCap
                className="
                text-4xl
                text-blue-400
                "
              />

              <h1
                className="
                text-white
                text-2xl
                font-bold
                mt-5
                "
              >

                Student Focused

              </h1>

              <p
                className="
                text-gray-400
                mt-3
                "
              >

                Personalized guidance for every
                student.

              </p>

            </div>


            {/* Card */}

            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-xl
              hover:scale-105
              duration-300
              "
            >

              <FaLaptopCode
                className="
                text-4xl
                text-purple-400
                "
              />

              <h1
                className="
                text-white
                text-2xl
                font-bold
                mt-5
                "
              >

                Smart Learning

              </h1>

              <p
                className="
                text-gray-400
                mt-3
                "
              >

                Interactive classes with modern
                technology.

              </p>

            </div>


            {/* Card */}

            <div
              className="
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-xl
              hover:scale-105
              duration-300
              "
            >

              <FaAward
                className="
                text-4xl
                text-yellow-400
                "
              />

              <h1
                className="
                text-white
                text-2xl
                font-bold
                mt-5
                "
              >

                Best Results

              </h1>

              <p
                className="
                text-gray-400
                mt-3
                "
              >

                Proven track record of student
                achievements.

              </p>

            </div>

          </div>


          {/* Button */}

          <button
            className="
            mt-12
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

        </div>

      </div>

    </section>

  );

};

export default TeacherAbout;