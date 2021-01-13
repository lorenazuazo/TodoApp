import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWhitCustomHooks = () => {

    const { counter, incrementa, decrementa, resetCounter }= useCounter(100);
    return (
        <>
            <h1>Counter Whit CustomHooks: { counter }</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ () => incrementa (2) }
            >+ 1</button>
            <button 
                className="btn btn-primary"
                onClick={ () => decrementa(2) }
            >- 1</button>
            <button 
            className="btn btn-primary"
            onClick={resetCounter}
            >Reset
            </button>
            
        </>
    )
}
