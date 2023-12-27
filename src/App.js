import "./App.css";
import useMousePosition from "./hooks/use-mouse-position";

function App() {
  const { x, y } = useMousePosition();

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <h2>
        x: {x} y: {y}
      </h2>
    </div>
  );
}

export default App;
