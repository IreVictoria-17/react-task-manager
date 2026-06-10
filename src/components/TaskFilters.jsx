// src/components/TaskFilters.jsx
import React from 'react';

// COMENTARIO OBLIGATORIO: Recibe 'currentFilter' para saber cuál está activo y 'setFilter' (funcion que cambia el filtro).
// COMENTARIO OBLIGATORIO: Se usa onClick={() => setFilter('...')} pasándole un callback en lugar de ejecutar la función directamente,
// ya que si pusiéramos onClick={setFilter('todas')}, la función se ejecutaría inmediatamente al renderizar el componente.
function TaskFilters({ currentFilter, setFilter }) {
  return (
    <div className="filters">
      <button 
        className={currentFilter === 'todas' ? 'active' : ''} 
        onClick={() => setFilter('todas')}
      >
        Todas
      </button>
      <button 
        className={currentFilter === 'pendientes' ? 'active' : ''} 
        onClick={() => setFilter('pendientes')}
      >
        Pendientes
      </button>
      <button 
        className={currentFilter === 'completadas' ? 'active' : ''} 
        onClick={() => setFilter('completadas')}
      >
        Completadas
      </button>
    </div>
  );
}

export default TaskFilters;