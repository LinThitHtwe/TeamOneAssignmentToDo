import React, { useState } from "react";
import "../styles/todo.css";

const ToDo = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    priority: "",
    todo: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.name.trim() == "" ||
      formData.priority.trim() == "" ||
      formData.todo.trim() == ""
    ) {
      setIsFormEmpty(true);
      return;
    }
    setIsFormEmpty(false);

    const newTodo = {
      name: formData.name,
      priority: formData.priority,
      todo: formData.todo,
    };

    setTodoLists((prevTodoLists) => [...prevTodoLists, newTodo]);

    setFormData({
      name: "",
      priority: "",
      todo: "",
    });
  };

  const handleDelete = (index) => {
    const updatedTodoLists = [...todoLists];
    updatedTodoLists.splice(index, 1);
    setTodoLists(updatedTodoLists);
  };

  return (
    <div className="todo-main-container">
      <div className="todo-left-content">
        <form className="todo-form" onSubmit={handleSubmit}>
          {isFormEmpty && (
            <p className="todo-error-message"> Field Required !!</p>
          )}
          <div className="input-container">
            <label className="todolabel" htmlFor="nameInput">
              Name:
            </label>
            <input
              className="todoinput"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label className="todolabel" htmlFor="priorityInput">
              Priority:
            </label>
            <input
              className="todoinput"
              id="priority"
              type="text"
              value={formData.priority}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label className="todolabel" htmlFor="todoInput">
              To Do:
            </label>
            <input
              className="todoinput"
              id="todo"
              type="text"
              value={formData.todo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label></label>
            <input type="submit" className="todo-submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className="todo-right-content">
        <ul className="todo-lists">
          {todoLists.length > 0 ? (
            todoLists.map((todoList, index) => (
              <li className="todo-li" key={index}>
                <div className="todo-content">
                  <span>Name: {todoList.name}</span>
                  <span className="right-todo-list">
                    Priority: {todoList.priority}
                  </span>
                  <span>TODO: {todoList.todo}</span>
                  <span className="right-todo-list">
                    <button
                      className="todo-delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="no-todo-list">No to do list to show</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
