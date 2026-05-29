import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      w-[95%]
      md:w-[85%]
      z-[999]
      bg-white/70
      backdrop-blur-lg
      border
      border-gray-200
      shadow-xl
      rounded-2xl
      px-6
      py-4
      "
    >

      <div className="flex justify-between items-center">

        {/* Logo */}

        <h1
          className="
          text-2xl
          font-bold
          text-black
          "
        >

          BlogHub

        </h1>


        {/* Desktop Menu */}

        <ul
          className="
          hidden
          md:flex
          gap-10
          text-gray-700
          font-medium
          items-center
          "
        >

          <li>

            <a
              href="#"
              className="hover:text-blue-600 duration-300"
            >

              Home

            </a>

          </li>


          <li>

            <a
              href="#blogs"
              className="hover:text-blue-600 duration-300"
            >

              Blogs

            </a>

          </li>


          <li>

            <a
              href="#testimonials"
              className="hover:text-blue-600 duration-300"
            >

              Reviews

            </a>

          </li>


          <li>

            <Link
              to="/student"
              className="hover:text-blue-600 duration-300"
            >

              Student

            </Link>

          </li>


          <li>

            <Link
              to="/teacher"
              className="hover:text-blue-600 duration-300"
            >

              Teacher

            </Link>

          </li>


          <li>

            <Link
              to="/category"
              className="hover:text-blue-600 duration-300"
            >

              Category

            </Link>

          </li>


          <li>

            <Link
              to="/product"
              className="hover:text-blue-600 duration-300"
            >

              Products

            </Link>

          </li>

        </ul>


        {/* Mobile Button */}

        <button
          className="
          md:hidden
          text-2xl
          "
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          ☰

        </button>

      </div>


      {/* Mobile Menu */}

      {
        menuOpen && (

          <div
            className="
            md:hidden
            flex
            flex-col
            gap-4
            mt-5
            text-center
            text-gray-700
            "
          >

            <a href="#">

              Home

            </a>


            <a href="#blogs">

              Blogs

            </a>


            <a href="#testimonials">

              Reviews

            </a>


            <Link to="/student">

              Student

            </Link>


            <Link to="/teacher">

              Teacher

            </Link>


            <Link to="/category">

              Category

            </Link>


            <Link to="/product">

              Products

            </Link>

          </div>

        )
      }

    </nav>

  );

};

export default Navbar;