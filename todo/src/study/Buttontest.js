import React, { useState } from 'react';
import { Button } from 'antd';

function Buttontest()
{
    const [state, setState] = useState("선택해주세요");

    // const test = {"a":0, "b":1, "c": 2};
    
    // let a = test["a"]
    // let b = test["b"]
    // let c = test["c"]
    // console.log("하나씩",a, b, c)

    // let { a } = test;
    // console.log("한번에", a)

    // const change1 = () => {        
    //     setState("바나나")
    // }

    // const change2 = () => {
    //     setState("사과")
    // }

    // const change3 = () => {
    //     setState("딸기")        
    // }

    console.log(1 > 3 ? 'A': 'B');
    console.log(1 > 3 && 'bbbbb');

    // const test = {"a":0, "b":1, "c": 2}; //객체
    // const test2 = [0,1,2];    
    // console.log(test2.slice(0,2))
    
    // const test2 = {"a": test['a'],"b": test['b'],"c": test['c'], "d":5, "e":6}
    // const test3 = {...test, "d":5, "e":6}
    // console.log(test2)
    // console.log(test3)   

    const x = [1, 2, 18, 32]

    const x1 = x.map(function(val) {
        return "<div>" + val * 2 + "</div>";
    });
    console.log(x1);

    const x2 = x.map(val => val * 2);
    console.log(x2);

    const change = (e) => {
        console.dir(e.target)
        console.log(e.target.innerHTML)
        console.log(e.target.getAttribute("data"))
        console.log(e.target.getAttribute("name"))
        console.log(e.target.name)
        setState(e.target.innerHTML)
    }

    return (        
        <>
            <div>{state}</div>
            <div>
                <button data="바나나" name="바나나" onClick={change}>바나나</button>
                <button data="사과" name="사과" onClick={change}>사과</button>
                <button data="딸기" name="딸기" onClick={change}>딸기</button>
            </div>
        </>
    )
}
export default Buttontest