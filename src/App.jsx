import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoList />
      <hr />
      <ItemList />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
