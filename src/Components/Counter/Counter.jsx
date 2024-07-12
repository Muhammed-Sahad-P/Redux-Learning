import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, Reset, incrementbyvalue } from "../../redux/CounterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">{count}</h1>
      <div className="counter-buttons">
        <button
          className="counter-button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button className="counter-button" onClick={() => dispatch(Reset())}>
          Reset
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(incrementbyvalue(5))}
        >
          Inc by 5
        </button>

        <button
          className="counter-button"
          onClick={() => dispatch(incrementbyvalue(-5))}
        >
          dec by 5
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
