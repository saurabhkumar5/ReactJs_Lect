import { useState } from 'react';


function Counter({init,size}){
    const [counter,setCounter] = useState(init);
    const handleOnClick = (value)=>{
        setCounter(counter+value)
    }
    return <div className='App'>

    <h1>Counter:{counter} </h1> 

    <button onClick={()=>{handleOnClick(size)}}>Add 2</button>
    <button onClick={()=>{handleOnClick(-size)}}>Sub 2</button>

  </div>
}

export default Counter;