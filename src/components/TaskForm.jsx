// src/components/TaskForm.jsx
import { useState } from 'react'

// Recibimos la función addTask a través de las props
function TaskForm({ addTask }) {
  // Estado local para controlar lo que el usuario escribe en el input
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // Evita que la página se recargue al enviar el formulario

    // REGLA DE LA TAREA: Evitar tareas vacías
    if (inputValue.trim() === "") {
      alert("La tarea no puede estar vacía")
      return // Detenemos la ejecución si está vacío
    }

    addTask(inputValue) // Enviamos el texto a la función de App.jsx
    setInputValue("") // Limpiamos el input después de agregar la tarea
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={inputValue} // El valor del input es el estado
        onChange={(e) => setInputValue(e.target.value)} // Actualizamos el estado al escribir
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm