import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/kounderSlice";

const Kounder = () => {
  const kound = useSelector((state) => state.kounder.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{color:"red"}}>{kound}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default Kounder;
