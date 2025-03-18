import { useReducer } from "react";


function reducer(prevCount, action){
  if(action === 'up'){
    return prevCount + 1;
  }else if(action === 'down'){
    return prevCount - 1;
  }   // 이후 부분의 조건문 작성하시오.
  else if(action ==='reset'){
    return 0;
  }
}

export default function ReducerUse(){
  //여기 dispatch 파트는 같이 작성할겁니다.
  //↓
  const [count, dispatch] = useReducer(reducer,0);
  // const를 변경하기 위해서는 dispatch를 사용

  function down() {
    dispatch("down");
  }

  function up() {
    dispatch("up");
  }

  function reset() {
    dispatch("reset");
    console.log("다먹었다!")
  }

  // return은 동일하게 완성하시오.
  return(
    <div>
      <p>현재 내가 가지고 있는 사과 개수는 {count} 개</p>
      <input type="button" value="🍏1개 먹음" onClick={down} />
      <br /><br />
      <input type="button" value="🍏1개 구매" onClick={up} />
      <br /><br />
      <input type="button" value="🍏모두 먹음" onClick={reset} />
    </div>
  );
}