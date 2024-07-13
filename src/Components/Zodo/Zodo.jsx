import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addZodo, deleteZodo } from "../../redux/zodoSlice";

const Zodo = () => {
  const zodos = useSelector((state) => state.zodos.zodos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAddzodo = () => {
    if (title.trim()) {
      dispatch(addZodo(title));
      setTitle("");
    }
  };

  return (
    <div>
      <h1>Zodo App</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddzodo}>Add task</button>
      </div>
      <div>
        {zodos.map((zodo) => (
          <div key={zodo.id}>
            <span>{zodo.title}</span>
            <button onClick={() => dispatch(deleteZodo(zodo.id))}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zodo;
