import React from 'react';

// 컴포넌트 클래스, 함수형
function Count() {

    const [cnt, setCnt] = React.useState(0);
  
    const click2222 = () => {    
      setCnt(cnt + 1);
    }
  
    return (
      <div>
        합계숫자는? <span>{cnt}</span>
        <div onClick={click2222}>클릭</div>
      </div>
    );
}
export default Count