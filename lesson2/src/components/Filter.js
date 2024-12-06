import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/todoSlice";

const Filter = () => {
    const filter = useSelector((state) => state.todos.filter);
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div style={styles.filterContainer}>
            <label style={styles.label}>Фильтр:</label>
            <select style={styles.select} value={filter} onChange={handleFilterChange}>
                <option value="all">Все</option>
                <option value="user">Обычный пользователь</option>
                <option value="business">Бизнес</option>
            </select>
        </div>
    );
};

const styles = {
    filterContainer: {
        marginBottom: "20px",
    },
    label: {
        marginRight: "10px",
    },
    select: {
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
};

export default Filter;

