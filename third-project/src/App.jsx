import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TodoList from './views/TodoList';
import Contact from './views/Contact';
import About from './views/About'; 
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/todos" element={<TodoList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/" element={<TodoList />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;










