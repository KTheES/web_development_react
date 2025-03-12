// import Header from "./components/Header";
// import 이미지변수명 from "경로";
// import reactImg from "./assets/react-core-concepts.png";
// 상대 경로로 표시  './assets/' 안에 있는 ~~ 파일.png 불러옴
import Header2 from "./components/Header/Header2";
import CORE_CONCEPTS from "./data";


function CoreConcepts(props) {
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}


function App() {
  return (
    <div>
      <Header2 />
      <main>
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2>
          <ul>
            <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
