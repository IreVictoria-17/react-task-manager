// src/components/TaskStats.jsx
import React from 'react';

// COMENTARIO OBLIGATORIO: Este componente recibe props desde App.jsx para poder mostrar los contadores.
// COMENTARIO OBLIGATORIO: Es un componente mayoritariamente de presentación (solo muestra información),
// pero ejecuta una función de limpieza que altera el estado del padre.
function TaskStats({ totalTasks, completedTasks, pendingTasks, visibleTasksCount, clearCompletedTasks }) {
  return (
    <div className="task-stats">
      <div className="stats-grid">
        <p>Total de tareas: {totalTasks}</p>
        <p>Tareas completadas: {completedTasks}</p>
        <p>Tareas pendientes: {pendingTasks}</p>
      </div>

      {/* NUEVO REQUERIMIENTO: Indicador de cuántas tareas cumplen con los filtros/búsqueda actuales */}
      <div className="visible-stats-badge">
        <p><strong>Tareas visibles en pantalla: {visibleTasksCount}</strong></p>
      </div>
      
      {/* DESAFÍO EXTRA: Botón para limpiar solo las completadas si es que existen */}
      {completedTasks > 0 && (
        <button onClick={clearCompletedTasks} className="clear-completed-btn">
          Limpiar completadas
        </button>
      )}
    </div>
  );
}

export default TaskStats;