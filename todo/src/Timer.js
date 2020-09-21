import React from "react";

export default function Timer() {

    const [timer, setTimer] = React.useState([]);
    const [cnt, setCnt] = React.useState(-1);

    const click = () => {
        setTimer([...timer, new Date()])
    }

    React.useEffect(() => {
        //timer 내용이 변경될떄마다
        setCnt(cnt + 1)
    },[timer])

    return (
        <>
            타이머개수 : {cnt}
            <button onClick={click}>추가</button>
            {
                timer.map((v) => {
                    // return <div>{v.toISOString()}</div> 
                    return <TimerTime startTime={v}/>
                })
            }
        </>
    )
}

function TimerTime({startTime}) {
    
    const [timer, setTimer] = React.useState(0);

    React.useEffect(()=>{
        //컴포넌트가 생성될때 한번만
        const inter = setInterval(()=> {
            setTimer(new Date().getTime() - startTime.getTime())
        }, 1000)

        return () => {
            //컴포넌트 종료될때 실행
            clearInterval(inter)
        }
    },[])

    return (
        <div>
            {startTime.toISOString()} / {parseInt(timer / 1000)} 초 지남
        </div>
    )
}