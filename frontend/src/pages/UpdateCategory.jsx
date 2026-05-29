import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",

    });

  useEffect(() => {

    loadCategory();

  }, []);

  const loadCategory = async () => {

    const res =
      await axios.get(
        `http://localhost:5000/api/category/${id}`
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

        `http://localhost:5000/api/category/update/${id}`,

        formData

      );

      navigate("/viewcategory");

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

          Update Category

        </h1>

        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Category Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

        </div>

        <button
          type="submit"

          className="
          w-full
          mt-8
          bg-yellow-600
          hover:bg-yellow-700
          p-5
          rounded-2xl
          text-white
          font-bold
          "
        >

          Update Category

        </button>

      </form>

    </div>

  );

};

export default UpdateCategory;