import React from 'react';
import Axios from 'axios';
import API from 'Api';

export default function AxiosTest() {

    const [students, setStudents] = React.useState([]);
    const [id, setId] = React.useState(null);

    React.useEffect(()=>{
        API.get("study/students/")
        .then(res => {
            console.log(res);
            const { data } = res;
            setStudents(data);
        }).catch(error=>{
            console.log(error);
        })
    }, [])

    const click = (e) => {
        console.log(e.target.id);
        setId(e.target.id);
    }

    return(
        <div>
            {
                students.map((v)=>{
                    return <div id={v.id} onClick={click}>{v.name}</div>
                })
            }
            <hr/>
            <AxiosTestDetail id={id}/>
        </div>
    )
}

function AxiosTestDetail({id}) {
    
    const [student, setStudent] = React.useState(null)
    
    React.useEffect(()=> {
        API({
            method:"GET",
            url:"study/students/" + id
        })
        .then(res => {
            console.log(res);
            const { data } = res;  
            setStudent(data);
        }).catch(error=>{
            console.log(error);
        })
        console.log("ID 가 변경됨~")
    },[id])

    return(
    <div>
        {student && <div>
            <span>{student.name}</span>    
            <span>{student.address}</span>    
            <span>{student.email}</span>    
            <span>{student.memo}</span>    
        </div>}
    </div>
    )
}