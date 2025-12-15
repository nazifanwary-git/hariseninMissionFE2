import FlagIndo from '../assets/flagIndonesia.png';
import { ChevronDown } from 'lucide-react';

export default function PhoneSelector() {
    return (
        <div className="
        flex
        min-w-[122px]
        max-w-[156.67px]
        border border-solid
        rounded-lg
        border-gray-400
        ">
            <div className="
                flex
                justify-center
                items-center
                w-11
                h-11
                border-r border-gray-400
                bg-gray-100
                rounded-l-lg
                ">
                <img src={FlagIndo} alt="Indonesian Flag" className='w-6 h-6' />
            </div>
            <div className="
                flex
                justify-between
                items-center
                flex-1
                px-2
                ">
                <span>+62</span>
                <ChevronDown />
            </div>
        </div>
    )
}