import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
       nombre:'',
       email:'',
   });

   const {nombre, email} = formState;

   useEffect(() => {
       //console.log('hola');
   },[]);

   useEffect(() => {
        //console.log('cambia formState');
    },[formState]);

    useEffect(() => {
        //console.log('cambia email');
    },[email]);

   const handleInputChange = ({target})=> {
       setFormState({
           ...formState,
           [target.name]:target.value,
       });
   }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={nombre}
                    onChange={handleInputChange}
                />
                <input
                className="form-control"
                    type="text"
                    name="email"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {nombre === '123' && <Message />}
        </>
    )
}
