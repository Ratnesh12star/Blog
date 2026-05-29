import axios from "axios";
import { useEffect, useState } from "react";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/product"
      );

      setProducts(res.data.data || []);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black p-8">
      
      <h1 className="text-5xl font-black text-white mb-10">
        Products
      </h1>

      {products.length === 0 ? (
        <h1 className="text-white text-2xl">
          No Products Found
        </h1>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] overflow-hidden hover:scale-[1.02] duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h1 className="text-3xl text-white font-black">
                  {product.title}
                </h1>

                <p className="text-gray-400 mt-4">
                  {product.description}
                </p>

                <h1 className="text-4xl font-black text-orange-400 mt-6">
                  ₹ {product.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewProduct;