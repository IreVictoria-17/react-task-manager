// src/App.jsx
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState} from 'react'

function App() {
  // COMENTARIO OBLIGATORIO: El estado principal vive aquí en App.jsx 
  // porque varios componentes hijos (TaskForm y TaskList) necesitan acceder a esta información.
  const [tasks, setTasks] = useState([])

  // Función para agregar una nueva tarea
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(), // Generamos un ID único basado en la fecha actual
      name: taskName,
      completed: false // Por defecto, una tarea nueva no está completada
    }
    // COMENTARIO OBLIGATORIO: Usamos setTasks porque en React el estado es inmutable.
    // COMENTARIO OBLIGATORIO: No se usa push porque push muta el arreglo original directamente, 
    // lo que impide que React detecte el cambio y vuelva a renderizar la pantalla.
    setTasks([...tasks, newTask]) 
  }

  // --- NUEVAS FUNCIONES ---

  // Función para eliminar tarea
  const deleteTask = (taskId) => {
    // COMENTARIO OBLIGATORIO: filter() crea y retorna un NUEVO arreglo que contiene
    // únicamente los elementos que cumplan con la condición especificada.
    // Aquí, conserva todas las tareas cuyo ID sea diferente al que queremos eliminar.
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  // Función para marcar como completada o pendiente
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      // Si encontramos la tarea que recibió el clic, invertimos su estado 'completed'
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div className="app-container">
      <h1>React Task Manager 📝</h1>
      {/* Pasamos la función addTask como 'prop' al formulario */}
      <TaskForm addTask={addTask} />
      {/* Pasamos las nuevas funciones como props a TaskList */}
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  )
}

export default App