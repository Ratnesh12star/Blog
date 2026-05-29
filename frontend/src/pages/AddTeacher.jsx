import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {

    const navigate =
        useNavigate();

    const [data, setData] =
        useState({

            image: "",
            name: "",
            subject: "",
            email: "",
            mobile: "",
            experience: ""

        });


    const changeHandler =
        (e) => {

            setData({

                ...data,

                [e.target.name]:
                    e.target.value

            });

        };


    const addTeacher =
        async (e) => {

            e.preventDefault();

            const token =
                localStorage.getItem(
                    "token"
                );

            await axios.post(

                "https://blog-1-5frq.onrender.com/teacher/create",

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

        <div className="min-h-screen bg-black flex items-center justify-center p-8">

            <form
                onSubmit={addTeacher}

                className="bg-white/10 p-10 rounded-3xl w-full max-w-xl space-y-5 backdrop-blur-xl"
            >

                <h1 className="text-4xl text-white font-bold">

                    Add Teacher

                </h1>

                <input
                    name="image"
                    placeholder="Image URL"
                    onChange={changeHandler}
                    className="w-full p-4 rounded-xl bg-white/10 text-white"
                />

                <input
                    name="name"
                    placeholder="Teacher Name"
                    onChange={changeHandler}
                    className="w-full p-4 rounded-xl bg-white/10 text-white"
                />

                <input
                    name="subject"
                    placeholder="Subject"
                    onChange={changeHandler}
                    className="w-full p-4 rounded-xl bg-white/10 text-white"
                />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    className="w-full p-4 rounded-xl bg-white/10 text-white"
                />

                <input
                    name="mobile"
                    placeholder="Mobile"
                    onChange={changeHandler}
                    className="w-full p-4 rounded-xl bg-white/10 text-white"
                />

                <input
                    name="experience"
                    placeholder="Experience"
                    onChange={changeHandler}
                    className="w-full p-4 rounded-xl bg-white/10 text-white"
                />

                <button
                    className="w-full bg-blue-600 p-4 rounded-xl text-white"
                >

                    Add Teacher

                </button>

            </form>

        </div>

    );

};

export default AddTeacher;