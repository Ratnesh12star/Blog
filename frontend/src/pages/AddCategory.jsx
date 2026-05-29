import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addCategory = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/category/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ IMPORTANT FIX
          },
        }
      );

      navigate("/category");
    } catch (error) {
      console.log(error);
      alert("Category not added");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <form
        onSubmit={addCategory}
        className="bg-white/10 p-10 rounded-3xl w-full max-w-xl space-y-5 backdrop-blur-xl"
      >
        <h1 className="text-4xl text-white font-bold">
          Add Category
        </h1>

        <input
          name="name"
          placeholder="Category Name"
          onChange={changeHandler}
          className="w-full p-4 rounded-xl bg-white/10 text-white"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          className="w-full p-4 rounded-xl bg-white/10 text-white"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 p-4 rounded-xl text-white"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;