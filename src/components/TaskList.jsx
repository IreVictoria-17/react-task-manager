// src/components/TaskList.jsx
import TaskItem from './TaskItem' // Importamos el componente hijo que representa cada tarea individual

// Recibimos el arreglo de 'tasks' a través de las props
function TaskList({ tasks }) {
  
  return (
    <div className="task-list">
      {/* COMENTARIO OBLIGATORIO: El método map() itera sobre el arreglo de 'tasks'. 
          Por cada objeto de tarea en el arreglo, retorna (construye) un nuevo 
          componente <TaskItem />. Es decir, transforma datos puros en elementos visuales. */}
      {tasks.map((task) => (
        // Siempre que usamos map() en React, debemos pasar una prop especial llamada 'key' 
        // con un valor único para que React sepa identificar qué elemento es cuál.
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
export default TaskList