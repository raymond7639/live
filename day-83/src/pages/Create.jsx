import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { compile } from "tailwindcss";
const Create = () => {
  const { data, setdata, reset } = useContext(recipecontext);
  const { register, handleSubmit } = useForm();
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    reset;
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 "
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
      <small className="text-red-400 ">This is how error is shown</small>

      <input
        className="block border-b outline-0 "
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />

      <textarea
        className="border-b outline-0 block p-2"
        {...register("desc")}
        placeholder="Start from here "
      ></textarea>

      <textarea
        className="border-b outline-0 block p-2"
        {...register("ing")}
        placeholder="// Write Ingredients separated by comma"
      ></textarea>

      <textarea
        className="border-b outline-0 block p-2"
        {...register("inst")}
        placeholder="Write down the Instructions"
      ></textarea>

      <select className="block border-b outline-0 p=" {...register("category")}>
        <option value="breakfest">Breakfest</option>
        <option value=";unch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image url"
      />

      <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
