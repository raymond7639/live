import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];
  const renderrecipe = favourite.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe.id}></RecipeCard>
  ));
  return (
    <div className="flex flex-wrap overflow-hidden gap-8 justify-evenly">
      {favourite.length > 0 ? renderrecipe : "No favourite Found!"}
    </div>
  );
};

export default Fav;
