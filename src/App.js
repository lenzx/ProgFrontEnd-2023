import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import Home from './components/Home'
import PerfilPag from './components/PerfilPag';
import Ejercicio from "./components/Ejercicio";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/perfil" element={<PerfilPag />} />
        <Route exact path='/ejercicio' element={<Ejercicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

