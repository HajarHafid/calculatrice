import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Poids_Ideal from "./poids_Ideal";
import Température from "./température";
import Imc from "./imc";
import Home from "./home";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1 className="logo">Mes Calculatrices</h1>
        <div className="links">
          <NavLink to="/" activeclassname="active" end>Home</NavLink>
          <NavLink to="/Poids_Ideal" activeclassname="active">Poids Idéal</NavLink>
          <NavLink to="/Température" activeclassname="active">Température</NavLink>
          <NavLink to="/Imc" activeclassname="active">IMC</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Poids_Ideal" element={<Poids_Ideal />} />
        <Route path="/Température" element={<Température />} />
        <Route path="/Imc" element={<Imc />} />
      </Routes>
    </BrowserRouter>
  );
}
