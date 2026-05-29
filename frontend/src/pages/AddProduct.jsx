import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const navigate =
        useNavigate();

    const [data, setData] =
        useState({

            image: "",
            title: "",
            price: "",
            category: "",
            stock: "",
            description: ""

        });


    const changeHandler =
        (e) => {

            setData({

                ...data,

                [e.target.name]:
                    e.target.value

            });

        };


    const addProduct =
        async (e) => {

            e.preventDefault();

            const token =
                localStorage.getItem(
                    "token"
                );

            await axios.post(

                "https://blog-1-5frq.onrender.com/api/product/create",

                data,

                {
                    headers: {
                        Authorization:
                            token
                    }
                }

            );

            navigate(
                "/dashboard"
            );

        };


    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black flex items-center justify-center p-8">

            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-[35px] p-10 border border-white/10">

                <h1 className="text-4xl text-white font-bold mb-8">

                    Add Product

                </h1>


                <form
                    onSubmit={
                        addProduct
                    }

                    className="space-y-5"
                >

                    <input
                        name="image"
                        placeholder="Image URL"
                        onChange={changeHandler}
                        className="w-full p-4 rounded-xl bg-white/10 text-white"
                    />


                    <input
                        name="title"
                        placeholder="Product Title"
                        onChange={changeHandler}
                        className="w-full p-4 rounded-xl bg-white/10 text-white"
                    />


                    <input
                        name="price"
                        placeholder="Price"
                        onChange={changeHandler}
                        className="w-full p-4 rounded-xl bg-white/10 text-white"
                    />


                    <input
                        name="category"
                        placeholder="Category"
                        onChange={changeHandler}
                        className="w-full p-4 rounded-xl bg-white/10 text-white"
                    />


                    <input
                        name="stock"
                        placeholder="Stock"
                        onChange={changeHandler}
                        className="w-full p-4 rounded-xl bg-white/10 text-white"
                    />


                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={changeHandler}
                        className="w-full p-4 rounded-xl bg-white/10 text-white h-32"
                    />


                    <button
                        className="w-full bg-blue-600 p-4 rounded-xl text-white"
                    >

                        Add Product

                    </button>

                </form>

            </div>

        </div>

    );

};

export default AddProduct;