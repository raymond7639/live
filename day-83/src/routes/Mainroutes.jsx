import { Route,Routes } from "react-router-dom"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Home from "../pages/Home"
import Create from "../pages/Create"
import SingleRecipe from "../pages/SingleRecipe"
import Fav from "../pages/Fav"
import PageNotFound from "../pages/PageNotFound"

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/details/:id" element={<SingleRecipe/>} />

            <Route path="/about" element={<About />} />
            <Route path="/create-recipe" element={<Create />} />
            <Route path="/favourite-recipe" element={<Fav/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    )
}

export default Mainroutes