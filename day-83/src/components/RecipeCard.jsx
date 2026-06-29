import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, chef, desc, ing, inst } = props.recipe;
  return (
    
    <Link
      to={`/recipes/details/${id}`}
      class="w-full max-w-sm block  bg-gray-500 rounded-2xl overflow-hidden border border-gray-500 shadow-sm"
    >
      {/* <!-- Image --> */}
      <img src={image} alt={title} class="w-full h-48 object-cover" />

      {/* <!-- Content --> */}
      <div class="p-5">
        {/* <!-- Error -->
      <p class="text-red-500 text-xs mb-2">This is how error is shown</p> */}

        {/* <!-- Title --> */}
          <h1 class="text-2xl font-semibold text-white mb-1">{title}</h1>

        {/* <!-- Chef --> */}
        <p class="text-sm text-white mb-4">{chef}</p>

        <hr class="border-gray-100 mb-4" />

        {/* <!-- Description --> */}
        <div class="mb-4">
          <p class="text-xs font-bold text-white uppercase tracking-wide mb-1">
            Description
          </p>
          <p class="text-sm text- leading-relaxed">{desc}</p>
        </div>

        {/* <!-- Ingredients --> */}
        <div class="mb-4">
          <p class="text-xs font-bold text-white uppercase tracking-wide mb-1">
            Ingredients
          </p>
          <p class="text-sm text-white">{ing}</p>
        </div>

        {/* <!-- Steps --> */}
        <div class="mb-4">
          <p class="text-xs text-white font-bold uppercase tracking-wide mb-1">
            Steps
          </p>
          <p class="text-sm text-white leading-relaxed">{inst}</p>
        </div>
        <div class="flex items-center align-bottom justify-between">
          <span class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
            Breakfast
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
