import { useNavigate } from "react-router-dom";
import hero from "../assets/images/image-home-hero-small.webp";
import carrot from "../assets/images/icon-whole-food-recipes.svg";
import minimum from "../assets/images/icon-minimum-fuss.svg";
import search from "../assets/images/icon-search-in-seconds.svg";
import home from "../assets/images/image-home-real-life-small.webp"
import BrowseRecipes from "./browseRecipes";


function Home(){
    const navigate = useNavigate();
    return(
        <>
            <section className="flex flex-col md:items-center items-start md:py-15 py-8 md:border-b md:border-b-neutral-300 md:mx-60 mx-8 ">
                                                            {/* to make only the bottom of the span orange i used gradient from bottom to top 50% orange, 50% transparent */}
                <h1 className="text-[30pt] md:text-6xl text-neutral-900 font-extrabold mb-6 leading-14"><span className="bg-[linear-gradient(to_top,rgba(249,115,22,0.2)_50%,transparent_50%)]">Healthy</span> meals, zero fuss</h1>
                <p className="text-neutral-600">Discover quick, healthy recipes made with fresh ingredients. Find your next meal in seconds—no</p>
                <p className="text-neutral-600 md:mb-10 mb-5"> processed junk, no guesswork.</p>
                <button className="bg-neutral-900 py-3 px-6 rounded-lg text-neutral-100 font-bold hover:cursor-pointer hover:bg-neutral-900/90 mb-15"onClick={()=> navigate("/recipes")}>Start exploring</button>
                <img src={hero} className="border-10 border-neutral-0 md:rounded-lg rounded-xl" />
                <h2 className="text-4xl text-neutral-900 font-extrabold md:my-15 my-10">What you`ll get</h2>
                <div className="flex flex-col md:flex-row md:gap-15 gap-8">
                    <div>
                        <span className="bg-neutral-0 py-2 pl-3 pr-4 rounded-lg inline-block mb-2"><img src={carrot}  /></span>
                        <h3 className="text-neutral-900 font-bold text-2xl mb-3">Whole-food recipes</h3>
                        <p className="text-neutral-600 font-medium">Each dish uses everyday, unprocessed</p>
                        <p className="text-neutral-600 font-medium">ingredients.</p>
                    </div>
                    <div>
                        <span className="bg-neutral-0 py-2 px-3 rounded-lg inline-block mb-2"><img src={minimum} className="w-8" /></span>
                        <h3 className="text-neutral-900 font-bold text-2xl mb-3">Minimum fuss</h3>
                        <p className="text-neutral-600 font-medium">All recipes are designed to make eating </p>
                        <p className="text-neutral-600 font-medium">healthy quick and easy.</p>
                    </div>
                    <div>
                        <span className="bg-neutral-0 py-2 px-3 rounded-lg inline-block mb-2"><img src={search} className="w-8"  /></span>
                        <h3 className="text-neutral-900 font-bold text-2xl mb-3">Search in seconds</h3>
                        <p className="text-neutral-600 font-medium">Filter by name or ingredient and jump</p>
                        <p className="text-neutral-600 font-medium">straight to the recipe you need.</p>
                    </div>
                </div>
            </section>

            <section className="md:mx-80 mx-8 md:py-5 ">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-15 gap-8 items-center md:mt-15 mb-10">
                    <div className="md:mb-15">
                        <h2 className="text-4xl text-neutral-900 font-extrabold my-8">Built for real life</h2>
                        <p className="text-neutral-600 font-medium text-lg mb-5">Cooking shouldn`t complicated. These recipes come in under <span className="bg-[linear-gradient(to_top,rgba(249,115,22,0.5)_60%,transparent_40%)]">30 minutes</span> of active time. fit busy schedules, and taste good enough to repeat.</p>
                        <p className="text-neutral-600 font-medium text-lg">Whether you`re new to the kitchen or just need fresh ideas, we`ve got you covered.</p>
                    </div>
                    <img src={home} className="md:rounded-lg rounded-xl"/>
                </div>
            </section>
            <BrowseRecipes/>
            
        </>
    )
}

export default Home;