import HeaderNav from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <div className="bg-[#FFFDF3] min-h-screen flex flex-col">
            <HeaderNav showMenu={false} />
            <div className="grow">
                <LoginForm />
            </div>
        </div>
    )
}