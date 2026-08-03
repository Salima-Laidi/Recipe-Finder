import NavBar from "./components/navBar"
import Home from "./components/home"
import About from "./components/about"
import Recipes from "./components/recipes"
import {Routes, Route} from "react-router-dom"
import Footer from "./components/footer";
import{ useState, useEffect } from "react";
import Recipe from "./components/recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]=useState(false);
  const[skip, setSkip] = useState(0);
    async function fetchRecipes(){
        setLoading(true);
        try{
            const response = await fetch(`https://dummyjson.com/recipes?limit=6&skip=${skip}`);
            const data = await response.json();
            console.log(data)
            setRecipes(data.recipes);
        }
        catch(error){
            console.log("ERROR", error);
            setError(true);
        }
        // finnaly block is executed regardless of whether the try block succeeds or the catch block is executed. It is used to perform cleanup actions or reset states after the try-catch execution.
        finally{
            setLoading(false);
        }
    }
    useEffect (()=>{
        fetchRecipes();
    },[])
    
    console.log(recipes)
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/recipes" element={<Recipes recipes={recipes} loading={loading} error={error} setSkip={setSkip}/>}/>
        <Route path="/recipes/:id" element={<Recipe recipes={recipes}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
