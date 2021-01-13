import React,{ useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import './memorize.css';
import Small from './Small';

const Memorize = () => {

    
const { counter, incrementa } = useCounter(10);
const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={counter}/></h2>
            <hr />

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

export default Memorize;