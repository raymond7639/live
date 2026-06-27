import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";


const Recipes = () => {
  const { data } = useContext(recipecontext);
  const renderrecipe = data.map((recipe) => (
    <RecipeCard recipe = {recipe} key={recipe.id}></RecipeCard>
  ));
  return <div className="flex flex-wrap overflow-hidden gap-8 justify-evenly" >{renderrecipe}</div>;
};

export default Recipes;
