import React, { useState } from 'react';

export default function Gugudan() {

    // 여기있는 내용들은 계속실행됨    
    const num = [];
    const [x, setX] = useState(2);

    for(let i=2; i<10; i++) {
        num.push(<div>{x} X {i} = {x*i}</div>)
    }

    return(
        <div>
            <input value={x}
                   onChange={(e)=>{setX(e.target.value)}}
                    />
            {/* {
                num.map((v,i)=>{
                    return <div>{x} X {v} = {x*v}</div>
                })
            } */}
            {num}
        </div>
    )
}