import axios from "axios";
import { useEffect, useState } from "react";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await axios.get(
        "https://blog-1-5frq.onrender.com/api/category"
      );

      setCategories(res.data.data || []);
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black p-8">
      
      <h1 className="text-5xl font-black text-white mb-10">
        Categories
      </h1>

      {categories.length === 0 ? (
        <h1 className="text-white text-2xl">
          No Categories Found
        </h1>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category._id}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 hover:scale-[1.02] duration-300"
            >
              <div className="h-24 w-24 rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-500" />

              <h1 className="text-3xl font-black text-white mt-8">
                {category.name}
              </h1>

              <p className="text-gray-400 mt-4">
                {category.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewCategory;