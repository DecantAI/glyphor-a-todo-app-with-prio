Here is an example of a React component for a basic Todo app with priority levels. This doesn't include the backend or the database connections, only the React frontend.

```jsx
import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState(null);

  const addTodo = () => {
    if (!todo || !priority) {
      setError('Please add a todo and select a priority level');
      return;
    }

    setTodos([...todos, { text: todo, priority }]);
    setTodo('');
    setPriority('');
    setError(null);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      {error && <p>{error}</p>}
      <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add a todo" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select a priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span>{todo.text} - {todo.priority}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
```

This is a simple React component that maintains a list of todos in the state, each with a text and a priority level. The user can add a new todo by typing into the input field, selecting a priority level from the dropdown, and clicking the "Add Todo" button. If the user tries to add a todo without a text or a priority level, an error message will be displayed. The user can delete a todo by clicking the "Delete" button next to it.