import { useState, useEffect, useMemo } from "react";
import './App.css';

function App() {

  const [ number, setNumber ] = useState(0);
  const [ isTrue, setIsTrue ] = useState(true);

  // const answer = isTrue ? "true" : "false"; 기초자료형(primitive type)

  // const answer = {bool : isTrue ? "true" : "false"}; ->  이대로면 객체 주소값이 렌더링 될때마다 바뀌게 됩니다
  const answer = useMemo(() => {
    return { bool: isTrue ? "true" : "false" }
  }, [isTrue]);

  // answer가 바뀔 때만 콘솔이 찍히도록 useEffect 적용
  useEffect(() => {
    console.log('answer 값이 변경되었습니다. 혹은 number 값 변경');
  }, [answer]);
  // 빈 배열의 의미 : 처음 렌더링 될 때만 실행을 시키겠다
  // isTrue가 true면 true 반환이므로 값이 바뀔 때 마다 console.log가 변경됨(answer에 값이 들어갔을 때)
  // 처음에 화면을 켤 때만 렌더링을 하고 싶으면 [answer]가 아닌 []로 작성하는 떄도 있다.

  return(
  <div>
    <p>✨ number</p>
    <input
      type="number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <p>✨ answer</p>
      {/* <p> True or False? : {answer}/</p> */}
      {/* <p> True or False? : {answer.bool}/</p> */}
      <p> True or False? : {answer['bool']}/</p>
      <button onClick={() => setIsTrue(!isTrue)}>Reverse</button>

  </div>
  );
}

export default App;