import React, { useState } from 'react';

export default function TodoList(){

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");
    // const ex = (e) => {
    //     setText(e.target.value)
    // }

    const click = () => {
        setTodoList([...todoList,text]);
        setText("");
    }

    return (
        <>
        <input value={text}
               onChange={(e)=>setText(e.target.value)}/>
        <button onClick={click}>추가</button>
        {
            todoList.map((v, i)=>{
                return <Todo i={i} v={v}/>
            })
        }
        </>
    )
}

function Todo({i, v}){
    return (
    <div>
        {i} {v}
    </div>
    )
}