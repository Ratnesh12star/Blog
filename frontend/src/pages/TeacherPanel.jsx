import axios from "axios";

import { useEffect, useState } from "react";

import {
  FaChalkboardTeacher,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaTrash,
  FaPlus,
  FaEye,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const TeacherPanel = () => {

  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);




  // ================= LOAD TEACHERS =================

  useEffect(() => {

    getAllTeachers();

  }, []);




  const getAllTeachers = async () => {

    try {

      const response = await axios.get(
        "https://blog-1-5frq.onrender.com/api/teacher"
      );

      setTeachers(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };




  // ================= DELETE TEACHER =================

  const deleteTeacher = async (teacherId) => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(

        `https://blog-1-5frq.onrender.com/api/teacher/delete/${teacherId}`,

        {
          headers: {
            Authorization: token,
          },
        }

      );

      getAllTeachers();

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
      to-slate-900
      p-8
      "
    >

      {/* ================= TOP SECTION ================= */}

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
            Teachers
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            text-lg
            "
          >
            Manage all teacher data
          </p>

        </div>




        {/* ================= ADD BUTTON ================= */}

        <button

          onClick={() => {

            navigate("/addteacher");

          }}

          className="
          flex
          items-center
          gap-3
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          hover:scale-105
          duration-300
          px-7
          py-4
          rounded-2xl
          text-white
          font-semibold
          "
        >

          <FaPlus />

          Add Teacher

        </button>

      </div>




      {/* ================= TOTAL CARD ================= */}

      <div
        className="
        mt-10
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
          {teachers.length}
        </h1>

        <p className="text-gray-400 mt-3">
          Total Teachers
        </p>

      </div>




      {/* ================= TEACHER CARDS ================= */}

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        mt-12
        "
      >

        {

          teachers.map((teacher) => (

            <div
              key={teacher._id}

              className="
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
              rounded-[35px]
              overflow-hidden
              hover:scale-[1.02]
              duration-300
              shadow-2xl
              "
            >

              {/* ================= IMAGE ================= */}

              <div className="relative">

                <img
                  src={teacher.image}
                  alt="teacher"

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




                {/* ================= TEACHER INFO ================= */}

                <div
                  className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    h-14
                    w-14
                    rounded-full
                    bg-cyan-600
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <FaChalkboardTeacher
                      className="
                      text-white
                      text-2xl
                      "
                    />

                  </div>



                  <div>

                    <h1
                      className="
                      text-white
                      text-2xl
                      font-black
                      "
                    >
                      {teacher.name}
                    </h1>

                    <p className="text-cyan-300">
                      {teacher.subject}
                    </p>

                  </div>

                </div>

              </div>




              {/* ================= DETAILS ================= */}

              <div className="p-6">

                <div className="space-y-4">

                  {/* EMAIL */}

                  <div
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <FaEnvelope className="text-cyan-400" />

                    <p className="text-white">
                      {teacher.email}
                    </p>

                  </div>




                  {/* MOBILE */}

                  <div
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <FaPhone className="text-cyan-400" />

                    <p className="text-white">
                      {teacher.mobile}
                    </p>

                  </div>

                </div>




                {/* ================= BUTTONS ================= */}

                <div
                  className="
                  grid
                  grid-cols-3
                  gap-4
                  mt-8
                  "
                >

                  {/* VIEW BUTTON */}

                  <button

                    onClick={() => {

                      navigate(
                        `/viewteacher/${teacher._id}`
                      );

                    }}

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




                  {/* UPDATE BUTTON */}

                  <button

                    onClick={() => {

                      navigate(
                        `/updateteacher/${teacher._id}`
                      );

                    }}

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




                  {/* DELETE BUTTON */}

                  <button

                    onClick={() => {

                      deleteTeacher(teacher._id);

                    }}

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

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default TeacherPanel;