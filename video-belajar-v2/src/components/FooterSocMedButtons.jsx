import LinkedInLogo from "../assets/linkedin_Icon.png"
import FacebookLogo from "../assets/facebook_icon.png"
import InstagramLogo from "../assets/instagram_icon.png"
import TwitterLogo from "../assets/twitter_icon.png"

export default function FooterSocMedButtons() {
    return (
        <div className="flex gap-[15px]">
            <div className="flex w-[35px] h-[35px] 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={LinkedInLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
            <div className="flex w-[35px] h-[35px] 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={FacebookLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
            <div className="flex w-[35px] h-[35px] 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={InstagramLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
            <div className="flex w-[35px] h-[35px] 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={TwitterLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
        </div>
    )
}