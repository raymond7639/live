import { useState } from "react";
const App = () => {
  const [name, setname] = useState("");

  return (
    <div>
      <form>
        <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder="Your Name"/><br />
        <input type="radio" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App