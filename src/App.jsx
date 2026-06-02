// src/App.jsx
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'

function App() {
  return (
    <div className="app-container">
      <h1>React Task Manager 📝</h1>
      <TaskForm />
      <TaskList />
      <TaskItem />
    </div>
  )
}

export default App