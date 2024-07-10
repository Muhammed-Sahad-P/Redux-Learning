import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './TodoSlice';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({
        title,
      }));
      setTitle('');
    }
  };

  const handleUpdateTodo = () => {
    if (title.trim()) {
      dispatch(updateTodo({
        id: currentTodoId,
        title,
      }));
      setTitle('');
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
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {isEditing ? (
          <button onClick={handleUpdateTodo}>Save</button>
        ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
        )}
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
