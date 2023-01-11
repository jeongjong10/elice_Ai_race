import { useState } from 'react';

// ----- 좋아요 버튼 생성 ----
// function Like() {
//   function click() {
//     alert('clicked');
//   };
//   return <div><button onClick={click}>0</button></div>
// }
// function Like() {
//   return <div><button onClick={function () {
//     alert(clicked);}}>0</button></div>
// }
export function Like() {
  // useState 는 state를 만든다
  // useState의 첫번째 입력값은 초기값을 설정한다.
  let countState = useState(0);
  // state의 [0] 원소는 '값'이다
  let cnt = countState[0];
  let cntFunc = countState[1];

  console.log('cnt', cnt);
  console.log('cntFunc', cntFunc);

  function clickHandler() {
    cntFunc(cnt + 1);
    let utterance = new SpeechSynthesisUtterance((cnt + 1) + "번째 Like 입니다.");
    speechSynthesis.speak(utterance);
  }
  return <div>
    <button onClick={clickHandler}>
      {cnt}
    </button>
  </div>;
}
