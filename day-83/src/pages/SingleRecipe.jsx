import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const param = useParams();
  const recipe = data.find((recipe) => param.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      desc: recipe?.desc,
      ing: recipe?.ing,
      inst: recipe?.inst,
      image: recipe?.image,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => param.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated !");
  };
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != param.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe Deleted !");
    navigate("/recipes");
  };

  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const favHandler = () => {
    const copyfav = [...favourite, recipe];
    setfavourite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };
  const unFavHandler = () => {
    const filterfav = favourite.filter((f) => f.id != recipe?.id);
    setfavourite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  useEffect(() => {
    return () => {};
  }, []);

  return recipe ? (
    <div className="w-full flex justify-between ali ">
      <div class="relative right w-full max-w-sm block  bg-gray-500 rounded-2xl overflow-hidden border border-gray-500 shadow-sm">
        {/* <!-- Image --> */}
        <img
          src={recipe.image}
          alt={recipe.title}
          class="w-full h-48 object-cover"
        />

        {/* <!-- Content --> */}
        <div class="p-5 relative">
          {/* <!-- Error -->
      <p class="text-red-500 text-xs mb-2">This is how error is shown</p> */}

          {/* <!-- Title --> */}
          <h1 class="text-2xl font-semibold text-white mb-1">{recipe.title}</h1>
          {favourite.find((f) => f.id == recipe?.id) ? (
            <i
              onClick={unFavHandler}
              class="absolute top-[5%] right-[5%] text-4xl text-red-400 ri-heart-fill"
            ></i>
          ) : (
            <i
              onClick={favHandler}
              class="absolute top-[5%] right-[5%] text-4xl text-red-400 ri-heart-line"
            ></i>
          )}

          {/* <!-- Chef --> */}
          <p class="text-sm text-white mb-4">{recipe.chef}</p>

          <hr class="border-gray-100 mb-4" />

          {/* <!-- Description --> */}
          <div class="mb-4">
            <p class="text-xs font-bold text-white uppercase tracking-wide mb-1">
              Description
            </p>
            <p class="text-sm text- leading-relaxed">{recipe.desc}</p>
          </div>

          {/* <!-- Ingredients --> */}
          <div class="mb-4">
            <p class="text-xs font-bold text-white uppercase tracking-wide mb-1">
              Ingredients
            </p>
            <p class="text-sm text-white">{recipe.ing}</p>
          </div>

          {/* <!-- Steps --> */}
          <div class="mb-4">
            <p class="text-xs text-white font-bold uppercase tracking-wide mb-1">
              Steps
            </p>
            <p class="text-sm text-white leading-relaxed">{recipe.inst}</p>
          </div>
          <div class="flex items-center align-bottom justify-between">
            <span class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              Breakfast
            </span>
          </div>
        </div>
      </div>

      <div className="left max-w-2xl  mx-auto   bg-gray-600  rounded-xl p-6 md:p-8">
        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-2">
          <input
            className="w-full border-b placeholder:text-gray-200 border-gray-300 outline-none p-1"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />
          <small className="text-red-400 block">
            This is how error is shown
          </small>

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
            Update Recipe
          </button>
          <button
            onClick={DeleteHandler}
            className=" bg-red-900 w-full font-extrabold text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default SingleRecipe;
