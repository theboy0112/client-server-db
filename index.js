import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/element/Home';
import Edit from './src/element/Edit';
import Read from './src/element/Read';
import Create from './src/element/Create';

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
