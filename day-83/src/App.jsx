import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
const App = () => {
  return (
    <div className="py-10 px-[10%] w-screen min-h-screen h-auto bg-gray-800 text-white font-thin" >
      <Navbar/>
      <Mainroutes />
    </div>
  )
}

export default App;