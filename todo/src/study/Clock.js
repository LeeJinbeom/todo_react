import React from 'react';

export default function Clock() {
    const [date2, setDate2] = React.useState(new Date());
    
    // const timer = setInterval(()=>{setDate2(new Date())}, 1000);
    
    React.useEffect(() => {
        const timer = setInterval(()=>{setDate2(new Date())}, 1000);
        
        return ()=>{
            clearInterval(timer);
        }
    },[])
    
    return (
        <>
            {date2.toISOString()}
        </>
    )
}