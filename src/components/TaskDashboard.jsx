import React from 'react';

function TaskDashboard({ children }) {
  return (
    <main className="task-dashboard">
      {/* Este componente servirá como contenedor de nuestra app */}
      {children}
    </main>
  );
}

export default TaskDashboard;