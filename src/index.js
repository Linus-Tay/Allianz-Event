import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={< App />}></Route>  
      <Route exact path='/registration' element={<Registration />}></Route>
      <Route path='*' element={< Error />}></Route>  
    </Routes>
  </Router>
);