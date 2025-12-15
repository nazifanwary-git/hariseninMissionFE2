import { useNavigate } from "react-router"
import Buttons from "./Buttons"
import InputForm from "./InputForm"
import { useState } from "react"

export default function Testing() {


    const [newData, setData] = useState({
        fullname: "",
        email: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleRegister(e) {
        e.preventDefault();

        const storedProfile = JSON.parse(localStorage.getItem("profiles")) || [];

        const newProfile = { id: crypto.randomUUID(), ...newData };

        localStorage.setItem("profiles", JSON.stringify([...storedProfile, newProfile]));

        setData({ fullname: "", email: "" });
    }

    return (
        <div className="
        bg-white min-w-80 mx-5 my-7 sm:my-16 sm:mx-auto 
        max-w-147.5 flex flex-col gap-5 sm:gap-9 py-5 sm:py-9
        ">

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

                    </div>
                    <div className="flex flex-col gap-4">
                        <Buttons
                            btnStyle="primary"
                            type="submit"
                        >Daftar</Buttons>
                        <Buttons
                            btnStyle="secondary"
                            type="button"
                        >Masuk</Buttons>
                    </div>
                </div>

                <Buttons
                    btnStyle="google"></Buttons>
            </form>

            <pre>{JSON.stringify(newData, null, 2)}</pre>
        </div>
    )
}