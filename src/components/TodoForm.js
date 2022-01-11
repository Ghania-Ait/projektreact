import React,{useContext} from 'react';
import Context from '../Context/Context';



export function Todoform() {
  
  
  const {inputText, setInputText, setTodos, todos, setStatus}= useContext(Context)
    const inputTextHandler=(e)=>{
        
            setInputText(e.target.value)
        }
     
     
  
  
 // creer le bouton pour ajouter des todos
  const submitTodoHandler = (e)=>{
    e.preventDefault();
   const newTodo ={text: inputText, completed:false, id:Math.random()*1000}
        setTodos([...todos,newTodo]);
        setInputText('')
};


/// Pour avoir le status de chaque taches 
const statusHandler=(e)=>{
    setStatus(e.target.value)
}
 



    return (
        <form className='form' > 
           <input value={inputText} onChange={inputTextHandler} type='text' placeholder='Add a todo' className='todo-input' required/>
           <button onClick={submitTodoHandler} className='todo-button' type='submit'><i className='fas fa-plus-square'></i></button>
           <div className='select'>
               <select onChange={statusHandler} name ='todos' className='filter-todo'>
                   <option value='all'>All</option>
                   <option value='completed'>Completed</option>
                   <option value='uncompleted'>Uncompleted</option>
               </select>
           </div>
        </form>
    )
}
export default Todoform;
