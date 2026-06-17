import { useState } from "react";
import { useForm } from "react-hook-form";
const App = () => {
  const [name, setname] = useState("");
  const {register,handlesubmit}  =  useForm

  return (
    <div>
      <form>
        <h1 className="text-9xl bg-amber-200">Forms</h1>
        <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder="Your Name"/><br />
        <input type="radio" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App