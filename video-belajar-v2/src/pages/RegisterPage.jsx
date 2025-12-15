import HeaderNav from "../components/Header";
import RegisterForm from "../components/RegisterForm";


export default function RegisterPage() {
    return (
        <div className="bg-[#FFFDF3] min-h-screen flex flex-col">
            <HeaderNav showMenu={false} />
            <div className="grow">
                <RegisterForm />
            </div>
        </div>
    )
}