import "./App.css";
import useTime from "./hooks/use-time";
import { format } from "date-fns";

function App() {
  const time = useTime();

  return (
    <div className="App">
      <h1>Current Time</h1>
      <p>{format(time, "hh:mm:ss a")}</p>
    </div>
  );
}

export default App;
