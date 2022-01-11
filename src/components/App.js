import React, {useState, useEffect} from "react";

import Todoform from "./TodoForm";
import  Header  from "./Header";
import Todolist from "./TodoList";
import  '../style.scss';
import Context from "../Context/Context"



function App() {
 


  //states
  const [inputText, setInputText]=useState('');
  const [todos, setTodos]=useState([]);
  const [status, setStatus]=useState('all');
  const [filteredTodos, setFiltredTodos] = useState([]);


// RUN Once

useEffect(()=>{
getLocalTodos()
},[])

 //Use effect nous permet de mettre a jour notre array , elle va filter le tableau selon le status 
useEffect(()=>{
  filterHandler();
  saveLocalTodos()
  },[todos,status])


  //Functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFiltredTodos(todos.filter(todo =>todo.completed === true));
      break;
      case 'uncompleted':
        setFiltredTodos(todos.filter(todo =>todo.completed === false));
      break;
      default:
        setFiltredTodos(todos)
        break;
    }
  };
  

  // Save in localstorage
const saveLocalTodos = () =>{
 if(localStorage.getItem('todos')=== null){
  localStorage.setItem('todos', JSON.stringify([]))
 }else{
   localStorage.setItem('todos', JSON.stringify(todos))
 }
  }

// save from localstorage
const getLocalTodos= ()=>{
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    let todoLocal= JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
}


  return (
    <div className='todoapp'>
     
      <Header />
      <span> </span>

      <Context.Provider value={{inputText, setInputText, todos,setTodos,setStatus, filteredTodos}}>
      <Todoform/>
       <Todolist/>

      </Context.Provider>
      

      
      
     
     

    </div>
  );
}
 

export default App;
