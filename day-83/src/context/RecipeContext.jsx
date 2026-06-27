import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      title: "Spicy Paneer Tikka",
      chef: "Chef Arjun Singh",
      desc:
        "A delicious North Indian starter made with marinated paneer cubes grilled to perfection.",
      ing:
        "Paneer, Yogurt, Red Chili Powder, Turmeric, Garam Masala, Ginger-Garlic Paste, Lemon Juice, Salt",
      inst:
        "Cut paneer into cubes, prepare marinade, coat paneer, rest for 30 mins, grill until golden brown, serve hot",
      category: "cat-1",
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      title: "Veg Biryani",
      chef: "Chef Neha Sharma",
      desc:
        "Aromatic basmati rice cooked with fresh vegetables and spices.",
      ing: "Rice, Carrot, Beans, Peas, Spices, Onion, Garlic",
      inst:
        "Cook rice, sauté veggies, mix with spices, layer and steam",
      category: "cat-2",
    },
    {
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      title: "Classic Burger",
      chef: "Chef Rahul Verma",
      desc: "Juicy grilled burger with fresh veggies and cheese.",
      ing: "Bun, Patty, Lettuce, Tomato, Cheese, Sauce",
      inst: "Grill patty, assemble bun with veggies and sauce",
      category: "cat-3",
    },
    {
      image: "https://cdn.dummyjson.com/recipe-images/28.webp",
      title: "Masala Dosa",
      chef: "Chef Priya Iyer",
      desc: "Crispy dosa filled with spicy potato masala.",
      ing: "Rice Batter, Potato, Mustard Seeds, Curry Leaves",
      inst:
        "Prepare batter, cook dosa, add masala filling, fold and serve",
      category: "cat-1",
    },
  ]);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
