import React, {useState, useEffect} from 'react'; 
import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const[inputText, setInputText]= useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setfilterTodos] = useState([]);
  
  // useEffect(() => {
  //   getLocalTodos();
  // })

  useEffect(() =>{
    filterhandler();
  }, [todos,status]);

  const filterhandler = () =>{
    switch(status){
      case "completed":
        setfilterTodos(todos.filter(item => item.completed === true));
        break;
      case "uncompleted":
        setfilterTodos(todos.filter(item => item.completed === false));
        break;
      default:
        setfilterTodos(todos);
        break;
    }
  }

  // const localStorage = () => {
  //   localStorage.setItem("todos" , JSON.stringify(todos));
  // }

  // const getLocalTodos = () => {
  //   if(localStorage.getItem("todos") === null){
  //     alert();
  //     localStorage.setItem("todos", JSON.stringify([]) );
  //   }else{
  //     let todoLocal=JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todoLocal);
  //   }
  // }

  return (
    <div className="App">
      <h1>Your Todo App</h1>
      <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} setStatus={setStatus} status={status} filterhandler={filterhandler} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
    
  );
}

export default App;
