import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import Task from "./components/Task";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoList />
      <hr />
      <Task name="やる気" state="未完了" />
      <hr />
      <ItemList />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
