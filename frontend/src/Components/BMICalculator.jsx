import React, { useState } from 'react'
import { toast } from 'react-toastify';

function BMICalculator() { 
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender ,  setGender] = useState("");
  const [bmi , setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if(!height || !weight || !gender){
      toast.error("please provide a valid gender, height and weight")
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advide from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You have normal weight. Keep maintaing a healthy lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advide from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist.."
      );
    }


  }





  return (
    <section className='bmi' >
      <h1>BMI CALCULATOR</h1> 
      <div className="container">
        <div className="wrapper">
    <form onSubmit={calculateBMI}>
    <div>
      <label>Height (cm)</label>
      <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height in cm" required />
    </div>
    <div>
      <label>Weight (KG)</label>
      <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight in KG" required />
    </div>
    <div>
      <label>Gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
    </div>
    <div>
      <button type="submit">Calculate BMI</button>
    </div>
    </form>

        </div>
        <div className="wrapper">
          <img style={{
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(1, 0, 0, 0.3)'
          }} src="/bmi.jpg" alt="bmiimages"/>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator;