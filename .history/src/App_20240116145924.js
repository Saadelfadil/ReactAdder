import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl">Adder</h1>
      <Home />
    </div>
  );
}

export default App;
