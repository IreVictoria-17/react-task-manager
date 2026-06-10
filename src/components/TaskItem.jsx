// src/components/TaskItem.jsx
import React from 'react';

// COMENTARIO OBLIGATORIO: Este componente recibe 'task', 'deleteTask' y 'toggleComplete' como props.
// COMENTARIO OBLIGATORIO: Es un componente de presentación de último nivel. No tiene estados internos,
// pero reacciona a las interacciones del usuario notificando al componente padre (App.jsx) a través de callbacks.
function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {/* Entrada del Checkbox para marcar completar/desmarcar tarea */}
      <input 
        type="checkbox" 
        checked={task.completed}
        // COMENTARIO OBLIGATORIO: ¿Qué función cambia completed? Llama a toggleComplete pasándole el id
        onChange={() => toggleComplete(task.id)} 
      />
      
      {/* Aplicamos estilo condicional en línea o mediante clases para tachar el texto si está completada */}
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      
      {/* Badge o indicador de la prioridad de la tarea */}
      <span className={`priority-badge priority-${task.priority}`}>
        (Prioridad: {task.priority})
      </span>
      
      {/* COMENTARIO OBLIGATORIO: ¿Qué función elimina tareas? Llama a deleteTask pasándole el id.
          COMENTARIO OBLIGATORIO: Se usa onClick={() => deleteTask(task.id)} con función flecha
          para evitar que se ejecute automáticamente durante el renderizado. Solo correrá al hacer clic. */}
      <button onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </div>
  )
}

export default TaskItem;