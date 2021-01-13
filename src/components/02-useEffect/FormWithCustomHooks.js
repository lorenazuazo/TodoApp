import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormWithCustomHooks = () => {

   const [formValue, handleInputChange] = useForm({
       nombre:'',
       email:'',
       password:'',
   });

   const {nombre, email, password} = formValue;

   const handleSubmit= (e)=> {
       e.preventDefault();
       console.log(formValue)
   }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHooks</h1>
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
                    type="email"
                    name="email"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                 <input
                className="form-control"
                    type="password"
                    name="password"
                    placeholder="*******"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
