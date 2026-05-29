
import axios from "axios";
import { useEffect, useState } from "react";

import {
  FaBell,
  FaBlog,
  FaThLarge,
  FaPlusCircle,
  FaCog,
  FaSignOutAlt,
  FaUserGraduate,
  FaBoxOpen,
  FaChalkboardTeacher,
  FaList,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import StudentPanel from "./StudentPanel";
import ProductPanel from "./ProductPanel";
import TeacherPanel from "./TeacherPanel";
import CategoryPanel from "./CategoryPanel";

const Dashboard = () => {

  const navigate =
    useNavigate();

  const [blogs, setBlogs] =
    useState([]);

  const [activeMenu,
    setActiveMenu] =
    useState("dashboard");



  // ================= LOAD BLOGS =================

  useEffect(() => {

    loadBlogs();

  }, []);

  const loadBlogs =
    async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:5000/api/blog"
          );

        setBlogs(
          res.data || []
        );

      }

      catch (error) {

        console.log(error);

      }

    };



  // ================= DELETE BLOG =================

  const deleteBlog =
    async (id) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `http://localhost:5000/api/blog/delete/${id}`,

          {
            headers: {
              Authorization:
                token,
            },
          }

        );

        loadBlogs();

      }

      catch (error) {

        console.log(error);

      }

    };



  // ================= LOGOUT =================

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate(
      "/adminlogin"
    );

  };



  // ================= PAGE TITLE =================

  const getTitle = () => {

    switch (activeMenu) {

      case "dashboard":
        return "Dashboard";

      case "blogs":
        return "Blogs";

      case "students":
        return "Students";

      case "products":
        return "Products";

      case "teachers":
        return "Teachers";

      case "categories":
        return "Categories";

      default:
        return "Dashboard";

    }

  };



  return (

    <div
      className="
      min-h-screen
      flex
      bg-gradient-to-br
      from-black
      via-slate-950
      to-black
      "
    >

      {/* ================= SIDEBAR ================= */}

      <div
        className="
        w-[290px]
        bg-white/10
        backdrop-blur-2xl
        border-r
        border-white/10
        p-6
        flex
        flex-col
        "
      >

        {/* LOGO */}

        <div>

          <h1
            className="
            text-4xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            "
          >

            Blogify

          </h1>

          <p
            className="
            text-gray-400
            mt-2
            uppercase
            tracking-widest
            text-sm
            "
          >

            Admin Panel

          </p>

        </div>



        {/* MENU */}

        <div className="mt-10">

          <p className="text-gray-500 mb-4">
            MENU
          </p>

          <div className="space-y-3">

            {/* DASHBOARD */}

            <button
              onClick={() =>
                setActiveMenu(
                  "dashboard"
                )
              }

              className={`
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              text-white
              duration-300

              ${
                activeMenu ===
                "dashboard"

                ? "bg-blue-600"

                : "bg-white/10 hover:bg-blue-600"
              }
              `}
            >

              <FaThLarge />

              Dashboard

            </button>



            {/* BLOG */}

            <button
              onClick={() =>
                setActiveMenu(
                  "blogs"
                )
              }

              className={`
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              text-white
              duration-300

              ${
                activeMenu ===
                "blogs"

                ? "bg-purple-600"

                : "bg-white/10 hover:bg-purple-600"
              }
              `}
            >

              <FaBlog />

              Blogs

            </button>

            <button
              onClick={() =>
                navigate(
                  "/createblog"
                )
              }

              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              bg-white/10
              text-white
              hover:bg-green-600
              duration-300
              "
            >

              <FaPlusCircle />

              Add Blog

            </button>



            {/* STUDENTS */}

            <button
              onClick={() =>
                setActiveMenu(
                  "students"
                )
              }

              className={`
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              text-white
              duration-300

              ${
                activeMenu ===
                "students"

                ? "bg-cyan-600"

                : "bg-white/10 hover:bg-cyan-600"
              }
              `}
            >

              <FaUserGraduate />

              Students

            </button>

            <button
              onClick={() =>
                navigate(
                  "/addstudent"
                )
              }

              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              bg-white/10
              text-white
              hover:bg-emerald-600
              duration-300
              "
            >

              <FaPlusCircle />

              Add Student

            </button>



            {/* PRODUCTS */}

            <button
              onClick={() =>
                setActiveMenu(
                  "products"
                )
              }

              className={`
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              text-white
              duration-300

              ${
                activeMenu ===
                "products"

                ? "bg-orange-600"

                : "bg-white/10 hover:bg-orange-600"
              }
              `}
            >

              <FaBoxOpen />

              Products

            </button>

            <button
              onClick={() =>
                navigate(
                  "/addproduct"
                )
              }

              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              bg-white/10
              text-white
              hover:bg-pink-600
              duration-300
              "
            >

              <FaPlusCircle />

              Add Product

            </button>



            {/* TEACHERS */}

            <button
              onClick={() =>
                setActiveMenu(
                  "teachers"
                )
              }

              className={`
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              text-white
              duration-300

              ${
                activeMenu ===
                "teachers"

                ? "bg-indigo-600"

                : "bg-white/10 hover:bg-indigo-600"
              }
              `}
            >

              <FaChalkboardTeacher />

              Teachers

            </button>

            <button
              onClick={() =>
                navigate(
                  "/addteacher"
                )
              }

              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              bg-white/10
              text-white
              hover:bg-violet-600
              duration-300
              "
            >

              <FaPlusCircle />

              Add Teacher

            </button>



            {/* CATEGORY */}

            <button
              onClick={() =>
                setActiveMenu(
                  "categories"
                )
              }

              className={`
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              text-white
              duration-300

              ${
                activeMenu ===
                "categories"

                ? "bg-yellow-600"

                : "bg-white/10 hover:bg-yellow-600"
              }
              `}
            >

              <FaList />

              Categories

            </button>

            <button
              onClick={() =>
                navigate(
                  "/addcategory"
                )
              }

              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              bg-white/10
              text-white
              hover:bg-amber-600
              duration-300
              "
            >

              <FaPlusCircle />

              Add Category

            </button>



            {/* SETTINGS */}

            <button
              className="
              w-full
              flex
              items-center
              gap-3
              p-4
              rounded-2xl
              bg-white/10
              text-white
              hover:bg-gray-600
              duration-300
              "
            >

              <FaCog />

              Settings

            </button>

          </div>

        </div>



        {/* LOGOUT */}

        <div className="mt-auto pt-10">

          <button
            onClick={logout}

            className="
            w-full
            bg-red-600
            hover:bg-red-700
            duration-300
            p-4
            rounded-2xl
            text-white
            flex
            items-center
            justify-center
            gap-3
            font-semibold
            "
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>



      {/* ================= MAIN ================= */}

      <div className="flex-1 p-8 overflow-y-auto">

        {/* TOPBAR */}

        <div className="flex justify-between items-center">

          <h1
            className="
            text-white
            text-5xl
            font-black
            "
          >

            {getTitle()}

          </h1>

          <div className="flex items-center gap-5">

            <div
              className="
              bg-white/10
              p-4
              rounded-2xl
              "
            >

              <FaBell className="text-white text-xl" />

            </div>

            <div
              className="
              bg-white/10
              px-6
              py-3
              rounded-2xl
              text-white
              font-semibold
              "
            >

              Admin

            </div>

          </div>

        </div>



        {/* ================= DASHBOARD ================= */}

        {
          activeMenu ===
          "dashboard"

          &&

          <div
            className="
            grid
            md:grid-cols-4
            gap-6
            mt-10
            "
          >

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h1 className="text-5xl font-bold text-white">
                {blogs.length}
              </h1>

              <p className="text-gray-400 mt-2">
                Total Blogs
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h1 className="text-5xl font-bold text-white">
                20
              </h1>

              <p className="text-gray-400 mt-2">
                Students
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h1 className="text-5xl font-bold text-white">
                15
              </h1>

              <p className="text-gray-400 mt-2">
                Products
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h1 className="text-5xl font-bold text-white">
                8
              </h1>

              <p className="text-gray-400 mt-2">
                Teachers
              </p>

            </div>

          </div>

        }



        {/* ================= BLOGS ================= */}

        {
          activeMenu ===
          "blogs"

          &&

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {
              blogs.map(
                (blog) => (

                  <div
                    key={blog._id}

                    className="
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-3xl
                    p-5
                    "
                  >

                    <img
                      src={blog.image}
                      alt=""

                      className="
                      h-52
                      w-full
                      rounded-2xl
                      object-cover
                      "
                    />

                    <h1 className="text-white text-2xl font-bold mt-4">
                      {blog.title}
                    </h1>

                    <p className="text-gray-400 mt-2">
                      {blog.author}
                    </p>

                    <div className="flex gap-3 mt-5">

                      <button
                        onClick={() =>
                          navigate(
                            `/viewblog/${blog._id}`
                          )
                        }

                        className="
                        flex-1
                        bg-cyan-600
                        hover:bg-cyan-700
                        p-3
                        rounded-xl
                        text-white
                        "
                      >

                        View

                      </button>

                      <button
                        onClick={() =>
                          navigate(
                            `/updateblog/${blog._id}`
                          )
                        }

                        className="
                        flex-1
                        bg-yellow-500
                        hover:bg-yellow-600
                        p-3
                        rounded-xl
                        text-white
                        "
                      >

                        Update

                      </button>

                      <button
                        onClick={() =>
                          deleteBlog(
                            blog._id
                          )
                        }

                        className="
                        flex-1
                        bg-red-600
                        hover:bg-red-700
                        p-3
                        rounded-xl
                        text-white
                        "
                      >

                        Delete

                      </button>

                    </div>

                  </div>

                )
              )
            }

          </div>

        }



        {/* STUDENTS */}

        {
          activeMenu ===
          "students"

          &&

          <StudentPanel />

        }



        {/* PRODUCTS */}

        {
          activeMenu ===
          "products"

          &&

          <ProductPanel />

        }



        {/* TEACHERS */}

        {
          activeMenu ===
          "teachers"

          &&

          <TeacherPanel />

        }



        {/* CATEGORY */}

        {
          activeMenu ===
          "categories"

          &&

          <CategoryPanel />

        }

      </div>

    </div>

  );

};

export default Dashboard;
