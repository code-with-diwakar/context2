import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="container mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-700 p-5 shadow">
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            To-Do Work
          </h1>
        </div>
        <div className="bg-white p-8">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
