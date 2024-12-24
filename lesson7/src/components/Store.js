import { createStore, combineReducers } from "redux";
import tasksReducer from "../features/tasksSlice";

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

// Создаем Redux store, передаем rootReducer
const store = createStore(rootReducer);

export default store;
