import LogoVideoBelajar from '../assets/LogoVideoBelajar.png'
import FooterMenu from './FooterMenu'
import FooterSocMedButtons from './FooterSocMedButtons'

export default function FooterNav() {
    return (
        <div className="w-full bg-white">

            {/* mobile width */}
            <div className="flex flex-col sm:hidden gap-4 p-5">
                <div className="flex flex-col gap-4">
                    <img src={LogoVideoBelajar} alt="" className="h-9 w-[170px] object-contain" />

                    <div className="
                    flex
                    flex-col
                    gap-2
                    ">
                        <h3 className="
                        text-sm
                        font-bold
                        ">
                            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                        </h3>
                        <span className="
                        text-sm
                        font-normal
                        ">
                            Jl. Usman Effendi No. 50 Lowokwaru, Malang
                        </span>
                        <span className="
                        text-sm
                        font-normal
                        ">
                            +62-877-7123-1234
                        </span>
                    </div>

                    <FooterMenu />

                    <div className="flex items-center justify-center">
                        {/* separator */}
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <FooterSocMedButtons />

                    <span className="
                    text-base
                    font-medium
                    font-dm-sans
                    text-black/68
                    ">@2023 Gerobak Sayur All Rights Reserved.</span>
                </div>
            </div>

            {/* Desktop Width */}
            <div className="hidden sm:flex sm:flex-col py-[60px] px-[120px] gap-5">

                <div className="flex justify-between">
                    <div className="flex flex-col gap-4">
                        <img src={LogoVideoBelajar} alt="" className="h-9 w-[170px] object-contain" />

                        <div className="
                    flex
                    flex-col
                    gap-3
                    ">
                            <h3 className="
                        text-base
                        font-bold
                        ">
                                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                            </h3>
                            <span className="
                        text-base
                        font-normal
                        ">
                                Jl. Usman Effendi No. 50 Lowokwaru, Malang
                            </span>
                            <span className="
                        text-base
                        font-normal
                        ">
                                +62-877-7123-1234
                            </span>
                        </div>
                    </div>

                    <FooterMenu />
                </div>

                <div className="flex items-center justify-center">
                    {/* separator */}
                    <div className="flex-1 border-b border-gray-300"></div>
                </div>

                <div className="flex justify-between">
                    <span className="
                    text-base
                    font-medium
                    font-dm-sans
                    text-black/68
                    ">@2023 Gerobak Sayur All Rights Reserved.</span>

                    <FooterSocMedButtons />
                </div>
            </div>
        </div>
    )
}