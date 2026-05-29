import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const login = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const res = await axios.post(

                "https://blog-1-5frq.onrender.com/admin/login",

                {
                    email,
                    password
                }

            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            alert("Invalid Credentials");

        }

        finally {

            setLoading(false)

        }

    }


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
px-6
"
        >

            <div
                className="
max-w-6xl
w-full
grid
md:grid-cols-2
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-[35px]
shadow-2xl
overflow-hidden
"
            >


                {/* Left Side */}

                <div
                    className="
hidden
md:flex
items-center
justify-center
p-10
bg-gradient-to-br
from-blue-600
to-purple-700
"
                >

                    <div>

                        <img

                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"

                            alt="admin"

                            className="
rounded-3xl
shadow-2xl
w-full
animate-pulse
"
                        />

                        <h1
                            className="
text-white
text-4xl
font-bold
mt-8
">

                            Admin Dashboard

                        </h1>

                        <p
                            className="
text-white/80
mt-4
leading-8
">

                            Manage blogs, update content,
                            create articles and control
                            your platform.

                        </p>

                    </div>

                </div>



                {/* Right Side */}

                <div className="p-10 md:p-16">

                    <p className="
text-blue-400
tracking-widest
">

                        ADMIN PANEL

                    </p>

                    <h1
                        className="
text-4xl
font-bold
text-white
mt-3
">

                        Welcome Back

                    </h1>

                    <p className="
text-gray-400
mt-3
">

                        Login to access your dashboard

                    </p>



                    <form
                        onSubmit={login}
                        className="mt-10"
                    >

                        <input

                            type="email"

                            placeholder="Enter Email"

                            value={email}

                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }

                            className="
w-full
p-4
mb-5
rounded-xl
bg-white/10
border
border-white/20
text-white
outline-none
"
                        />



                        <input

                            type="password"

                            placeholder="Enter Password"

                            value={password}

                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }

                            className="
w-full
p-4
mb-5
rounded-xl
bg-white/10
border
border-white/20
text-white
outline-none
"
                        />



                        <button

                            className="
w-full
p-4
rounded-xl
bg-blue-600
hover:bg-blue-700
text-white
font-semibold
duration-300
"

                        >

                            {
                                loading
                                    ?
                                    "Logging..."
                                    :
                                    "Login"
                            }

                        </button>

                    </form>

                </div>

            </div>

        </div>

    )

}

export default AdminLogin;