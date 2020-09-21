import React, { useState } from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import Count from 'Count';
import { Button } from 'antd';
import Welcome from 'Welcome';
import Message from 'Message';
import Buttontest from 'Buttontest';
import Students from 'Students';
import Toggle from 'Toggle';
import Add, { Add2, Add3 } from 'Add';
import Gugudan from 'Gugudan';
import TodoList from 'TodoList';
import TestEvent from 'TestEvent';
import Box from 'Box';
import CountArray from 'CountArray';
import Clock from 'Clock';
import Master from 'Master';
import Timer from 'Timer';


function Parents()
{
  const [num, setNum] = React.useState(50)

  const changeNumber = (number) => {
    setNum(number);
  }

  return (
    <>
      {num}
      <Child changeNumber={changeNumber} 
             color={"red"}
             number={10}
             student={{name:'홍길동', age:35, address:'인천'}}
      />
    </>
  )
}

function Child({changeNumber, color, number, student})
{
  // const x = {name:"홍길동", age:35};
  // const {name, age} = x;  
  console.log(number)
  console.log(color)
  console.log(student)

  const click = () => {
    changeNumber(10)
  }

  return(
    <>
    <button onClick={click}>클릭</button>
    </>

  )
}






function State1() {
  const [student, setStudent] = React.useState({
    name:'홍길동',
    math: 80,
    science: 30,
    english: 60
  })

  const [number, setNumber] = React.useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  )

  const [num1, setNum1] = React.useState(0)
  const [num2, setNum2] = React.useState(0)

  const click = () => {
    setStudent({
      ...student,
      math: 0,
      science: 0,
      english: 0
    })
    setNumber([...number.slice(0, 4), 0, 0, ...number.slice(6, 10)])
  }

  const change1 = (e) =>{
    setNum1(e.target.value)
  }

  const change2 = (e) =>{
    setNum2(e.target.value)
  }

  return (
    <>
    <div>{JSON.stringify(student)}</div>
    <div>{JSON.stringify(number)}</div>
    <button onClick={click}>클릭</button>
    <div>
      <input value={num1} onChange={(e)=>setNum1(e.target.value)}/>
      <input value={num2} onChange={(e)=>setNum2(e.target.value)}/>
      <input value={Number(num1) + parseInt(num2)}/>
    </div>
    </>
  )

}




function StateTest() {

  const [x1, setX1] = useState(10)
  const [x2, setX2] = useState("안녕하세요")
  const [x3, setX3] = useState({name:"홍길동", age:35, address:"인천시"})
  const [x4, setX4] = useState([1, 2, 3, 4, 5, 6])

  const click = () => {
    
    // setX1((prev) => (prev + 1))
    // setX1((prev) => (prev + 1))
    // setX1((prev) => (prev + 1))
    // setX1((prev) => (prev + 1))

    // setX3({...x3, age:40});    
    // setX4([...x4.slice(0,2), 0, 0, ...x4.slice(4,6)])
    x3['name'] = '이진범';
    x4[2] = 0;
    x4[3] = 0;
  }

  const change = (e) => {
    setX1(e.target.value)
  }

  return (
    <>
      <div>{x1}</div>
      <input value={x1} onChange={change}/>
      <div>{x1}</div>
      <div>{x1}</div>
      <div>{JSON.stringify(x3)}</div>
      <div>{JSON.stringify(x4)}</div>
      <div>{x4[2]}</div>
      <div>{x4[3]}</div>
      <button onClick={click}>클릭</button>
    </>
  )
}


function JsxTest() {

  const [a, setA] = React.useState(false);

  let user = 2
  const datas = ['옥수수','사과','배']
  //const afterMap = [<div>옥수수</div>, <div>사과</div>, <div>배</div>]
  
  const c = [
    <div>이진범</div>,
    <div>홍길동</div>
  ]
  
  return (
    <>
      {datas.map((v, i)=> {
          return <div key={i}>{v}</div>
        })}
      {/* {afterMap} */}
      {a && <div>참일경우만 나오는</div>}      
      {a ? <div>참일경우</div> : <div>거짓일경우</div>}      
      {
      (() => {
        //함수                
        if (user==1) return <div>User가 1</div>        
        else if (user==2) return <div>User가 2</div>
      })()
      }
    </>
  );

}

function App() {
  //상태값

  const click = () =>{
    console.log("클릭했음");
  }

  return (
    <div>
      {/* <Students/>
      <Toggle/> */}
      {/* <StateTest/> */}
      {/* <State1/> */}
      {/* <Parents/> */}
      {/* <Add x={10} y={20}/>      
      {/* <TodoList/> */}
      {/* <TestEvent test={click}/> */}
      {/* <Gugudan/> */}
      {/* <Box/> */}
      {/* <TodoList/> */}
      {/* <CountArray/> */}
      {/* <Master/> */}
      <Timer/>
    </div>
  );
}

export default App;
