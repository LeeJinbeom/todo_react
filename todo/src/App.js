import React from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

// 컴포넌트 클래스, 함수형
function Count() {
  const [cnt, setCnt] = React.useState(0)

  const click2222 = () => {    
    setCnt(cnt + 1)
  }

  return (
    <div>
      합계숫자는? <span>{cnt}</span>
      <div onClick={click2222}>클릭</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Count/>
    </div>
  );
}

export default App;
