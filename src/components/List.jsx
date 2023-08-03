import { useState } from "react";
import { ListItem } from "./ListItem";
import {v4 as uuid} from "uuid"
function List(){

    const [item,setItem] = useState("")
    const [todoList, setTodoList] = useState([]);

    const handleOnClick = ()=>{
        // console.log(item);
        setTodoList([
            ...todoList,
            {
                text: item,
                isDone: false,
                id: uuid()
            }
        ])
    }

    return (
        <>
        <input onChange={(e)=>setItem(e.target.value)} type="text" />

        <button onClick={handleOnClick}>Add Todo</button>
        {/* {todoList.map(item=>{
            return <h4>{item}</h4>
        })} */}

       {/* {todoList.map((item,index)=>{
            return <h4 key={index}>{item.text}</h4>
        })} */}

{todoList.map((item)=>{
            return <ListItem key={item.id} item={item}/> 
        })}
        </>
    );
}

export {List}