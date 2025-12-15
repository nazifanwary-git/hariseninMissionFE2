import NewsLetterBgImage from "../assets/newsLetterBanner.jpg"
import Buttons from "./Buttons"
import InputForm from "./InputForm"

export default function NewsLetterBanner() {
    return (
        <div className="relative flex py-12 sm:py-[92px] justify-center
                px-5 sm:px-[337.5px] overflow-hidden rounded-lg"
            style={{
                backgroundImage: `url(${NewsLetterBgImage})`,
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

            <div className="flex flex-col gap-10 items-center text-center z-10">
                <div className="flex flex-col gap-1">
                    <span className="text-base sm:text-lg font-dm-sans text-gray-300">
                        NEWSLETTER
                    </span>
                    <h1 className="text-2xl sm:text-5xl font-poppins font-bold text-white">
                        Mau Belajar Lebih Banyak?
                    </h1>
                    <span className="text-sm sm:text-base font-dm-sans font-medium text-white">
                        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com
                    </span>
                </div>

                <div className="flex flex-col gap-4 sm:hidden w-full">
                    <InputForm inputType="email" className="bg-white text-center text-black/80 text-sm" placeholder="Masukkan Emailmu" />
                    <Buttons btnStyle="tertiary">Subscribe</Buttons>
                </div>

                <div className="hidden sm:flex sm:relative w-full">
                    <div className="flex-1">
                        <InputForm inputType="email" className="bg-white text-left text-black/80 text-sm w-full h-14 pl-8 pr-[150px]" placeholder="Masukkan Emailmu" />
                    </div>

                    <Buttons btnStyle="tertiary" className="absolute right-2 top-1/2 -translate-y-1/2 h-11 w-[133px]">Subscribe</Buttons>
                </div>
            </div>
        </div>
    )
}