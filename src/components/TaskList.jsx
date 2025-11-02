import { Component } from 'react';

class TaskList extends Component {
  static tasks = [
    { id: 1, text: 'Піти на урок з програмування' },
    { id: 2, text: 'Підготувати домашку' },
    { id: 3, text: 'Піти відпочити' },
  ];
  addTask = () => {
    const input = document.getElementById('task-input');
    const text = input.value.trim();

    if (text !== '') {
      const newTask = { id: Date.now(), text };
      TaskList.tasks.push(newTask);
      input.value = '';
      this.forceUpdate(); 
    }
  };
  deleteTask = (id) => {
    const index = TaskList.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      TaskList.tasks.splice(index, 1);
      this.forceUpdate(); 
    }
  };

  render() {
    return (
      <div className="task-list">
        <div className="add-task">
          <input id="task-input" type="text" placeholder="Нове завдання..." />
          <button onClick={this.addTask}>Додати</button>
        </div>

        <ul>
          {TaskList.tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.text}</span>
              <button onClick={() => this.deleteTask(task.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
