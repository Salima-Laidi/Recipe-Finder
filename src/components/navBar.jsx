import { NavLink, useNavigate } from "react-router-dom";
import{useState} from "react"
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-hamburger-menu.svg"
function NavBar(){
    const navigate = useNavigate();
    const [open, setOpen] = useState();
    return(
        <div className=" relative px-5  md:mx-60 py-5 flex justify-between items-center border-b border-b-neutral-300"> 
            <img src={logo} alt="Logo"  className=" w-[200px] md:w-[250px]"/>
            <span className="block md:hidden bg-neutral-300 p-3 rounded-lg hover:cursor-pointer" onClick={()=>setOpen(!open)}><img src={menu}/></span>
            <div className={` flex-col md:gap-80  md:flex md:flex-row md:bg-transparent md:w-auto md:static md:left-auto md:bottom-auto md:rounded-none md:p-0 ${open?  " flex bg-neutral-0 w-[90%] absolute left-[5%] -bottom-55 rounded-lg p-4 ": "hidden"}`}>
                <div className="flex flex-col md:flex-row md:gap-10 items-start md:items-center">
                    <NavLink to={"/"} className={({isActive})=>`link ${isActive&&"after"}`}>Home</NavLink>
                    <NavLink to={"/about"} className={({isActive})=>`link ${isActive&&"after"}`}>About</NavLink>
                    <NavLink to={"/recipes"} className={({isActive})=>`link ${isActive&&"after"}`}>Recipes</NavLink>
                </div>
                <button className="bg-neutral-900 py-2 px-3 rounded-lg text-neutral-100 font-bold hover:cursor-pointer hover:bg-neutral-900/90"onClick={()=> navigate("/recipes")}>Browse recipes</button>
            </div>
        </div>
    )
}
export default NavBar;