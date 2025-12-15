import LogoVideoBelajar from '../assets/LogoVideoBelajar.png'
import HeaderMenu from './HeaderMenu'

export default function HeaderNav({ showMenu }) {
    return (
        <div className="bg-white w-full drop-shadow-sm">
            <div className="flex justify-between px-6 sm:px-[120px] py-3">
                <img src={LogoVideoBelajar} alt="VideoBelajar Logo" className="w-[152px] h-[42px] sm:w-[237px] sm:h-14 object-contain" />
                <HeaderMenu showMenu={showMenu} />
            </div>
        </div>
    )
}