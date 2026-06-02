// src/components/TaskItem.jsx
// Recibimos el objeto 'task' individual por props
function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    // Agregamos un estilo condicional: si está completada, la tachamos
    <div className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
     <input 
        type="checkbox" 
        checked={task.completed}
        onChange={() => toggleComplete(task.id)} 
      />
      {/* Mostramos el nombre de la tarea */}
      <span>{task.name}</span>
      {/* COMENTARIO OBLIGATORIO: Se usa onClick={() => ...} con una función flecha anónima
          para evitar que la función deleteTask se ejecute inmediatamente cuando el componente 
          se renderiza. De esta forma, aseguramos que solo se ejecute cuando el usuario haga clic. */}
      <button onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </div>
  )
}

export default TaskItem