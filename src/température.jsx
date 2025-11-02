import { useState } from "react";
import "./température.css";
function Température() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState(null);
  const [kelvin, setKelvin] = useState(null);

  const convertir = () => {
    const value = parseFloat(celsius);
    if (isNaN(value)) {
      setFahrenheit(null);
      setKelvin(null);
    } else {
      setFahrenheit((value * 9) / 5 + 32);
      setKelvin(value + 273.15);
    }
  };

  return (
    <div className="container">
      <h2>Convertisseur Celsius → Fahrenheit & Kelvin</h2>
      <input
        type="text"
        placeholder="Ex : 25"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      <button onClick={convertir}>Convertir</button>

      {fahrenheit !== null && kelvin !== null && (
        <div>
          <p>Fahrenheit (°F): {fahrenheit.toFixed(2)}</p>
          <p>Kelvin (K): {kelvin.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Température;
