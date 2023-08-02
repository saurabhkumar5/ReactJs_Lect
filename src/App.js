// import { useState } from 'react';
import './App.css';
// import Counter from './components/Counter';
import Todos from './components/Todos';

// function App() {
//   var counter = 0;

//   return <div className='App'>
//     <h1>Counter: {counter}</h1> //counter zero hi rahega kyu state change nhi ho rha h esliye usestate use karenge
//     <button onClick={()=>{
//        counter = counter+1;
//        console.log(counter); 
//     }}>Add 1</button>
//   </div>
//   }




// function App() {
  
//   // console.log(useState(0))
//   // console.log(useState("hello")) 
   
//   // const x = useState('hello')
//   // console.log(x);

//   const [counter,setCounter] = useState(10);
  
//   const handleOnClick = ()=>{
//     setCounter(counter+1)
//     // setCounter("hello")
//   console.log("clicked")
//   }

//   const sub1 = ()=>{
//     setCounter(counter-1);
//   }

//   return <div className='App'>

//     <h1>Counter:{counter} </h1> 
//     <button onClick={handleOnClick}>Add 1</button>
//     <button onClick={sub1}>Sub 1</button>

//   </div>
//   }




// function App() {

//   const [counter,setCounter] = useState(10);
  
//   const handleOnClick = (value)=>{
//     setCounter(counter+value)

//   }

//   return <div className='App'>

//     <h1>Counter:{counter} </h1> 

//     <button onClick={()=>{handleOnClick(2)}}>Add 2</button>
//     <button onClick={()=>{handleOnClick(-2)}}>Sub 2</button>

//   </div>
//   }




// function App(){

//   // return <Counter/>;
//   return <Counter init={100} size={3}/>;
// }


function App(){
  return <Todos/>
}

export default App;
