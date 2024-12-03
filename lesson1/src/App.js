import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementBy10,
    decrementBy10,
    reset,
} from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())} disabled={count === 0}>
                    -1
                </button>
                <button onClick={() => dispatch(incrementBy10())}>+10</button>
                <button onClick={() => dispatch(decrementBy10())} disabled={count === 0}>
                    -10
                </button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;


