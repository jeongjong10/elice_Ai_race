// react 라이브러리에서 useState 불러오기
import React, {  useState,useEffect   } from 'react'
import "../index.css"

function Counter(){
    // e.preventDefault();
    // useState 함수 (초기값 0) 의 결과를 counter, setCounter 변수에 할당
    const counterState = useState(0);
    const counter = counterState[0];
    const setCounter = counterState[1];

    // const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter => counter + 1)
    }
    const decreaseCounter = () => {
        // counter 값을 1 줄이도록 코드 작성
        // useState의 set에 값을 넣어줄때는
        // 변화시킬 값 그자체, 변화시킬 함수(로직) 두가지 형태 가능
        setCounter(counter - 1)
    }

    // useEffect 함수를 사용하여 document.title 변경
    useEffect( ()=>{
      document.title = `현재 카운터 숫자: ${counter}`;
    },[counter]);
    
    return(
      <div className="counter">
        <h2> 카운터 </h2>
        <div>{ counter }</div>
        <button onClick={increaseCounter}>증가하기</button>
        <button onClick={decreaseCounter}>감소하기</button>
      </div>
    );
}

export default Counter