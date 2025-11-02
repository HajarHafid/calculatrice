import React, { useState } from "react";
import './imc.css';

function Imc() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [imc, setImc] = useState(null);
  const [categorie, setCategorie] = useState("");
  const [erreur, setErreur] = useState("");

  const calculerIMC = () => {
    if (!poids || !taille || isNaN(poids) || isNaN(taille)) {
      setErreur("Veuillez entrer des valeurs valides !");
      return;
    }

    setErreur("");
    const tailleM = taille / 100;
    const resultat = poids / (tailleM * tailleM);
    setImc(resultat.toFixed(2));

    let cat = "";
    if (resultat < 18.5) cat = "Maigreur";
    else if (resultat < 25) cat = "Normal";
    else if (resultat < 30) cat = "Surpoids";
    else cat = "Obésité";

    setCategorie(cat);
  };

  return (
    <div className="imc-container">
      <h2>Calculatrice IMC</h2>

      <input
        type="text"
        placeholder="Poids (Kg)"
        value={poids}
        onChange={(e) => setPoids(e.target.value)}
      />
      <input
        type="text"
        placeholder="Taille (cm)"
        value={taille}
        onChange={(e) => setTaille(e.target.value)}
      />

      <button onClick={calculerIMC}>Calculer IMC</button>

      {erreur && <p className="error">{erreur}</p>}

      {imc && (
        <div style={{ marginTop: "15px" }}>
          <p><strong>IMC :</strong> {imc}</p>
          <p><strong>Catégorie :</strong> {categorie}</p>
        </div>
      )}
    </div>
  );
}

export default Imc;
