import { useSelector } from "react-redux";
import "./App.css";
import { increaseCounter, resetCounter } from "./store/actions";
import { rootStore } from "./store/store";

function App() {
  //REDUX: selectors filter the store state
  //and retrieve only the data we need
  const counter = useSelector((state) => state.counter);

  //REDUX: in order to call actions, we need rootStore.dispatch() function
  //remember: call it with an anonymous function () => rootStore.dispatch()
  return (
    <div className="container">
      <h1 className="title">Redux counter!</h1>
      <div className="body">
        <p className="counter"> Counter counts up to {counter}!</p>
      </div>
      <button
        className="button increase"
        onClick={() => rootStore.dispatch(increaseCounter())}
      >
        ADD
      </button>
      <button
        className="button reset"
        onClick={() => rootStore.dispatch(resetCounter())}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
