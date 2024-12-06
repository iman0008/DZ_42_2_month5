import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { addTodo } from "./store/todoSlice";

const App = () => {
  const handleAddTodo = () => {
    const name = prompt("Введите имя:");
    const type = prompt("Введите тип (user или business):");
    if (name && type) {
      store.dispatch(addTodo({ name, type }));
    }
  };

  return (
      <Provider store={store}>
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.title}>Todo List</h1>
            <button style={styles.button} onClick={handleAddTodo}>
              Добавить пользователя
            </button>
            <Filter />
            <TodoList />
          </div>
        </div>
      </Provider>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
  },
  content: {
    width: "400px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    marginBottom: "20px",
  },
};

export default App;
