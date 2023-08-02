import { useState } from "react";

// function Todos(){
//    const [todo,setTodo] = useState("")
//   
    
//    const handleOnTodoChanged = (e)=>{
//         // console.log(e)
//         // console.log(e.target)
//         // console.log(e.target.value)
//         setTodo(e.target.value)
//     }
     
//     const handleOnClick = ()=>{
//         console.log(todo)
//     }

//     return (
//         <>
//           <input onChange={handleOnTodoChanged} type="text" />
//           <button onClick={handleOnClick}>Add Todo</button>
        
//         </>
//     );

// }



function Todos(){
    const [todo,setTodo] = useState("")
    const [todoList,setTodoList] = useState([])
     
    const handleOnTodoChanged = (e)=>{
         
         setTodo(e.target.value)
     }
      
     const handleOnClick = ()=>{
        //  setTodoList([todo])
        //  console.log(todoList )
        setTodoList([...todoList,todo])
        console.log(todoList )
     }
 
     return (
         <>
           <input onChange={handleOnTodoChanged} type="text" />
           <button onClick={handleOnClick}>Add Todo</button>
           
           {todoList.map(todo=>{
            return <div>{todo}</div>
           })}
         </>
     );
 
 }
 
export default Todos;