import logo from './logo.svg';
import './App.css';

// 태그함수 선언 및 사용가능 [사용자 정의 태그]]
function Header(props){
  console.log('props', props.title);
  return <h1>{props.title}</h1>
}

function Article(props){
  return <div>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
  </div>
}
// 배열 방문하며 출력하는 로직
// 취지: 
function Nav(props){
  console.log(props);
  const list = [];
  for (let i = 0; i < props.data[i].length; i++) {
    list.push(<li>
      <a href={"/read/"+props.data[i].id}>
      {props.data[i].title}
      </a>
    </li>);
  }
  return <>
    {list}
  </>
}

// jsx 라는 유사 자바스크립트
// 자바스크립트 코드 안에서 HTML태그를 사용할 수 있다
function App() {
  const topics = [
    {id:1, title:"a", body:"a"},
    {id:2, title:"b", body:"b"}
  ]
  return (
    <div className="APP">
      <img src={logo} alt="" />
      <Header title="React!"></Header>
      <Nav title={topics}></Nav>
      <Article title="welcome" body="Hello, React"></Article>
    </div>

  );
}
export default App;
