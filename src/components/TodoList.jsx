import Task from "./Task";
import { useState } from "react";

const ItemList = () => {
  const [taskName, setTaskName] = useState("");
  const [taskState, setTaskState] = useState(false);
  const [items, setItems] = useState([
    // { name: "早起き", state: false },
    // { name: "授業課題", state: false },
  ]);
  return (
    // ここにTaskコンポーネントを並べる
    <div>
      <h2>Todoリスト</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Task name={item.name} state={item.state} />
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="taskName">
          タスク名：
          <input
            type="text"
            id="taskName"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </label>
        <label htmlFor="taskAddState">
          完了：
          <input
            type="checkbox"
            id="taskAddState"
            onChange={(e) => {
              setTaskState(e.target.checked);
            }}
            value={taskState}
          />
        </label>
        <button
          onClick={() => {
            console.log(taskState);
            setItems((items) => [
              ...items,
              { name: taskName, state: taskState },
            ]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default ItemList;
