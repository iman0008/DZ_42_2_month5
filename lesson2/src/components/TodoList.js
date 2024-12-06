import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos, filter } = useSelector((state) => state.todos);

    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        return todo.type === filter;
    });

    return (
        <div>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
