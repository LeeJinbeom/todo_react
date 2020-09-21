import React, { useState } from 'react';

export default function Gugudan({x}) {

    // 여기있는 내용들은 계속실행됨    
    const num = []

    for(let i=2; i<10; i++) {
        num.push(<div>{x} X {i} = {x*i}</div>)
    }

    return(
        <div>
            {/* {
                num.map((v,i)=>{
                    return <div>{x} X {v} = {x*v}</div>
                })
            } */}
            {num}
        </div>
    )
}