import { useState } from "react";
import './poids_Ideal.css';
function Poids_Ideal() {
  const [taille, setTaille] = useState("");
  const [genre, setGenre] = useState("homme");
  const [poidsIdeal, setPoidsIdeal] = useState(null);

  const calculerPoids = () => {
    const tailleNum = parseFloat(taille);

    if ( tailleNum < 150) {
      alert("Veuillez entrer une taille supérieure à 150 cm !");
      return;
    }

    let resultat;
    if (genre === "homme") {
      resultat = tailleNum - 100 - ((tailleNum - 150) / 4);
    } else {
      resultat = tailleNum - 100 - ((tailleNum - 150) / 2.5);
    }

    setPoidsIdeal(Math.round(resultat));
  };

  return (
    <div className="div_container">
      <h2>Calculatrice du Poids Idéal</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Taille (en cm): </label>
        <input
          type="number"
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
          placeholder="ex: 170"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Genre: </label>
        <select className="select" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
      </div>

      <button onClick={calculerPoids}>Calculer</button>

      <h3>
        Poids Idéal :{" "}
        <span style={{ color: "blue" }}>
          {poidsIdeal !== null ? poidsIdeal + " kg" : ""}
        </span>
      </h3>
    </div>
  );
}

export default Poids_Ideal;
