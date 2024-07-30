import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todoSlice.js';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center items-center">
      <input
        type="text"
        className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-300 ease-in-out shadow-sm focus:shadow-md w-1/3"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-2 px-6 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-lg text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
