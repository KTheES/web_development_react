import { useState } from 'react';
import './App.jsx';

function App6() {
  const [ count1, setCount1]= useState(0);
  const [ count2, setCount2]= useState(0);

  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 2);
  }

  return (
  <>
    <p>카운터 넘버 1 : {count1}</p>
    <p>카운터 넘버 2 : {count2}</p> 

    

    <button onClick = {increment}> 증가! </button>
  </>
  
  );

}

export default App6;