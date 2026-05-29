import axios from "axios";
import { useEffect, useState } from "react";

import { FaEye, FaEdit, FaTrash, FaBoxOpen, FaPlus } from "react-icons/fa";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const ProductPanel = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  // ================= LOAD PRODUCTS =================

  const loadProducts = async () => {
    try {
      const res = await axios.get("https://blog-1-5frq.onrender.com/api/product");

      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        setProducts(res.data.data || []);
      }
    } catch (error) {
      console.log(error);

      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE PRODUCT =================

  const deleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://blog-1-5frq.onrender.com/api/product/delete/${id}`,

        {
          headers: {
            Authorization: token,
          },
        },
      );

      loadProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-black
      to-slate-900
      p-8
      "
    >
      {/* ================= TOP ================= */}

      <div
        className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-6
        "
      >
        <div>
          <h1
            className="
            text-5xl
            font-black
            text-white
            "
          >
            Products
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            text-lg
            "
          >
            Manage all products data
          </p>
        </div>

        {/* ADD BUTTON */}

        <button
          onClick={() => navigate("/addproduct")}
          className="
          flex
          items-center
          gap-3
          bg-gradient-to-r
          from-pink-500
          to-orange-500
          hover:scale-105
          duration-300
          px-7
          py-4
          rounded-2xl
          text-white
          font-semibold
          shadow-lg
          "
        >
          <FaPlus />
          Add Product
        </button>
      </div>

      {/* ================= STATS ================= */}

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        mt-12
        "
      >
        <div
          className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
        >
          <h1
            className="
            text-5xl
            font-black
            text-white
            "
          >
            {products.length}
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            "
          >
            Total Products
          </p>
        </div>

        <div
          className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
        >
          <h1
            className="
            text-5xl
            font-black
            text-white
            "
          >
            120+
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            "
          >
            Available Stock
          </p>
        </div>

        <div
          className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
        >
          <h1
            className="
            text-5xl
            font-black
            text-white
            "
          >
            15+
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            "
          >
            Categories
          </p>
        </div>
      </div>

      {/* ================= LOADING ================= */}

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
        <div
          className="
                mt-16
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/10
                rounded-[40px]
                p-20
                text-center
                "
        >
          <div
            className="
                  h-28
                  w-28
                  rounded-full
                  bg-pink-500/20
                  flex
                  items-center
                  justify-center
                  mx-auto
                  "
          >
            <FaBoxOpen
              className="
                    text-6xl
                    text-pink-400
                    "
            />
          </div>

          <h1
            className="
                  text-white
                  text-4xl
                  font-black
                  mt-8
                  "
          >
            No Products Found
          </h1>

          <p
            className="
                  text-gray-400
                  mt-4
                  text-lg
                  "
          >
            Add product data from admin panel
          </p>
        </div>
      ) : (
        <div
          className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
                mt-14
                "
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                        bg-white/10
                        backdrop-blur-2xl
                        border
                        border-white/10
                        rounded-[35px]
                        overflow-hidden
                        shadow-2xl
                        "
            >
              {/* IMAGE */}

              <div className="relative">
                <img
                  src={product.image}
                  alt=""
                  className="
                            h-80
                            w-full
                            object-cover
                            "
                />

                <div
                  className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/80
                            to-transparent
                            "
                />

                <div
                  className="
                            absolute
                            bottom-5
                            left-5
                            "
                >
                  <p
                    className="
                              text-pink-300
                              text-sm
                              uppercase
                              tracking-[3px]
                              "
                  >
                    {product.category}
                  </p>

                  <h1
                    className="
                              text-white
                              text-3xl
                              font-black
                              mt-2
                              "
                  >
                    {product.title}
                  </h1>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <div className="space-y-4">
                  <div
                    className="
                              bg-white/5
                              border
                              border-white/10
                              rounded-2xl
                              p-4
                              "
                  >
                    <p className="text-gray-400 text-sm">Description</p>

                    <h1
                      className="
                                text-white
                                mt-2
                                leading-7
                                "
                    >
                      {product.description}
                    </h1>
                  </div>

                  <div
                    className="
                              grid
                              grid-cols-2
                              gap-4
                              "
                  >
                    <div
                      className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-2xl
                                p-4
                                "
                    >
                      <p className="text-gray-400 text-sm">Price</p>

                      <h1
                        className="
                                  text-green-400
                                  text-xl
                                  font-bold
                                  mt-2
                                  "
                      >
                        ₹{product.price}
                      </h1>
                    </div>

                    <div
                      className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-2xl
                                p-4
                                "
                    >
                      <p className="text-gray-400 text-sm">Stock</p>

                      <h1
                        className="
                                  text-cyan-400
                                  text-xl
                                  font-bold
                                  mt-2
                                  "
                      >
                        {product.stock}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* BUTTONS */}

                <div
                  className="
                            grid
                            grid-cols-3
                            gap-4
                            mt-8
                            "
                >
                  {/* VIEW */}

                  <button
                    onClick={() => navigate(`/viewproduct/${product._id}`)}
                    className="
                              bg-cyan-600
                              hover:bg-cyan-700
                              duration-300
                              p-4
                              rounded-2xl
                              text-white
                              flex
                              items-center
                              justify-center
                              gap-2
                              font-semibold
                              "
                  >
                    <FaEye />
                    View
                  </button>

                  {/* UPDATE */}

                  <button
                    onClick={() => navigate(`/updateproduct/${product._id}`)}
                    className="
                              bg-yellow-500
                              hover:bg-yellow-600
                              duration-300
                              p-4
                              rounded-2xl
                              text-white
                              flex
                              items-center
                              justify-center
                              gap-2
                              font-semibold
                              "
                  >
                    <FaEdit />
                    Update
                  </button>

                  {/* DELETE */}

                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="
                              bg-red-600
                              hover:bg-red-700
                              duration-300
                              p-4
                              rounded-2xl
                              text-white
                              flex
                              items-center
                              justify-center
                              gap-2
                              font-semibold
                              "
                  >
                    <FaTrash />
                    Delete
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

export default ProductPanel;
