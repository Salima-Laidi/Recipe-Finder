import bluesky from "../assets/images/icon-bluesky.svg";
import instagram from "../assets/images/icon-instagram.svg";
import tiktok from "../assets/images/icon-tiktok.svg";

function Footer(){
    return(
        <div className="md:mx-80  py-5 flex flex-col-reverse md:justify-between items-center gap-5 md:flex-row">
            <p className="text-neutral-600 font-medium">Made with 💖 and 🥑</p>
            <div className="flex gap-5">
                <img src={instagram} className="w-6"/>
                <img src={bluesky} className="w-6"/>
                <img src={tiktok} className="w-6"/>
            </div>
        </div>
    )
}

export default Footer;