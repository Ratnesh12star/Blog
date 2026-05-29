import axios from "axios";
import { useEffect, useState } from "react";

const ViewTeacher = () => {

  const [teachers, setTeachers] =
    useState([]);

  useEffect(() => {

    loadTeachers();

  }, []);

  const loadTeachers = async () => {

    try {

      const res =
        await axios.get(
          "http://localhost:5000/api/teacher"
        );

      setTeachers(res.data || []);

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
      p-8
      "
    >

      <h1
        className="
        text-5xl
        font-black
        text-white
        mb-10
        "
      >

        Teachers

      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >

        {teachers.map((teacher) => (

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
            "
          >

            <img
              src={teacher.image}
              alt=""
              className="
              h-72
              w-full
              object-cover
              "
            />

            <div className="p-6">

              <h1
                className="
                text-3xl
                text-white
                font-black
                "
              >

                {teacher.name}

              </h1>

              <p className="text-cyan-400 mt-3">
                {teacher.subject}
              </p>

              <p className="text-gray-400 mt-3">
                {teacher.email}
              </p>

              <p className="text-gray-400 mt-2">
                {teacher.mobile}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ViewTeacher;