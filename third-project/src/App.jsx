import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TodoList from './views/TodoList'; 
import Contact from './views/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/todos">To do List</Link> 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/todos" element={<TodoList />} />  
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;






