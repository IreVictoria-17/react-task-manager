// src/components/TaskList.jsx
import TaskItem from './TaskItem'

// COMENTARIO OBLIGATORIO: Recibe 'tasks' (arreglo ya filtrado), 'deleteTask' y 'toggleComplete' como props.
function TaskList({ tasks, deleteTask, toggleComplete }) {
  
  // REGLA OPTIMIZADA: Mensaje adaptado si no hay resultados visibles por filtros o búsqueda
  if (tasks.length === 0) {
    return (
      <div className="no-tasks-message">
        <p>No se encontraron tareas que coincidan con la búsqueda o el filtro seleccionado. 🔍❌</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {/* COMENTARIO OBLIGATORIO: El método map() itera sobre el arreglo de 'tasks'. 
          Por cada objeto, retorna un componente <TaskItem /> transformando datos en elementos visuales. */}
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </div>
  )
}

export default TaskList