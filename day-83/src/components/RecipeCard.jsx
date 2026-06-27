import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, chef, desc, ing, inst } = props.recipe;
  return(
  <Link className=" block w-[23vw] rounded overflow-hidden">
    <img className="w-full h-[50vh] object-cover" src={image} alt="" />
    <h1 className="mt-2 px-2 pt-2 font-black text-2xl">{title}</h1>
    <small className="px-2 text-l font-bold">{chef}</small>
    <p className="px-2">
      {desc}
      <small className="text-blue-400">more</small>
    </p>
  </Link>);
};

export default RecipeCard;
