import './App.css'
import ClickButton from './components/Button'
import MyCard from './components/MyCard'
import MyInput from './components/MyInput'

function App() {

  return (
    <>
      <ClickButton />
      <br /><br />
      <MyCard/>
      <br /><br />
      <MyInput />
    </>
  )
}

// App 내부에 ClickButton , MyCard가 있다. 트리 구조 참조하기.
// 매번 props로 하는게 번거롭기 때문에 ContextAPI를 사용.  

export default App
