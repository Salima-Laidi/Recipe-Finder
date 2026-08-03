import { Search } from "lucide-react";
import{ useState } from "react";
import servings from "../assets/images/icon-servings.svg";
import prep from "../assets/images/icon-prep-time.svg";
import cook from "../assets/images/icon-cook-time.svg";
import { useNavigate } from "react-router-dom";

function RecipeCard({recipe}){
    const navigate = useNavigate();
    return(
        <div className="bg-neutral-0 rounded-xl p-3 ">
            <img src={recipe.image} className="w-full rounded-xl mb-4"/>
            <h2 className="text-neutral-900 font-extrabold text-xl mb-3">{recipe.name}</h2>
            <div className="grid grid-cols-2 items-center gap-2">
                <div className="flex gap-2 items-center">
                    <img src={servings}/>
                    <p className="text-neutral-600 font-medium text-lg">Servings: {recipe.servings}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={prep}/>
                    <p className="text-neutral-600 font-medium text-lg">Prep: {recipe.prepTimeMinutes}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={cook}/>
                    <p className="text-neutral-600 font-medium text-lg">Cook: {recipe.cookTimeMinutes}</p>
                </div>
            </div>
            <button className="bg-neutral-900 py-2 px-3 w-full rounded-full text-neutral-0 font-bold hover:cursor-pointer hover:bg-neutral-900/90 mt-4"onClick={()=> navigate(`/recipes/${recipe.id}`)}>View Recipe</button>
        </div>
    )
}


function Recipes({recipes, loading,error, setSkip}){
    // const [recipes, setRecipes] = useState([]);
    // async function fetchRecipes(){
    //     try{
    //         const response = await fetch(`https://dummyjson.com/recipes?limit=0`);
    //         const data = await response.json();
    //         console.log(data)
    //         setRecipes(data.recipes);
    //     }
    //     catch(error){
    //         console.log("ERROR", error)
    //     }
    // }
    // useEffect (()=>{
    //     fetchRecipes();
    // },[])
    
    // console.log(recipes)
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 6;
    const totalPages = Math.ceil(recipes.length/recipesPerPage);
    setSkip((currentPage - 1) * recipesPerPage);
    function previous(){
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }

    function next(){
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    return(
        <div className="md:mx-80 mx-8">
            <h1 className="text-[30pt] md:text-5xl text-neutral-900 font-extrabold mb-5 md:text-center md:mt-20 mt-10 leading-14">Explore our simple, healthy recipes</h1>
            <p className="text-neutral-600 font-medium text-lg md:text-center md:mx-50 md:mb-20 mb-8">Discover healthy, quick dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
            <div className="flex items-center gap-2 bg-neutral-0 px-3 py-2 border border-neutral-300 rounded-lg md:w-77.5 mb-5">
                <Search className="text-neutral-900" />
                <input type="text" placeholder="Search by name or ingredient..." className="w-full outline-none font-medium text-lg  text-neutral-900" onChange={(e)=> setSearch(e.target.value)}/>
            </div>
            {/* for loading spinner */}
            {loading &&(
            <div className="flex justify-center py-10">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-300 border-t-orange-500"></div>
            </div>
            )}
            {error &&(
            <div className="flex justify-center items-center">
                <p className="text-red-500 font-medium text-center">Couldn't load recipes. Please check your connection and try again.</p>
            </div>
            )}

            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-4">
                {recipes.filter((recipe)=>{
                    return recipe.name.toLowerCase().includes(search.toLowerCase()) || recipe.ingredients.some((ingredient)=> ingredient.toLowerCase().includes(search.toLowerCase()));
                }).map((recipe)=>{
                    return(
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                    )
                })
                }
            </div>
            <div className="flex p-4 rounded-lg border border-neutral-900 md:w-90  gap-8 mt-10 font-medium md:text-base text-xs text-neutral-900 divide-x divide-neutral-900 mx-auto">
                <button className="pr-7 hover:text-orange-500 hover:cursor-pointer transition-all duration-300" onClick={previous}>Previous</button>
                <span className="pr-7">Page {currentPage} of {totalPages || 1}</span>
                <button className="hover:text-orange-500 hover:cursor-pointer transition-all duration-300" onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default Recipes;