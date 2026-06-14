import { useState } from "react";
// import style from "./App.module.css"
const App = () => {
  const [name, setname] = useState("");

  return (
    <div>
      <form>
        <h1 className="app_h1">Forms</h1>
        <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder="Your Name"/><br />
        <input type="radio" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App