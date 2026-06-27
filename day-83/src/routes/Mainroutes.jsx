import { Route,Routes } from "react-router-dom"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Home from "../pages/Home"
import Create from "../pages/Create"

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-recipe" element={<Create />} />
        </Routes>
    )
}

export default Mainroutes