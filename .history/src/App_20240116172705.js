import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 py-10 justify-center items-center">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          My calculator (Adder)
        </span>
      </h1>
      <Home />
    </div>
  );
}

export default App;
