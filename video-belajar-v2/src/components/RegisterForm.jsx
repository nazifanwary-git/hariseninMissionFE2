import { useNavigate } from "react-router"
import Buttons from "./Buttons"
import InputForm from "./InputForm"
import { useState } from "react"

export default function RegisterForm() {

    const navigate = useNavigate();

    const [newData, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        rePassword: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function handleRegister(e) {
        e.preventDefault();

        if (newData.password !== newData.rePassword) {
            alert("Password tidak sama");
            return;
        };

        const storedProfile = JSON.parse(localStorage.getItem("profiles")) || [];

        const newProfile = {
            id: crypto.randomUUID(),
            fullname: newData.fullname,
            email: newData.email,
            phone: newData.phone,
            password: newData.password
        };

        localStorage.setItem("profiles", JSON.stringify([...storedProfile, newProfile]));

        setData({ fullname: "", email: "", phone: "", password: "", rePassword: "" });
    }

    return (
        <div className="
        bg-white min-w-80 mx-5 my-7 sm:my-16 sm:mx-auto 
        max-w-147.5 flex flex-col gap-5 sm:gap-9 py-5 sm:py-9
        ">

            <div className="flex flex-col gap-2.5 items-center justify-center mb-5 sm:mb-6">
                <h1 className="text-2xl sm:text-4xl font-semibold font-poppins">
                    Pendaftaran Akun
                </h1>
                <p className="text-md font-dm-sans text-gray-600">
                    Yuk, daftarkan akunmu sekarang juga!
                </p>
            </div>

            <form onSubmit={handleRegister} className="
            mx-5 sm:mx-9
            flex flex-col gap-5 sm:gap-6
            ">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <InputForm
                            label="Nama Lengkap"
                            required
                            inputType="text"
                            name="fullname"
                            value={newData.fullname}
                            onChange={handleChange}
                        />
                        <InputForm
                            label="E-Mail"
                            required
                            inputType="email"
                            name="email"
                            value={newData.email}
                            onChange={handleChange}
                        />
                        <InputForm
                            label="No. Hp"
                            required
                            inputType="tel"
                            name="phone"
                            value={newData.phone}
                            onChange={handleChange}
                        />
                        <InputForm
                            label="Kata Sandi"
                            required
                            inputType="password"
                            name="password"
                            value={newData.password}
                            onChange={handleChange}
                        />
                        <InputForm
                            label="Konfirmasi Kata Sandi"
                            required
                            inputType="password"
                            name="rePassword"
                            value={newData.rePassword}
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
                            type="submit"
                        >Daftar</Buttons>
                        <Buttons
                            btnStyle="secondary"
                            type="button"
                            onClick={() => navigate("/login")}
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