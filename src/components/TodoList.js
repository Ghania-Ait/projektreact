import React ,{useContext} from 'react';
import Todo from './Todo';
import Context from '../Context/Context';


    const TodoList=()=>{
        const {todos, setTodos, filteredTodos}=useContext(Context);
       
        return (
            <div className='todo-container'>
                <ul className='todo-list'>
                 {filteredTodos.map(todo =>(
                     <Todo  key={todo.id} 
                     text= {todo.text} 
                     setTodos={setTodos} 
                     todos={todos} 
                    todo={todo} />
                    
                 ))}
                </ul>
               
            </div>
        )
    }
    

export default TodoList;