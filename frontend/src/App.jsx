import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

import Student from "./pages/Student";
import Product from "./pages/Product";
import Teacher from "./pages/Teacher";
import Category from "./pages/Category";

import AddStudent from "./pages/AddStudent";
import AddProduct from "./pages/AddProduct";
import AddTeacher from "./pages/AddTeacher";
import AddCategory from "./pages/AddCategory";

import UpdateBlog from "./pages/UpdateBlog";
import AddBlogForm from "./components/AddBlogForm";

import ViewBlog from "./pages/ViewBlog";
import ViewStudent from "./pages/ViewStudent";
import ViewProduct from "./pages/ViewProduct";
import ViewTeacher from "./pages/ViewTeacher";
import ViewCategory from "./pages/ViewCategory";

import UpdateStudent from "./pages/UpdateStudent";
import UpdateProduct from "./pages/UpdateProduct";
import UpdateTeacher from "./pages/UpdateTeacher";
import UpdateCategory from "./pages/UpdateCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* LIST PAGES */}
        <Route path="/student" element={<Student />} />
        <Route path="/product" element={<Product />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/category" element={<Category />} />

        {/* ADD PAGES */}
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/createblog" element={<AddBlogForm />} />

        {/* VIEW PAGES */}
        <Route path="/viewblog/:id" element={<ViewBlog />} />
        <Route path="/viewstudent/:id" element={<ViewStudent />} />
        <Route path="/viewproduct/:id" element={<ViewProduct />} />
        <Route path="/viewteacher/:id" element={<ViewTeacher />} />
        <Route path="/viewcategory/:id" element={<ViewCategory />} />

        {/* UPDATE PAGES */}
        <Route path="/updatestudent/:id" element={<UpdateStudent />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        <Route path="/updateteacher/:id" element={<UpdateTeacher />} />
        <Route path="/updatecategory/:id" element={<UpdateCategory />} />
        <Route path="/updateblog/:id" element={<UpdateBlog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;