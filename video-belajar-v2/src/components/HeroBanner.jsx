import HeroBgImage from "../assets/heroBanner.jpg"
import Buttons from "./Buttons"

export default function HeroBanner() {

    return (
        <div className="relative flex py-[37px] sm:py-[68.5px]
        px-5 sm:px-[140px] overflow-hidden rounded-xl"
            style={{
                backgroundImage: `url(${HeroBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "contain"
            }}>
            <div className="
                absolute 
                inset-0 
                bg-black/70
                ">
            </div>
            <div className="flex flex-col gap-6 items-center text-center z-10">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl sm:text-5xl font-poppins font-bold text-white">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>
                    <span className="text-sm sm:text-base font-dm-sans font-medium text-white">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </span>
                </div>
                <Buttons
                    className="text-sm sm:text-base max-w-[372px]"
                    btnStyle="primary"
                >Temukan Video Course untuk Dipelajari!</Buttons>
            </div>
        </div>
    )
}