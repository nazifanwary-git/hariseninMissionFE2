import { ChevronRight } from "lucide-react";


export default function FooterMenu() {

    return (
        <>
            {/* Mobile Menus */}
            <div className="
        flex
        flex-col
        gap-3
        sm:hidden
        ">
                <div className="flex justify-between">
                    <span className="text-base font-bold">Perusahaan</span>
                    <ChevronRight />
                </div>
                <div className="flex justify-between">
                    <span className="text-base font-bold">Perusahaan</span>
                    <ChevronRight />
                </div>
                <div className="flex justify-between">
                    <span className="text-base font-bold">Komunitas</span>
                    <ChevronRight />
                </div>
            </div>

            {/* Desktop Menus */}
            <div className="
        hidden
        sm:flex
        sm:gap-12
        ">
                <div className="
                flex
                flex-col
                ">
                    <h6 className="mb-[15px] text-base font-bold font-dm-sans">Kategori</h6>
                    <div className="
                    flex
                    flex-col
                    gap-[13px]
                    ">
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Digital & Teknologi
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Pemasaran
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Manajemen Bisnis
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Pengembangan Diri
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Desain
                        </span>
                    </div>
                </div>
                <div className="
                flex
                flex-col
                ">
                    <h6 className="mb-[15px] text-base font-bold font-dm-sans">Perusahaan</h6>
                    <div className="
                    flex
                    flex-col
                    gap-[13px]
                    ">
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Tentang Kami
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            FAQ
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Kebijakan Privasi
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Ketentuan Layanan
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Bantuan
                        </span>
                    </div>
                </div>
                <div className="
                flex
                flex-col
                ">
                    <h6 className="mb-[15px] text-base font-bold font-dm-sans">Komunitas</h6>
                    <div className="
                    flex
                    flex-col
                    gap-[13px]
                    ">
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Tips Sukses
                        </span>
                        <span className="
                        font-medium
                        text-base
                        text-black/70
                        ">
                            Blog
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}