const Footer = () => {
    return (
        <footer
            className="
      bg-gradient-to-b
      from-slate-950
      to-black
      text-white
      pt-20
      pb-8
      px-6
      md:px-16
      border-t
      border-white/10
    "
        >
            <div className="grid md:grid-cols-4 gap-10">

                {/* About */}

                <div>
                    <h1 className="text-3xl font-bold">
                        BlogHub
                    </h1>

                    <p className="text-gray-400 mt-5 leading-7">
                        BlogHub is a modern blogging platform
                        where users can explore stories,
                        discover ideas and read high-quality
                        articles from creators around the world.
                    </p>
                </div>

                {/* Quick Links */}

                <div>
                    <h2 className="text-xl font-semibold mb-5">
                        Quick Links
                    </h2>

                    <ul className="space-y-3 text-gray-400">

                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-400 duration-300"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#blogs"
                                className="hover:text-blue-400 duration-300"
                            >
                                Blogs
                            </a>
                        </li>

                        <li>
                            <a
                                href="#testimonials"
                                className="hover:text-blue-400 duration-300"
                            >
                                Testimonials
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-400 duration-300"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>

                {/* Categories */}

                <div>
                    <h2 className="text-xl font-semibold mb-5">
                        Categories
                    </h2>

                    <ul className="space-y-3 text-gray-400">

                        <li>Technology</li>

                        <li>Web Development</li>

                        <li>Programming</li>

                        <li>Design</li>

                        <li>Education</li>

                    </ul>
                </div>

                {/* Newsletter */}

                <div>
                    <h2 className="text-xl font-semibold mb-5">
                        Stay Updated
                    </h2>

                    <p className="text-gray-400 mb-5">
                        Subscribe for latest articles
                        and blog updates.
                    </p>

                    <div className="flex flex-col gap-4">

                        <input
                            type="email"
                            placeholder="Enter email"
                            className="
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/10
              outline-none
            "
                        />

                        <button
                            className="
              bg-blue-600
              p-4
              rounded-xl
              hover:bg-blue-700
              duration-300
            "
                        >
                            Subscribe
                        </button>

                    </div>

                </div>
            </div>


            {/* Bottom */}

            <div
                className="
        border-t
        border-white/10
        mt-14
        pt-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-5
      "
            >

                <p className="text-gray-400">
                    © 2026 BlogHub. All rights reserved.
                </p>


                <div className="flex gap-6 text-xl">

                    <span className="hover:scale-125 duration-300 cursor-pointer">
                        🌐
                    </span>

                    <span className="hover:scale-125 duration-300 cursor-pointer">
                        📘
                    </span>

                    <span className="hover:scale-125 duration-300 cursor-pointer">
                        📷
                    </span>

                    <span className="hover:scale-125 duration-300 cursor-pointer">
                        🐦
                    </span>

                </div>

            </div>

        </footer>
    );
};

export default Footer;