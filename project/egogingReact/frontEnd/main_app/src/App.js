import './App.css';
import { Like } from './Like';
import {useState} from 'react';

function Header({title,onChangeHeader}){
  return <h1>
    <a 
      href='/' 
      onClick={(e)=>{
        e.preventDefault();
        alert('click Header!');
        onChangeHeader();
      }}
    >
      {title}
    </a>
  </h1>
}
function Nav({data,onChangeNav}){
  const lis = []
  for(let i=0; i<data.length; i++){
    lis.push(<li key={data[i].id}>
      <a // a 태그 는 href 동작시 Default Behaiver로 링크로 이동한다.
      onClick={(e)=>{
        // debugger;
        e.preventDefault();
        alert('click Nav!');
        onChangeNav(data[i].id);
        console.log('i', i);
      }}
      href={"/read/"+data[i].id} >
        {data[i].title}
      </a>
    </li>)
  }
  return <ul>
    {lis}
</ul>
}
function Article({title, body}){
  return <>
    <h2>{title}</h2>
    {body}
  </>
}
// Like2 만들어보기
// function Like2(){}

function App() {
  let modeState = useState('READ');
  let mode = modeState[0];
  let setMode = modeState[1];

  const idState = useState(null);
  const id = idState[0];
  const setId = idState[1];

  function onChangeHeaderHandler() {
    setMode = "WELCOME";
  }
  function onChangeNavHandler(id) {
    setMode("READ");
    setId(id);
  }

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
  ]

  // 모드 변수를 통하여 Article 컴포넌트에 입력되는 프롭스를 변경 => 내용 변경
  // const mode = 'READ';
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, React"></Article>
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello, Read"></Article>
  }

  return (
    <div className="App">
      <Header title="React!" onChangeHeader={onChangeHeaderHandler}></Header>

      <Nav data={topics} onChangeNav={onChangeNavHandler}></Nav>

      {/* <Article title="Welcome" body="Hello, React"></Article> */}
      {content}
      <Like></Like>
    </div>
    
  );
}

export default App;