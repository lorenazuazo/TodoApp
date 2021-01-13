import { useState } from "react"

export const useCounter = (initialState = 10) => {
   const [counter, setCounter] = useState(initialState);

   const incrementa = ()=>{
       setCounter(counter + 1);
   };

   const decrementa = ()=>{
    setCounter(counter - 1);
    };

    const resetCounter= () => {
        setCounter(initialState);
    }

    return{
        counter,
        incrementa,
        decrementa,
        resetCounter    
    }
}
