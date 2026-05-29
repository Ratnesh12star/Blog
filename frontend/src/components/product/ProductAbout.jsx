import { motion } from "framer-motion";
import {
    FaShippingFast,
    FaShieldAlt,
    FaHeadset,
    FaAward,
} from "react-icons/fa";

const ProductAbout = () => {
    return (
        <section
            className="
      py-28
      bg-gradient-to-b
      from-slate-950
      via-black
      to-slate-950
      px-6
      md:px-12
      overflow-hidden
      relative
    "
        >
            {/* Blur Effects */}

            <div
                className="
        absolute
        top-20
        left-10
        h-[300px]
        w-[300px]
        bg-blue-600/10
        rounded-full
        blur-[120px]
      "
            />

            <div
                className="
        absolute
        bottom-0
        right-0
        h-[250px]
        w-[250px]
        bg-purple-600/10
        rounded-full
        blur-[120px]
      "
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p
                        className="
            uppercase
            tracking-[6px]
            text-blue-400
            text-sm
          "
                    >
                        About Store
                    </p>

                    <h1
                        className="
            text-5xl
            md:text-6xl
            font-black
            text-white
            mt-5
          "
                    >
                        Why Choose Our
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
            max-w-3xl
            mx-auto
            mt-8
            leading-8
            text-lg
          "
                    >
                        We provide premium quality
                        products with modern design,
                        fast delivery and excellent
                        customer experience for
                        every shopper around the
                        world.
                    </p>
                </motion.div>

                {/* Content */}

                <div
                    className="
          grid
          md:grid-cols-2
          gap-16
          items-center
          mt-24
        "
                >
                    {/* Left Image */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div
                            className="
              bg-white/10
              border
              border-white/10
              backdrop-blur-2xl
              rounded-[40px]
              p-6
            "
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
                                alt=""
                                className="
                rounded-[30px]
                h-[600px]
                w-full
                object-cover
              "
                            />
                        </div>

                        {/* Floating Box */}

                        <div
                            className="
              absolute
              -bottom-8
              -right-5
              bg-black/60
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-6
            "
                        >
                            <h1
                                className="
                text-white
                text-4xl
                font-bold
              "
                            >
                                10K+
                            </h1>

                            <p className="text-gray-400 mt-2">
                                Happy Customers
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Content */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8">
                            {/* Card */}

                            <div
                                className="
                flex
                gap-5
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                hover:scale-105
                duration-300
              "
                            >
                                <div
                                    className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                "
                                >
                                    <FaShippingFast />
                                </div>

                                <div>
                                    <h1
                                        className="
                    text-white
                    text-2xl
                    font-bold
                  "
                                    >
                                        Fast Delivery
                                    </h1>

                                    <p className="text-gray-400 mt-2">
                                        Get your products
                                        delivered quickly with
                                        safe and secure
                                        shipping.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}

                            <div
                                className="
                flex
                gap-5
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                hover:scale-105
                duration-300
              "
                            >
                                <div
                                    className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-purple-600
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                "
                                >
                                    <FaShieldAlt />
                                </div>

                                <div>
                                    <h1
                                        className="
                    text-white
                    text-2xl
                    font-bold
                  "
                                    >
                                        Secure Payments
                                    </h1>

                                    <p className="text-gray-400 mt-2">
                                        100% secure payment
                                        methods with trusted
                                        transaction systems.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}

                            <div
                                className="
                flex
                gap-5
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                hover:scale-105
                duration-300
              "
                            >
                                <div
                                    className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-pink-600
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                "
                                >
                                    <FaHeadset />
                                </div>

                                <div>
                                    <h1
                                        className="
                    text-white
                    text-2xl
                    font-bold
                  "
                                    >
                                        24/7 Support
                                    </h1>

                                    <p className="text-gray-400 mt-2">
                                        Our support team is
                                        always available to
                                        help customers anytime.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}

                            <div
                                className="
                flex
                gap-5
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-6
                rounded-3xl
                hover:scale-105
                duration-300
              "
                            >
                                <div
                                    className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-green-600
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                "
                                >
                                    <FaAward />
                                </div>

                                <div>
                                    <h1
                                        className="
                    text-white
                    text-2xl
                    font-bold
                  "
                                    >
                                        Premium Quality
                                    </h1>

                                    <p className="text-gray-400 mt-2">
                                        High quality premium
                                        products designed for
                                        modern lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductAbout;