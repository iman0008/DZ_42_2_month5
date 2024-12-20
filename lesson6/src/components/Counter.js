import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementByTen,
    decrementByTen,
    reset,
} from '../counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1>Счетчик: {count}</h1>
            <div className="counter-buttons">
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(incrementByTen())}>+10</button>
                <button onClick={() => dispatch(decrementByTen())}>-10</button>
                <button className="reset" onClick={() => dispatch(reset())}>
                    Сброс
                </button>
            </div>
        </div>
    );
};

export default Counter;

