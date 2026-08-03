import { useParams, useNavigate } from "react-router-dom";
import{MoveLeft} from "lucide-react";
import servings from "../assets/images/icon-servings.svg";
import prep from "../assets/images/icon-prep-time.svg";
import cook from "../assets/images/icon-cook-time.svg";
import bullet from "../assets/images/icon-bullet-point.svg";

function Recipe({recipes}){
    const navigate = useNavigate();
    // to get the id from the url we use useParams hook from react-router-dom, it return string so we need to convert it to number to match the id in the recipes array
    const { id } = useParams();
    const recipeId = Number(id);
    const recipe = recipes.filter((recipe)=> recipe.id === recipeId)[0];
    return(
        <div className="md:mx-65 mx-8 py-8">
            <div className="flex justify-start">
                <span onClick={() => navigate("/recipes")} className="p-3 border border-solid border-neutral-900 rounded-lg hover:cursor-pointer"><MoveLeft className="text-neutral-900 w-3 h-3 md:w-6 md:h-6"/></span>
            </div>
            <div className=" md:mx-15  flex flex-col md:flex-row gap-8 mt-8">
                <img src={recipe.image} className="md:w-[500px] md:h-[500px] rounded-lg"/>
                <div>
                    <h1 className="text-neutral-900 font-extrabold text-4xl mb-5">{recipe.name}</h1>
                    <div className="md:flex grid grid-cols-2 items-center gap-2 md:gap-6 mb-4">
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

                    <h2 className="text-neutral-900 font-bold text-2xl mb-3">Ingredients:</h2>
                    {recipe.ingredients.map((ingredient,index)=>{
                        return(
                            <div className="flex gap-5 items-start mb-2">
                                <img src={bullet} />
                                <p className="text-neutral-600 font-medium" key={index}>{ingredient}</p>
                            </div>
                            )})}

                    <h2 className="text-neutral-900 font-bold text-2xl my-4">Instructions:</h2>
                        {recipe.instructions.map((instruction,index)=>{
                            return(
                                <div className="flex gap-5 items-start mb-2">
                                <img src={bullet} />
                                <p className="text-neutral-600 font-medium" key={index}>{instruction}</p>
                                </div>
                            )})}

                </div>
            </div>
        </div>
    )
}

export default Recipe;