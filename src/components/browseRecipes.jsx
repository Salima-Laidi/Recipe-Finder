import fork from "../assets/images/pattern-fork.svg";
import knife from "../assets/images/pattern-knife.svg"
import { useNavigate } from "react-router-dom";

function BrowseRecipes(){
    const navigate = useNavigate();
    return(
        <div className="bg-neutral-300/50  flex md:justify-between md:px-0 px-10 items-center rounded-xl md:mx-80">
            <img src={fork} className=" hidden md:block"/>
            <div className="flex flex-col items-center justify-center mt-12">
                <h2 className="text-4xl text-neutral-900 font-extrabold mb-5 text-center">Ready to cook smarter?</h2>
                <p className="text-neutral-600 font-medium text-lg mb-10 text-center">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                <button className="bg-neutral-900 py-3 px-6 rounded-lg text-neutral-100 font-bold hover:cursor-pointer hover:bg-neutral-900/90 mb-15"onClick={()=> navigate("/recipes")}>Browse recipes</button>
            </div>
            <img src={knife} className=" hidden md:block"/>
        </div>
    )
}

export default BrowseRecipes;