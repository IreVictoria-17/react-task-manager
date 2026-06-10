// src/components/TaskSearch.jsx
import React from 'react';

// Este componente recibe el estado de búsqueda y su modificador como props desde App.jsx
function TaskSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="task-search-container">
      <input
        type="text"
        placeholder="🔍 Buscar tarea por nombre..."
        value={searchQuery} // Input controlado
        onChange={(e) => setSearchQuery(e.target.value)} // Actualiza el estado en App.jsx inmediatamente
        className="search-input"
      />
      {/* Si el usuario ha escrito algo, mostramos un botón pequeño para limpiar la búsqueda rápidamente */}
      {searchQuery && (
        <button 
          type="button" 
          onClick={() => setSearchQuery('')}
          className="clear-search-btn"
        >
          X
        </button>
      )}
    </div>
  );
}

export default TaskSearch;