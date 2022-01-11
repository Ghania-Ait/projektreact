import React,{useContext} from 'react';
import Context from '../Context/Context';


export function Todo({text,todo, todos, setTodos }) {

//const {todo, todos, setTodos}  =useContext(Context)
    //Event Effacer des todos
    const deletHandler=()=>{
        setTodos(todos.filter((e)=> e.id !== todo.id))
      
    }
    // Afficher les todos complet
    const completeHandler = () => {
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }
        


    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ?'completed':'' }`}>{text} </li>
            <button onClick={completeHandler}><i className='fas fa-check'></i></button>
            <button onClick={deletHandler}><i className='fas fa-trash'></i></button>
            
        </div>
    )
}
export default Todo;