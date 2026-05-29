import axios from "axios";
import { useEffect, useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

const UpdateStudent = () => {

  const navigate =
    useNavigate();

  const { id } =
    useParams();

  const [formData,
    setFormData] =
    useState({

      image: "",
      name: "",
      fatherName: "",
      motherName: "",
      dob: "",
      mobile: "",
      className: "",

    });



  useEffect(() => {

    loadStudent();

  }, []);




  // ================= LOAD =================

  const loadStudent =
    async () => {

      try {

        const res =
          await axios.get(

            `https://blog-1-5frq.onrender.com/api/student/${id}`

          );

        setFormData(
          res.data
        );

      }

      catch (error) {

        console.log(error);

      }

    };




  // ================= HANDLE CHANGE =================

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

    };




  // ================= UPDATE =================

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      try {

        await axios.put(

          `https://blog-1-5frq.onrender.com/api/student/update/${id}`,

          formData

        );

        navigate(
          "/viewstudent"
        );

      }

      catch (error) {

        console.log(error);

      }

    };




  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-black
      to-slate-950
      flex
      items-center
      justify-center
      p-8
      "
    >

      <form
        onSubmit={handleUpdate}

        className="
        w-full
        max-w-4xl
        bg-white/10
        backdrop-blur-2xl
        border
        border-white/10
        rounded-[40px]
        p-10
        shadow-2xl
        "
      >

        {/* TITLE */}

        <h1
          className="
          text-5xl
          font-black
          text-white
          text-center
          mb-10
          "
        >

          Update Student

        </h1>



        {/* INPUTS */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            "
          />



          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            "
          />



          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={formData.fatherName}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            "
          />



          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            value={formData.motherName}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            "
          />



          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            "
          />



          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            "
          />



          <input
            type="text"
            name="className"
            placeholder="Class Name"
            value={formData.className}
            onChange={handleChange}

            className="
            bg-white/10
            border
            border-white/10
            p-4
            rounded-2xl
            text-white
            outline-none
            md:col-span-2
            "
          />

        </div>



        {/* BUTTON */}

        <button
          type="submit"

          className="
          w-full
          mt-10
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          hover:from-cyan-600
          hover:to-blue-700
          duration-300
          p-5
          rounded-2xl
          text-white
          text-xl
          font-bold
          "
        >

          Update Student

        </button>

      </form>

    </div>

  );

};

export default UpdateStudent;