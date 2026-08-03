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
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const recipesPerPage = 6;
  const totalPages = Math.ceil(total / recipesPerPage);

  async function fetchRecipes() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes?limit=50");
      const data = await response.json();
      setTotal(data.total);
      setRecipes(data.recipes);
    } catch (error) {
      console.log("ERROR", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe)=>{
    return recipe.name.toLowerCase().includes(search.toLowerCase()) || recipe.ingredients.some((ingredient)=> ingredient.toLowerCase().includes(search.toLowerCase()));
  })
  // this one represents the skip parameter, recipesPerPage represents the limit parameter for the api
  const startIndex = (currentPage - 1) * recipesPerPage;
  const visibleRecipes = recipes.slice(startIndex, startIndex + recipesPerPage);

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/recipes" element={<Recipes recipes={visibleRecipes} filteredRecipes={filteredRecipes} loading={loading} error={error} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} search={search} setSearch={setSearch}/>}/>
        <Route path="/recipes/:id" element={<Recipe recipes={recipes} setSearch={setSearch}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
