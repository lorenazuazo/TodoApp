import React,{ useReducer,useEffect } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './style.css';

const init = () =>{

    //esto se hace por si es null regres un arr vacio
    return JSON.parse(localStorage.getItem('todos')) || [];

    //es lo mismo que de arriba pero recupera del local storage
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer,[],init);

   

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) =>{
        
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToogle = (todoId) =>{
        dispatch({
            type:'toogle',
            payload: todoId
        })
    }
   
    const handleTodo = ( newTodo )=>{
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    
                        <TodoList 
                            todos={ todos }
                            handleDelete={ handleDelete }
                            handleToogle={ handleToogle }
                        />
                    
                </div>

                <div className="col-5">
                    <TodoAdd 
                        handleTodo={ handleTodo }
                    />
                </div>

            </div>
        </div>
    )
}
