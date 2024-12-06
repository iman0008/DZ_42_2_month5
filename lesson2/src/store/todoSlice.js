import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                ...action.payload,
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = { ...state.todos[index], ...action.payload };
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, updateTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
