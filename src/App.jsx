// src/App.jsx
import './App.css'
import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
// Importamos nuestros nuevos componentes atómicos
import TaskStats from './components/TaskStats'
import TaskFilters from './components/TaskFilters'

function App() {
  // COMENTARIO OBLIGATORIO: ¿Dónde vive el estado principal? Vive aquí en App.jsx.
  // COMENTARIO OBLIGATORIO: ¿Por qué el estado vive en App? Se debe al concepto de "Levantamiento del Estado" (State Lifting).
  // App es el ancestro común más cercano de todos los componentes que necesitan interactuar. 
  // TaskForm necesita cambiar este estado para agregar tareas, y TaskList lo necesita para renderizarlas y modificarlas.
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('todas')

  // COMENTARIO OBLIGATORIO: ¿Qué función agrega tareas? Es 'addTask'.
  // Recibe los datos controlados desde TaskForm y los inyecta en el estado inmutable usando el operador spread (...).
  const addTask = (taskName, taskPriority) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: taskPriority,
      completed: false
    }
    setTasks([...tasks, newTask]) 
  }

  // COMENTARIO OBLIGATORIO: ¿Qué función elimina tareas? Es 'deleteTask'.
  // Recibe el ID del componente TaskItem (vía TaskList) y genera un nuevo arreglo excluyéndolo mediante .filter()
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  // COMENTARIO OBLIGATORIO: ¿Qué función cambia completed? Es 'toggleComplete'.
  // Recorre el estado con .map(), identifica la tarea clickeada por su ID e invierte su propiedad 'completed'.
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  // COMENTARIO OBLIGATORIO: ¿Qué función cambia el filtro? No requiere una función dedicada compleja,
  // directamente pasamos el setFilter (el actualizador del estado) como prop. El filtro cambia el estado 'filter'.

  // DESAFÍO EXTRA: Función modificada para eliminar EXCLUSIVAMENTE las tareas completadas
  const clearCompletedTasks = () => {
    // Nos quedamos únicamente con las tareas que NO están completadas (!task.completed)
    const remainingTasks = tasks.filter(task => !task.completed)
    setTasks(remainingTasks)
  }

  // --- VARIABLES DERIVADAS (Cálculos dinámicos eficientes) ---
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  // Agregamos el contador de pendientes solicitado
  const pendingTasks = tasks.filter(task => !task.completed).length

  // Filtrado de la lista antes de mandarla al componente de presentación TaskList
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pendientes') return !task.completed
    if (filter === 'completadas') return task.completed
    return true
  })

  return (
    <div className="app-container">
      <h1>React Task Manager 📝</h1>
      
      {/* COMENTARIO OBLIGATORIO: ¿Qué componentes reciben props? TaskStats las recibe aquí.
        COMENTARIO OBLIGATORIO: ¿Qué componentes solo muestran información? TaskStats es principalmente de visualización,
        aunque incluye la acción del botón para limpiar completadas.
      */}
      <TaskStats 
        totalTasks={totalTasks} 
        completedTasks={completedTasks} 
        pendingTasks={pendingTasks}
        clearCompletedTasks={clearCompletedTasks}
      />

      {/* Formulario para agregar tareas */}
      <TaskForm addTask={addTask} />

      {/* Componente extraído para manejar el estado visual de los filtros */}
      <TaskFilters 
        currentFilter={filter} 
        setFilter={setFilter} 
      />
      
      {/* COMENTARIO OBLIGATORIO: TaskList recibe como props el arreglo ya filtrado y las funciones controladoras.
        Dentro de él, se renderizará el mensaje si no hay tareas visibles.
      */}
      <TaskList 
        tasks={filteredTasks} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
      />
    </div>
  )
}

export default App