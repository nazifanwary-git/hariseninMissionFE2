import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ToggleVisibility({ onToggle }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
        onToggle(!isVisible);
    }

    return (
        <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={handleVisibility}>
            {isVisible ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
    );
}