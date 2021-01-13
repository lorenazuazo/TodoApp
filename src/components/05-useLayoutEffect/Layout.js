import React,{ useRef,useLayoutEffect, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    const {counter,incrementa} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {data}=state;
    const {quote} = !!data && data[0];//aca transforma el null en falso y luego niega el false osea si hay data carga la posicion 0 del array data
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    
    
    return (
        <div>
        <h1>LayoutEffect</h1>
        <hr/>
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}
                >{ quote }</p>
            </blockquote>

            <pre>{JSON.stringify(boxSize,null,3)}</pre>
        
        <button 
        className="btn btn-primary"
        onClick={incrementa}>
        Siguiente quote
        </button>
        </div>
        )
    }
    
    