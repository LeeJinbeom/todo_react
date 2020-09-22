import React from 'react';

const ClassContext = React.createContext("")

export default function ContextApiTest2() {

    const [className, setClassName] = React.useState("");

    return(
        <ClassContext.Provider value={className}>
        <div>
            과정명 <input onChange={(e)=>setClassName(e.target.value)}/>
        </div>
        <div>
            <Child1/>
        </div>
        </ClassContext.Provider>
    )
}

function Child1(){
    const [students, setStudents] = React.useState([]);
    const [student, setStudent] = React.useState({
        name:'',
        age:0
    });

    const change = (e) => {
        const {value, name} = e.target;
        setStudent({
            ...student,
            [name]:value
        })
    }

    const click = (e) => {
        setStudents([
            ...students, student
        ])
        setStudent({
            name:'',
            age:0
        })
    }

    return(
        <div>
            <div>
                학생이름<input name="name" 
                               value={student.name}
                               onChange={change}/>
                나이<input name="age"
                           value={student.age}
                           onChange={change}/>
                <button onClick={click}>등록</button>
            </div>
            <div>
                {students.map((v)=>{
                    return <Child2 student={v}/>
                })}
            </div>
        </div>
    )
}

function Child2({student}){

    const [className, setClassName] = React.useState(React.useContext(ClassContext));

    return (
        <div>{student.name} / {student.age} / {className}</div>
    )
}