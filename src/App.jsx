import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import Habitos from "./pages/Habitos";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/habitos' element={<Habitos/>}/>
        <Route path='/hoje' element={<Hoje/>}/>
        <Route path='/historico' element={<Historico/>}/>
      </Routes>
    </BrowserRouter>
  )
}