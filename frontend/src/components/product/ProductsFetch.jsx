import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Products = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/product"
            );

            setProducts(res.data || []);
        } catch (error) {
            console.log(error);

            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-slate-950
      to-black
      px-6
      md:px-16
      py-24
      "
        >
            {/* Heading */}

            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="
          text-blue-400
          uppercase
          tracking-[6px]
          mb-4
          "
                >
                    Our Collection
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.8 }}
                    className="
          text-5xl
          md:text-6xl
          font-bold
          text-white
          "
                >
                    Trending Products
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 1 }}
                    className="
          text-gray-400
          max-w-2xl
          mx-auto
          mt-6
          leading-8
          text-lg
          "
                >
                    Explore premium quality
                    products with modern
                    design and amazing user
                    experience.
                </motion.p>
            </div>

            {/* Loading */}

            {loading ? (
                <div
                    className="
          flex
          justify-center
          items-center
          h-[300px]
          "
                >
                    <h1
                        className="
            text-white
            text-3xl
            font-bold
            animate-pulse
            "
                    >
                        Loading Products...
                    </h1>
                </div>
            ) : products.length === 0 ? (
                <div className="text-center">
                    <h1
                        className="
            text-white
            text-4xl
            font-bold
            "
                    >
                        No Products Found
                    </h1>
                </div>
            ) : (
                <div
                    className="
          grid
          md:grid-cols-3
          gap-10
          "
                >
                    {products.map((item) => (
                        <motion.div
                            key={item._id}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            whileHover={{
                                scale: 1.03,
                            }}
                            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-[35px]
              overflow-hidden
              shadow-2xl
              "
                        >
                            {/* Image */}

                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                  h-[260px]
                  w-full
                  object-cover
                  hover:scale-110
                  duration-700
                  "
                                />
                            </div>

                            {/* Content */}

                            <div className="p-6">
                                <div
                                    className="
                  flex
                  justify-between
                  items-center
                  "
                                >
                                    <p
                                        className="
                    text-blue-400
                    text-sm
                    uppercase
                    "
                                    >
                                        {item.category}
                                    </p>

                                    <p
                                        className="
                    text-green-400
                    font-semibold
                    "
                                    >
                                        In Stock :
                                        {item.stock}
                                    </p>
                                </div>

                                <h1
                                    className="
                  text-white
                  text-3xl
                  font-bold
                  mt-4
                  "
                                >
                                    {item.title}
                                </h1>

                                <p
                                    className="
                  text-gray-400
                  mt-4
                  leading-7
                  line-clamp-3
                  "
                                >
                                    {item.description}
                                </p>

                                <div
                                    className="
                  flex
                  justify-between
                  items-center
                  mt-8
                  "
                                >
                                    <h1
                                        className="
                    text-white
                    text-3xl
                    font-bold
                    "
                                    >
                                        ₹ {item.price}
                                    </h1>

                                    <button
                                        className="
                    px-6
                    py-3
                    bg-blue-600
                    hover:bg-blue-700
                    rounded-2xl
                    text-white
                    duration-300
                    "
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Products;