import './App.css'

const todos = [
  {task: "mow the yard", id: crypto.randomUUID()},
  {task: "Work on Odin Projects", id: crypto.randomUUID()},
  { task: "Feed the cat", id: crypto.randomUUID() }
];

function ToDoList() {
  return (
    <ul>
      {todos.map((todo) => {
        <li key={todo.id}>{todo.task}</li>
      })}
    </ul>
  )
}

export default App
