import axios from "axios";
import { useEffect, useState } from "react";

const ViewStudent = () => {

  const [students, setStudents] =
    useState([]);

  useEffect(() => {

    loadStudents();

  }, []);

  const loadStudents = async () => {

    try {

      const res =
        await axios.get(
          "http://localhost:5000/api/student"
        );

      setStudents(res.data || []);

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

        Students

      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >

        {students.map((student) => (

          <div
            key={student._id}

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
              src={student.image}
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
                font-black
                text-white
                "
              >

                {student.name}

              </h1>

              <div className="space-y-3 mt-5">

                <p className="text-gray-300">
                  Father:
                  {student.fatherName}
                </p>

                <p className="text-gray-300">
                  Mother:
                  {student.motherName}
                </p>

                <p className="text-gray-300">
                  Class:
                  {student.className}
                </p>

                <p className="text-gray-300">
                  Mobile:
                  {student.mobile}
                </p>

                <p className="text-gray-300">
                  DOB:
                  {student.dob}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ViewStudent;