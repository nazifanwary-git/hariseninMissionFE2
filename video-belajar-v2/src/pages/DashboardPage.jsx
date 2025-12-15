import DashboardContent from "../components/DashboardContent";
import FooterNav from "../components/FooterNav";
import HeaderNav from "../components/Header";


export default function DashboardPage() {

    return (
        <>
            <div className="bg-[#FFFDF3] min-h-screen w-full overflow-x-hidden">
                <HeaderNav showMenu={true} />
                <DashboardContent />
                <FooterNav />
            </div>
        </>
    )
}