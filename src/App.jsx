import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import Habitos from "./pages/Habitos";
import Reset from "./styles/reset";
import GlobalStyle from "./styles/globalStyle";


export default function App() {

  return (
    <BrowserRouter>
      <Reset/>
      <GlobalStyle/>
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