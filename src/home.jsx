import React from "react";
import { Link } from "react-router-dom";
import './App.css'; 
import './home.css';
function Home() {
  return (
    <div className="home-container">
      <h2>Bienvenue sur Mes Calculatrices</h2>
      <div className="cards-grid">
        <div className="card">
          <h3>Poids Idéal</h3>
          <Link to="/Poids_Ideal" className="btn-primary">Ouvrir</Link>
        </div>
        <div className="card">
          <h3>Température</h3>
          <Link to="/Température" className="btn-primary">Ouvrir</Link>
        </div>
        <div className="card">
          <h3>IMC</h3>
          <Link to="/Imc" className="btn-primary">Ouvrir</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
