import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement } from "../store/features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button name="plus" onClick={() => dispatch(increment())}>
        plus
      </button>
      <button name="minus" onClick={() => dispatch(decrement())}>
        minus
      </button>
    </div>
  );
}
