import axios from "axios";

import { useEffect, useState } from "react";

import {
  FaUserGraduate,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const StudentPanel = () => {

  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  useEffect(() => {

    getAllStudents();

  }, []);




  // ================= GET ALL STUDENTS =================

  const getAllStudents = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/student"
      );

      setStudents(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };




  // ================= DELETE STUDENT =================

  const deleteStudent = async (studentId) => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(

        `http://localhost:5000/api/student/delete/${studentId}`,

        {
          headers: {
            Authorization: token,
          },
        }

      );

      getAllStudents();

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
        justify-between
        items-center
        flex-wrap
        gap-5
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
            Students
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            text-lg
            "
          >
            Manage all student data
          </p>

        </div>



        {/* ================= TOTAL STUDENTS ================= */}

        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          px-8
          py-5
          rounded-3xl
          "
        >

          <h1
            className="
            text-4xl
            text-white
            font-black
            "
          >
            {students.length}
          </h1>

          <p className="text-gray-400 mt-2">
            Total Students
          </p>

        </div>

      </div>




      {/* ================= STUDENT CARDS ================= */}

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

          students.map((student) => (

            <div
              key={student._id}

              className="
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
              rounded-[35px]
              overflow-hidden
              shadow-2xl
              hover:scale-[1.02]
              duration-300
              "
            >

              {/* ================= IMAGE ================= */}

              <div className="relative">

                <img
                  src={student.image}
                  alt="student"

                  className="
                  h-72
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



                {/* ================= STUDENT INFO ================= */}

                <div
                  className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  items-center
                  gap-3
                  "
                >

                  <div
                    className="
                    h-14
                    w-14
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <FaUserGraduate
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
                      {student.name}
                    </h1>

                    <p className="text-blue-300">
                      {student.studentClass}
                    </p>

                  </div>

                </div>

              </div>




              {/* ================= DETAILS ================= */}

              <div className="p-6">

                <div className="space-y-4">

                  {/* FATHER */}

                  <div
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    "
                  >

                    <p className="text-gray-400 text-sm">
                      Father Name
                    </p>

                    <h1 className="text-white text-lg font-semibold">
                      {student.fatherName}
                    </h1>

                  </div>



                  {/* MOTHER */}

                  <div
                    className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    "
                  >

                    <p className="text-gray-400 text-sm">
                      Mother Name
                    </p>

                    <h1 className="text-white text-lg font-semibold">
                      {student.motherName}
                    </h1>

                  </div>




                  {/* DOB + MOBILE */}

                  <div className="grid grid-cols-2 gap-4">

                    <div
                      className="
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      p-4
                      "
                    >

                      <p className="text-gray-400 text-sm">
                        DOB
                      </p>

                      <h1 className="text-white font-semibold">
                        {student.dob}
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

                      <p className="text-gray-400 text-sm">
                        Mobile
                      </p>

                      <h1 className="text-white font-semibold">
                        {student.mobile}
                      </h1>

                    </div>

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
                        `/viewstudent/${student._id}`
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
                        `/updatestudent/${student._id}`
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

                      deleteStudent(student._id);

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

export default StudentPanel;