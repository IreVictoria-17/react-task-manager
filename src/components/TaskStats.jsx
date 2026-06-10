// src/components/TaskStats.jsx
import React from 'react';

// COMENTARIO OBLIGATORIO: Este componente recibe props desde App.jsx para poder mostrar los contadores.
// COMENTARIO OBLIGATORIO: Es un componente mayoritariamente de presentación (solo muestra información),
// pero ejecuta una función de limpieza que altera el estado del padre.
function TaskStats({ totalTasks, completedTasks, pendingTasks, clearCompletedTasks }) {
  return (
    <div className="task-stats">
      <p>Total de tareas: {totalTasks}</p>
      <p>Tareas completadas: {completedTasks}</p>
      {/* COMENTARIO OBLIGATORIO: Mostramos el contador de pendientes requerido */}
      <p>Tareas pendientes: {pendingTasks}</p>
      
      {/* DESAFÍO EXTRA: Botón para limpiar solo las completadas si es que existen */}
      {completedTasks > 0 && (
        <button onClick={clearCompletedTasks}>
          Limpiar completadas
        </button>
      )}
    </div>
  );
}

export default TaskStats;