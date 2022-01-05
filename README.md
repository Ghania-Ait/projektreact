App component
unction App() {
  const [inputText, setInputText]=useState('');
  const [todos,setTodos]= useState([])
  return (
    <div className='todoapp'>
      <Header/>
     <Todoform todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
     <Todolist/>
    </div>
  );
}

export default App;


********* HEADER *******
import React from 'react'

export function Header() {
    

    return (
        <div className='header'>
            <h1>To Do List</h1>
        </div>
    )
}
export default Header;


**********TODO FORM*************
import React from 'react'

export function Todoform({setInputText, todos, setTodos,inputText}) {
   const inputTextHandler = (e) =>{
  console.log(e.target.value);
  setInputText(e.target.value)
  
   }

   const submitTodoHandler = (e)=>{
       e.preventDefault();
       setTodos([
           ...todos,
           {text: inputText, completed:false, id:Math.random()*1000}
       ]);
       setInputText('')
   }
    return (
        <form className='form' > 
           <input value={inputText} onChange={inputTextHandler} type='text' placeholder='Add a todo' className='todo-input'/>
           <button onClick={submitTodoHandler} className='todo-button' type='submit'><i className='fas fa-plus-square'></i></button>
           <div className='select'>
               <select name ='todos' className='filter-todo'>
                   <option value='all'>All</option>
                   <option value='completed'>Completed</option>
                   <option value='uncompleted'>Uncompleted</option>
               </select>
           </div>
        </form>
    )
}
export default Todoform;



********TODO LIST***************
import React from 'react';
import Todo from './Todo';


export function Todolist(props) {
    

    return (
        <div className='todo-container'>
            <ul className='todo-list'></ul>
            <Todo/>
        </div>
    )
}
export default Todolist;
# projektreact
