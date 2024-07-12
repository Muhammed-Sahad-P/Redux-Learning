import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../redux/TodoSlice";
import "./Todo.css";

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({
        title,
      }));
      setTitle("");
    }
  };

  const handleUpdateTodo = () => {
    if (title.trim()) {
      dispatch(updateTodo({
        id: currentTodoId,
        title,
      }));
      setTitle("");
      setIsEditing(false);
      setCurrentTodoId(null);
    }
  };

  const handleEditClick = (todo) => {
    setTitle(todo.title);
    setIsEditing(true);
    setCurrentTodoId(todo.id);
  };

  return (
    <div className="containerrr">
      <div className="App">
        <h1 style={{ color: "white" }}>Todo App</h1>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {isEditing ? (
            <button className="save-button" onClick={handleUpdateTodo}>
              Save
            </button>
          ) : (
            <button className="add-button" onClick={handleAddTodo}>
              Add Todo
            </button>
          )}
        </div>
        <div className="todo-list">
          {todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <span>{todo.title}</span>
              <button
                className="delete-button"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
              <button
                className="edit-button"
                onClick={() => handleEditClick(todo)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;