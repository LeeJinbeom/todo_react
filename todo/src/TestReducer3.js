import React from 'react';

const reducer = (prev, action) => {

    const {type} = action;

    if (type == "UP_CNT_1"){
        return prev + 1;
    }
    else if (type == "UP_CNT_2"){
        return prev + 2;
    }
}


export default function TestReducer3() {

    const [cnt, dispetch] = React.useReducer(reducer, 0)

    const click = () => {
        dispetch({type:"UP_CNT_1"})
    }

    const click2 = () => {
        dispetch({type:"UP_CNT_2"})
    }

    return (
        <>
        <div>{cnt}</div>
        <button onClick={click}>증가1</button>
        <button onClick={click2}>증가2</button>
        </>
    )

}