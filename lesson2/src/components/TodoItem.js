import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTodo(todo.id));

    const handleEdit = () => {
        const name = prompt("Введите новое имя:", todo.name);
        if (name) {
            dispatch(updateTodo({ id: todo.id, name }));
        }
    };

    return (
        <div style={styles.card}>
            <h3>{todo.name}</h3>
            <p>Тип: {todo.type}</p>
            <button style={styles.button} onClick={handleEdit}>
                Изменить
            </button>
            <button style={{ ...styles.button, backgroundColor: "red" }} onClick={handleDelete}>
                Удалить
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        textAlign: "left",
        backgroundColor: "#f9f9f9",
    },
    button: {
        marginRight: "5px",
        padding: "5px 10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#007BFF",
        color: "#fff",
    },
};

export default TodoItem;

