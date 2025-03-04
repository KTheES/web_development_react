import { useState } from "react";
import './App.css'

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // 나머지 부분을 전부 완성해서 MyForm.jsx와 동일하게
  // 동작할 수 있도록 작성하시오.

  // 단, handleChange를 정의하지 말고 연습삼아서
  // 각 input의 onChange부분에 화살표함수를 통해
  // 정의하도록

  const handleSubmit = (event)=> {
    alert(`welcome ${firstName} ${lastName}`)
    event.preventDefault();
  }


  return(
  <form onSubmit={handleSubmit}>
    <label>FirstName </label>
    <input type="text" name="firstName" onChange={event => setFirstName(event.target.value)} value={firstName}/>
    <br /><br /><br />

    <label>LastName </label>
    <input type="text" name="lastName" onChange={event => setLastName(event.target.value)} value={lastName}/>
    <br /><br /><br />

    <label>Email </label>
    <input type="email" name="email" onChange={event => setEmail(event.target.value)} value={email}/>
    <br /><br />
    <input type="submit" value="제출" />
  </form>
  );
}


export default MyForm;