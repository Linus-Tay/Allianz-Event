import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Error from './components/Error';
import Scan from './components/Scan';
import Screen from './components/Screen';
import Edit from './components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={< Scan />}></Route>  
      <Route exact path='/screen' element={<Screen />}></Route>
      <Route exact path='/edit' element={<Edit />}></Route>
      <Route path='*' element={< Error />}></Route>  
    </Routes>
  </Router>
);