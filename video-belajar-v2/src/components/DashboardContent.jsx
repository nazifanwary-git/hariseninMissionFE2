import DashboardCatalog from "./DashboardCatalog";
import HeroBanner from "./HeroBanner";
import NewsLetterBanner from "./NewsLetterBanner";


export default function DashboardContent() {

    return (
        <div className="flex flex-col gap-6 sm:gap-16 py-7 sm:py-16 px-5 sm:px-30">
            <HeroBanner />
            <DashboardCatalog />
            <NewsLetterBanner />
        </div>
    )
}