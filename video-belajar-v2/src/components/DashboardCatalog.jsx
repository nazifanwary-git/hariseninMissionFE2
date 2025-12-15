import CategorySelection from "./CategorySelection";
import ProductContainer from "./ProductContainer";


export default function DashboardCatalog() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-2.5">
                <h2 className="text-2xl sm:text-[32px] font-poppins font-semibold">
                    Koleksi Video Pembelajaran Unggulan
                </h2>
                <span className="text-sm sm:text-base font-dm-sans font-medium">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                </span>
            </div>

            <CategorySelection />

            <ProductContainer />
        </div>
    )
}