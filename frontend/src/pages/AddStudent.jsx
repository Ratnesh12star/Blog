import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {

  const navigate =
    useNavigate();

  const [data,setData] =
    useState({

      image:"",
      name:"",
      fatherName:"",
      motherName:"",
      dob:"",
      mobile:"",
      studentClass:""

    });


  const changeHandler =
  (e)=>{

    setData({

      ...data,

      [e.target.name]:
      e.target.value

    });

  };



  const addStudent =
  async(e)=>{

    e.preventDefault();

    try{

      const token=
      localStorage.getItem(
      "token"
      );

      await axios.post(

      "https://blog-1-5frq.onrender.com/api/student/create",

      data,

      {
        headers:{
          Authorization:
          token
        }
      }

      );

      navigate(
      "/dashboard"
      );

    }

    catch(error){

      console.log(
      error
      );

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
    flex
    items-center
    justify-center
    p-8
    "
    >

      <div
      className="
      w-full
      max-w-6xl
      grid
      md:grid-cols-2
      bg-white/10
      backdrop-blur-2xl
      rounded-[40px]
      overflow-hidden
      border
      border-white/10
      "
      >

        {/* Left */}

        <div
        className="
        hidden
        md:flex
        relative
        "
        >

          <img

          src={
          data.image ||

          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000"

          }

          alt=""

          className="
          h-full
          w-full
          object-cover
          "
          />


          <div
          className="
          absolute
          bottom-10
          left-8
          right-8
          bg-black/50
          backdrop-blur-xl
          p-6
          rounded-3xl
          "
          >

          <h1
          className="
          text-white
          text-4xl
          font-bold
          "
          >

          Add Student

          </h1>

          <p
          className="
          text-gray-300
          mt-3
          "
          >

          Add student details and manage them from admin dashboard.

          </p>

          </div>

        </div>


        {/* Right */}

        <div className="p-10">

          <h1
          className="
          text-white
          text-4xl
          font-bold
          mb-8
          "
          >

          Student Form

          </h1>


          <form
          onSubmit={
          addStudent
          }

          className="
          space-y-5
          "
          >

            <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={data.image}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            outline-none
            "
            />


            <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={data.name}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            "
            />


            <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={data.fatherName}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            "
            />


            <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            value={data.motherName}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            "
            />



            <input
            type="date"
            name="dob"
            value={data.dob}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            "
            />


            <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            value={data.mobile}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            "
            />


            <input
            type="text"
            name="studentClass"
            placeholder="Class"
            value={data.studentClass}
            onChange={
            changeHandler
            }

            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            text-white
            "
            />


            <button
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            p-4
            rounded-2xl
            "
            >

            Add Student

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default AddStudent;