import { useState } from "react";
import Buttons from "./Buttons"
import InputForm from "./InputForm"
import { useNavigate } from "react-router";

export default function LoginForm() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function handleLogin(e) {
        e.preventDefault();

        const storedProfile = JSON.parse(localStorage.getItem("profiles")) || [];

        const userProfile = storedProfile.find(profile =>
            profile.email === loginData.email && profile.password === loginData.password);

        if (!userProfile) {
            alert("Email atau Kata Sandi yang dimasukkan salah");
            return;
        };

        localStorage.setItem("authUser", JSON.stringify(userProfile));

        setLoginData({ email: "", password: "" });

        navigate("/dashboard");
    }

    return (
        <div className="
        bg-white min-w-80 mx-5 my-7 sm:my-16 sm:mx-auto 
        max-w-147.5 flex flex-col gap-5 sm:gap-9 py-5 sm:py-9
        ">

            <div className="flex flex-col gap-2.5 items-center justify-center mb-5 sm:mb-6">
                <h1 className="text-2xl sm:text-4xl font-semibold font-poppins">
                    Masuk ke Akun
                </h1>
                <p className="text-md font-dm-sans text-gray-600">
                    Yuk, lanjutin belajarmu di videobelajar.
                </p>
            </div>

            <form onSubmit={handleLogin} className="
            mx-5 sm:mx-9
            flex flex-col gap-5 sm:gap-6
            ">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <InputForm
                            label="E-Mail"
                            required
                            inputType="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                        />
                        <InputForm
                            label="Kata Sandi"
                            required
                            inputType="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                        />
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-400 font-dm-sans text-right">
                            Lupa Password?
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Buttons
                            btnStyle="primary"
                            type="button"
                            onClick={() => navigate("/register")}
                        >Daftar</Buttons>
                        <Buttons
                            btnStyle="secondary"
                            type="submit"
                        >Masuk</Buttons>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="text-gray-500 font-medium font-dm-sans">atau</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                <Buttons
                    btnStyle="google"></Buttons>
            </form>

        </div>
    )
}