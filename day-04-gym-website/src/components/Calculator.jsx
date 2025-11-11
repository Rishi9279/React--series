import React from "react";
import { useState } from "react";
import './Calculator.css'

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState(null);
  const [maintenance, setMaintenance] = useState(null);
  const [fatloss, setFatLoss] = useState(null);
  const [musclebuild, setMuscleBuild] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    const bmrValue = Math.round(10*w + 6.25*h - 5*a + 5)
    const maintainanceValue = Math.round(bmrValue * 1.55)
    const fatlossValue = maintainanceValue - 300
    const musclebuildValue = maintainanceValue + 300


    setBmr(bmrValue)
    setMaintenance(maintainanceValue)
    setFatLoss(fatlossValue)
    setMuscleBuild(musclebuildValue)
  };

  return (
    <div className="calculator-wrapper">
      <h2>Calories Calculator</h2>
      <div className="inputs">
        <input
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          type="number"
          placeholder="Weight (Kg)"
        />
        <input
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          type="number"
          placeholder="Height (cm)"
        />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
          placeholder="Age"
        />
      </div>
      <button className="calc-btn" onClick={calculate}>
        Calculate
      </button>

      {bmr && (
        <div className="results">
          <p>
            <strong>BMR:</strong> {bmr} calories/day
          </p>
          <p>
            <strong>Maintenance:</strong> {maintenance} calories/day
          </p>
          <p>
            <strong>Fat Loss Target:</strong> {fatloss} calories/day
          </p>
          <p>
            <strong>Muscle Gain Target:</strong> {musclebuild} calories/day
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
