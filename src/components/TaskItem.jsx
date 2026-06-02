// src/components/TaskItem.jsx
// Recibimos el objeto 'task' individual por props
function TaskItem({ task }) {
  return (
    <div className="task-item">
      {/* Mostramos el nombre de la tarea */}
      <span>{task.name}</span>
    </div>
  )
}

export default TaskItem