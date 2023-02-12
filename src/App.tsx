import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Todo } from './components/Model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodoList([...todoList, {id: Date.now(), todo, isCompleted:false}]);
      setTodo('');
    }
  }
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
