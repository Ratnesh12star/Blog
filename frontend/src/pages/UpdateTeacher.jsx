import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const UpdateTeacher = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] =
    useState({

      image: "",
      name: "",
      subject: "",
      email: "",
      mobile: "",

    });

  useEffect(() => {

    loadTeacher();

  }, []);

  const loadTeacher = async () => {

    const res =
      await axios.get(
        `https://blog-1-5frq.onrender.com/api/teacher/${id}`
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

        `https://blog-1-5frq.onrender.com/api/teacher/update/${id}`,

        formData

      );

      navigate("/viewteacher");

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

          Update Teacher

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
            name="name"
            placeholder="Teacher Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
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

          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none"
          />

        </div>

        <button
          type="submit"

          className="
          w-full
          mt-8
          bg-indigo-600
          hover:bg-indigo-700
          p-5
          rounded-2xl
          text-white
          font-bold
          "
        >

          Update Teacher

        </button>

      </form>

    </div>

  );

};

export default UpdateTeacher;