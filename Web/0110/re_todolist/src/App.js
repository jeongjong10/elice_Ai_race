import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList(current => {
      return [...current, {
        id: new Date().getTime(),
        isCompleted: false,
        value: inputValue,
      },];
    });
    setInputValue('');
  }

  return (
    <div>
      <ol id="todo_list">
        {todoList.map((item)=>{
          <li>
            <span>{item.value}</span>

          </li>
        })}
      </ol>
      <form id="create" onSubmit = {handleSubmit}>
          <input type="text" value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value);
          }}/>
          <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default App;
