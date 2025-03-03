import { useState } from "react";
import './App.css'

export default function MyForm() {
  const [text, setText] = useState('');

  // 입력 요소의 내용이 변경되면 값을 상태에 저장
  // const handleChange = (event) => {
  //   setText(event.target.value);
  // }

  const handleSubmit= (event) => {
    alert(`${text} 라고 입력하셨습니다.`);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={event => setText(event.target.value)} value={text} />
      <input type="submit" value="제출하세요"/>
    </form>
  );
}

//19번 라인은 handleChange가 없어도 작동하도록 인라인 형태로 작성한 것이다.