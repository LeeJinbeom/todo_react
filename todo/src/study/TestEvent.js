import React from 'react';

export default function TestEvent({test}) {

    return (
        <div onClick={test} style={{width:'200px', height:'200px', backgroundColor:'yellow'}}>

        </div>
    )
}

