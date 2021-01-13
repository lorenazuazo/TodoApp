import React,{ useState,useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import './memorize.css';


const MemoHook = () => {

    
const { counter, incrementa } = useCounter(50);
const [show, setShow] = useState(true);

const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary mt-5"
                onClick={incrementa}
            > +1 </button>

            <button
                className="btn btn-outline-primary ml-3 mt-5"
                onClick={()=>{setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHook;