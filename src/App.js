import React from "react";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Список завдань</h1>
      <TaskList />
    </div>
  );
}

export default App;
