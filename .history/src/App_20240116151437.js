import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 py-10 justify-center items-center">
      <h1>My adder</h1>
      <Home />
    </div>
  );
}

export default App;
