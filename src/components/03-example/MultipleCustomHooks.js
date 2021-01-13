import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './style.css';

export const MultipleCustomHooks = () => {
    const {counter,incrementa} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {loading,data,error}=state;
    const {author, quote} = !!data && data[0];//aca transforma el null en falso y luego niega el false osea si hay data carga la posicion 0 del array data
    
    

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading ? (
                    <div className="alert alert-info text-center">Loading...</div>
                ):(
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }
            <button 
            className="btn btn-primary"
            onClick={incrementa}>
                Siguiente quote
            </button>
        </div>
    )
}
