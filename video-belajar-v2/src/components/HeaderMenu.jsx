import { Menu } from 'lucide-react';
import UserAvatar from '../assets/userAvatar.png'

export default function HeaderMenu({ showMenu = false }) {
    return (
        <div className="flex items-center">

            {showMenu && (
                <div>
                    <Menu className="h-6 w-6 sm:hidden" />
                    <div className="hidden sm:flex gap-9 items-center">
                        <span>Kategori</span>
                        <img src={UserAvatar} alt="User Avatar" className="w-11 h-11 rounded-md object-contain" />
                    </div>
                </div>
            )}

        </div>
    )
}