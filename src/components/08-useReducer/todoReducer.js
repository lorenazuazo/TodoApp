//lo inicializo como arr ya que asi lo voy a usar aca
//cuando se inicialice llama siempre al default y lo que hace es devolver el estado inicial
export const todoReducer = (state = [],action) =>{
    switch (action.type) {
        case 'add':
            return [...state,action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toogle':
            return state.map( todo => 
                todo.id ===action.payload 
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        case 'toogle-old':
            return state.map( todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            })
        
        default:
            return state;
    }
}