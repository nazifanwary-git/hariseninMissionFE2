import { useState } from "react";
import ToggleVisibility from "./ToggleVisibility";
import PhoneSelector from "./PhoneSelector";

export default function InputForm({
    className = "",
    inputType = "text",
    label,
    required = false,
    placeholder,
    ...props
}) {

    const types = {
        text: "text",
        email: "email",
        phone: "tel",
        password: "password"
    };

    const [isVisible, setIsVisible] = useState(false);

    let resolveType;

    if (inputType === "password") {
        resolveType = isVisible ? "text" : "password";
    } else {
        resolveType = types[inputType] || "text"
    };

    const isPhone = inputType === "tel";

    return (
        <div className="flex flex-col gap-1">
            {label && (<label className="text-gray-800 font-medium font-lato">
                {label} {required && <span className="text-red-600">*</span>}
            </label>)}

            {isPhone ? (
                <div className="flex gap-3 sm:gap-6">
                    <PhoneSelector />

                    <input
                        {...props}
                        type={resolveType}
                        className={`w-full border rounded-md px-3 py-2 pr-10 border-gray-400 ${className}`}
                        placeholder={placeholder}
                    />
                </div>
            ) : (
                <div className="relative">
                    <input
                        {...props}
                        type={resolveType}
                        className={`w-full border rounded-md px-3 py-2 border-gray-400 ${className}`}
                        placeholder={placeholder}
                    />

                    {inputType === "password" && (
                        <ToggleVisibility onToggle={setIsVisible} />
                    )}
                </div>
            )}
        </div>
    )
}