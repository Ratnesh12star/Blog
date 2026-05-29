import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] =
    useState({

      image: "",
      title: "",
      description: "",
      price: "",

    });

  useEffect(() => {

    loadProduct();

  }, []);

  const loadProduct = async () => {

    const res =
      await axios.get(
        `http://localhost:5000/api/product/${id}`
      );

    setFormData(res.data);

  };

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      await axios.put(

        `https://blog-1-5frq.onrender.com/api/product/update/${id}`,

        formData

      );

      navigate("/viewproduct");

    };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-8">

      <form
        onSubmit={handleUpdate}

        className="
        w-full
        max-w-2xl
        bg-white/10
        backdrop-blur-2xl
        p-10
        rounded-[35px]
        border
        border-white/10
        "
      >

        <h1 className="text-5xl text-white font-black text-center mb-10">

          Update Product

        </h1>

        <div className="space-y-6">

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none h-40"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

        </div>

        <button
          type="submit"

          className="
          w-full
          mt-8
          bg-orange-600
          hover:bg-orange-700
          p-5
          rounded-2xl
          text-white
          font-bold
          "
        >

          Update Product

        </button>

      </form>

    </div>

  );

};

export default UpdateProduct;