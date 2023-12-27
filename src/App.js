import "./App.css";
import useIsOnScreen from "./hooks/use-is-on-screen";

function App() {
  const [isOnScreen, elementRef] = useIsOnScreen();

  return (
    <div className="App">
      <header>Red box Visible: {isOnScreen ? "On" : "Off"}</header>
      <div className="wrapper">
        <div className="red box" ref={elementRef} />
      </div>
    </div>
  );
}

export default App;
