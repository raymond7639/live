import { useEffect } from "react";
import axios from "../utils/asiox.jsx";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log("Error in API ! ");
    }
  };

  useEffect(()=>{
    getProduct();
    return () =>{

    }
  },[])
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Pro</button>
    </div>
  );
};

export default Home;
