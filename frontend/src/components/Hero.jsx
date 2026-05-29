const Hero = () => {

    return (

        <section
            className="
      min-h-screen
      pt-36
      px-6
      md:px-16
      bg-gradient-to-br
      from-slate-950
      via-gray-900
      to-black
      flex
      items-center
      justify-center
      "
        >

            <div
                className="
        max-w-7xl
        w-full
        grid
        md:grid-cols-2
        gap-10
        items-center
        bg-white/10
        backdrop-blur-xl
        border border-white/10
        rounded-[40px]
        shadow-2xl
        p-8 md:p-14
        "
            >


                {/* Left Side Image */}

                <div className="flex justify-center">

                    <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900"
                        alt="blog"
                        className="
            w-full
            max-w-lg
            rounded-3xl
            shadow-2xl
            animate-bounce
            object-cover
            "
                    />

                </div>



                {/* Right Side Content */}

                <div>

                    <span
                        className="
            text-blue-400
            font-semibold
            tracking-widest
            "
                    >

                        MODERN BLOG PLATFORM

                    </span>

                    <h1
                        className="
            text-4xl
            md:text-7xl
            font-bold
            text-white
            leading-tight
            mt-4
            "
                    >

                        Welcome To

                        <span className="text-blue-500">

                            {" "}BlogHub

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

                        Discover modern articles, inspiring stories,
                        and latest blogs from creators around
                        the world.

                    </p>


                    <div className="flex gap-5 mt-8">

                        <button
                            className="
              px-8
              py-4
              rounded-full
              bg-blue-600
              text-white
              hover:scale-105
              duration-300
              "
                        >

                            Explore Blogs

                        </button>


                        <button
                            className="
              px-8
              py-4
              rounded-full
              border
              border-white
              text-white
              hover:bg-white
              hover:text-black
              duration-300
              "
                        >

                            Read More

                        </button>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Hero;