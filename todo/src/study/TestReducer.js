import React, {useReducer} from "react";


//prev 이전값
//action 어떤행동을할지?
const reducer = (prev, action) => {
    if (action.type==="CHANGE") {
        console.log(prev)
        return action.value;
    }
}

export default function TestReducer() {

    const [name, dispatch] = useReducer(reducer, "홍길동")
    const click = () => {
        dispatch({
            type: "CHANGE",
            value: "이몽룡"
        })
    }


    return (
        <>
        {name}
        <button onClick={click}>변경</button>
        </>
    )
}