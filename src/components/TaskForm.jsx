// src/components/TaskForm.jsx
import { useState } from 'react'

// COMENTARIO OBLIGATORIO: Este componente recibe la prop 'addTask' desde el padre (App.jsx).
// COMENTARIO OBLIGATORIO: Maneja sus propios estados locales internos (inputs controlados) 
// para el texto y la prioridad antes de enviarlos.
function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState("")
  const [priority, setPriority] = useState("baja")

  const handleSubmit = (e) => {
    e.preventDefault() // Evita que la página se recargue al enviar el formulario

    // REGLA DE LA TAREA: Evitar tareas vacías
    if (inputValue.trim() === "") {
      alert("La tarea no puede estar vacía")
      return // Detenemos la ejecución de la función
    }

    // SOLUCIÓN AL BUG: Llamamos a la función una Sola vez pasando ambos valores
    addTask(inputValue, priority) 

    // Reseteamos todos los estados locales de forma limpia
    setInputValue("")
    setPriority("baja")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={inputValue} // Input controlado
        onChange={(e) => setInputValue(e.target.value)} 
      />
      
      {/* Selector de prioridad */}
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm