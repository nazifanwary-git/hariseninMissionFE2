import GoogleLogo from "../assets/logos_google-icon.png"

export default function Buttons({
    className = "",
    btnStyle = "primary",
    children,
    type = "button",
    ...props
}) {

    const buttonStyle = {
        primary: {
            buttonColor: "bg-[#3ECF4C]",
            hoverColor: "hover:bg-[#28B380]",
            textColor: "text-[#FFFFFF]",
            borders: "border-none",
            borderColor: ""
        },
        secondary: {
            buttonColor: "bg-[#E2FCD9CC]",
            hoverColor: "hover:bg-[#A8ECA9]",
            textColor: "text-[#3ECF4C]",
            borders: "border-none",
            borderColor: ""
        },
        tertiary: {
            buttonColor: "bg-[#FFBD3A]",
            hoverColor: "hover:bg-[#D8C613]",
            textColor: "text-[#FFFFFF]",
            borders: "border-none",
            borderColor: ""
        },
        google: {
            buttonColor: "bg-[#FFFFFF]",
            hoverColor: "hover:bg-[#E0E0E0]",
            textColor: "text-[#4A505C]",
            borders: "border border-solid",
            borderColor: "border-[#F1F1F1]"
        }
    };

    const style = buttonStyle[btnStyle] || buttonStyle.primary;

    const { buttonColor, hoverColor, textColor, borders, borderColor } = style;

    return (
        <button className={`
        ${buttonColor}
        ${hoverColor}
        ${textColor}
        ${borders}
        ${borderColor}
        flex items-center justify-center gap-1.5
        font-dm-sans p-1.5 sm:p-2.5 rounded-lg
        ${className}
        `}
            {...props}
        >
            {btnStyle === "google" ? (
                <>
                    <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
                    <span>Masuk dengan Google</span>
                </>
            ) : (
                children
            )}
        </button>
    )
}