import React, {useReducer} from "react";

const reducer = (prev, action) => {
    // const type = action.type;
    // const value = action.value;
    const {type, value} = action;

    if (type==="SET_NAME") {
        return {
            ...prev,
            name: value
        }
    }else if (type==="SET_AGE") {
        return {
            ...prev,
            age: value
        }
    }
}

export default function TestReducer2() {

    // const [name, setName] = React.useState("홍길동")
    // const [age, setAge] = React.useState(35)
    // const [student, setStudent] = React.useState({
    //         "name":"홍길동",
    //         "age":35
    //     }
    // )
    const [student, dispatch] = React.useReducer(reducer, {
            "name":"홍길동",
            "age":35
    })

    const change = (e) => {        
        // const name = e.target.name;
        // const value = e.target.value;
        // const {value, name} = e.target;
        // setStudent((prev) => ({
        //     ...prev,
        //     [name]:value
        // }))
        const {value, name:type} = e.target;
        dispatch({
            type,
            value
        })
    }

    return (
        <>
            <div>{student.name} {student.age}</div>
            <input name="SET_NAME"
                   onChange={change}
                   type="text"
                   value={student.name}/>
            <input name="SET_AGE"
                   onChange={change}
                   type="text"
                   value={student.age}/>
        </>
    )
}