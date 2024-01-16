import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Adder</h1>
      <Home />
    </div>
  );
}

export default App;
