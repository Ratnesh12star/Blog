import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLayerGroup,
  FaEdit,
  FaTrash,
  FaEye,
  FaEnvelope,
} from "react-icons/fa";

const CategoryPanel = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories();
  }, []);

  // ================= LOAD =================
  const loadCategories = async () => {
    try {
      const res = await axios.get(
        "https://blog-1-5frq.onrender.com/category"
      );

      setCategories(res.data.data || []);
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  // ================= DELETE =================
  const deleteCategory = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://blog-1-5frq.onrender.com/category/delete/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      loadCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black p-8 rounded-[40px]">

      {/* TOP */}
      <div className="flex justify-between items-center flex-wrap gap-5">

        <div>
          <h1 className="text-5xl font-black text-white">
            Categories
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Manage all categories data
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-[30px] shadow-2xl">
          <h1 className="text-4xl text-white font-black">
            {categories.length}
          </h1>
          <p className="text-gray-400 mt-1">Total Categories</p>
        </div>
      </div>

      {/* EMPTY */}
      {categories.length === 0 ? (
        <div className="mt-14 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-16 text-center">
          <FaLayerGroup className="text-6xl text-purple-400 mx-auto" />

          <h1 className="text-white text-4xl font-black mt-8">
            No Categories Found
          </h1>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

          {categories.map((category) => (
            <div
              key={category._id}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-7 shadow-2xl"
            >

              <h1 className="text-3xl text-white font-black">
                {category.name}
              </h1>

              <div className="flex items-center gap-3 mt-5 bg-black/30 border border-white/10 rounded-2xl p-4">
                <FaEnvelope className="text-pink-400" />
                <p className="text-gray-300">
                  {category.email}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="grid grid-cols-3 gap-3 mt-8">

                {/* VIEW */}
                <button
                  onClick={() =>
                    navigate(`/viewcategory/${category._id}`)
                  }
                  className="bg-cyan-600 hover:bg-cyan-700 p-3 rounded-xl text-white flex items-center justify-center gap-2"
                >
                  <FaEye />
                </button>

                {/* UPDATE */}
                <button
                  onClick={() =>
                    navigate(`/updatecategory/${category._id}`)
                  }
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-xl text-white flex items-center justify-center gap-2"
                >
                  <FaEdit />
                </button>

                {/* DELETE */}
                <button
                  onClick={() => deleteCategory(category._id)}
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-xl text-white flex items-center justify-center gap-2"
                >
                  <FaTrash />
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default CategoryPanel;