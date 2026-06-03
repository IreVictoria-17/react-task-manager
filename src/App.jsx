// src/App.jsx
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState} from 'react'

function App() {
  // COMENTARIO OBLIGATORIO: El estado principal vive aquí en App.jsx 
  // porque varios componentes hijos (TaskForm y TaskList) necesitan acceder a esta información.
  const [tasks, setTasks] = useState([])
  // NUEVO: Estado para saber qué filtro está activo
  const [filter, setFilter] = useState('todas')

  // Función para agregar una nueva tarea
  // NUEVO: Agrega 'taskPriority' como segundo parámetro
  const addTask = (taskName, taskPriority) => {
    const newTask = {
      id: Date.now(), // Generamos un ID único basado en la fecha actual
      name: taskName,
      priority: taskPriority, // Agregamos la prioridad a la tarea
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

  // NUEVO: Agrega esta función para limpiar todo
  const clearTasks = () => {
    setTasks([]) 
  }
  // Calculamos los contadores dinámicamente antes del return
  // --- VARIABLES DERIVADAS ---
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length

  // NUEVO: Calculamos qué tareas mostrar dependiendo del filtro activo
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pendientes') return task.completed === false
    if (filter === 'completadas') return task.completed === true
    return true // Si es 'todas', retornamos todas
  })

  return (
    <div className="app-container">
      <h1>React Task Manager 📝</h1>
      
      {/* SECCIÓN DE CONTADORES Y BOTÓN LIMPIAR */}
      <div className="task-stats">
        <p>Total de tareas: {totalTasks}</p>
        <p>Tareas completadas: {completedTasks}</p>
        
        {/* El botón solo se mostrará si el arreglo de tareas tiene elementos */}
        {tasks.length > 0 && (
          <button onClick={clearTasks}>Limpiar todas las tareas</button>
        )}
      </div>

      {/* FORMULARIO */}
      {/* Pasamos la función addTask como 'prop' al formulario */}
      <TaskForm addTask={addTask} />

      {/* NUEVO: Botones para cambiar el estado del filtro */}
      <div className="filters">
        <button onClick={() => setFilter('todas')}>Todas</button>
        <button onClick={() => setFilter('pendientes')}>Pendientes</button>
        <button onClick={() => setFilter('completadas')}>Completadas</button>
      </div>
      
      {/* LISTA DE TAREAS */}
      {/* Pasamos las nuevas funciones como props a TaskList */}
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  )
}

export default App