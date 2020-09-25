import React from 'react';

export default function CountArray() {
    const [cnt, setCnt] = React.useState(0);    

    const click = () => {
        setCnt(cnt + 1);
    }

    // console.log('랜더링될때마다');

    React.useEffect(() => {
        console.log("처음 만들어졌을때");
        return () => {
            console.log("컴포넌트 삭제시");
        }
    }, [])

    React.useEffect(() => {
        console.log("cnt가 변경될때")
    }, [cnt])

    return (
        <div>
            {cnt} <button onClick={click}>버튼</button>
        </div>
    )
}