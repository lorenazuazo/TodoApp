import React, { useEffect, useState } from 'react';

export const Message = () => {
    
    const [coords, setCoords] = useState({
        x:0,
        y:0,
    });

    const {x,y}=coords;
    

    useEffect(() => {
        const mousseMove = (e)=>{
            setCoords({
                x: e.x,
                y: e.y,
            })
            
            console.log(coords);
        };

        window.addEventListener('mousemove',mousseMove);
        return () => {
            window.removeEventListener('mousemove',mousseMove);
            console.log('componente desmontado');
        }
    }, [])


    return (
        <>
            <h3>Eres Genial !!</h3>
            <p>x: {x}, y: { y } </p>
        </>
    )
}
