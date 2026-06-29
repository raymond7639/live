import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { compile } from "tailwindcss";
import { toast } from "react-toastify";
const Create = () => {
  const { data, setdata, reset } = useContext(recipecontext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New Recipe created !");
    reset;
    navigate("/recipes");
  };
  return (
    <div className="max-w-2xl  mx-auto mt-5  bg-gray-600  rounded-xl p-6 md:p-8">
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-2">
        <input
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        <small className="text-red-400 block">This is how error is shown</small>

        <input
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea 
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1 resize-none "
          {...register("desc")}
          placeholder="Write description of the recipe..."
          rows={4}
        ></textarea>

        <textarea
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1 resize-none"
          {...register("ing")}
          placeholder="Write Ingredients separated by comma..."
          rows={4}
        ></textarea>

        <textarea
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1 resize-none"
          {...register("inst")}
          placeholder="Write down the instructions..."
          rows={5}
        ></textarea>

        <select
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <input
          className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image URL ..."
        />

        <button className="w-full bg-gray-900 font-extrabold text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
