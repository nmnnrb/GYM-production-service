import React from 'react'
import {Check} from 'lucide-react'
import { Link } from 'react-router-dom'
function Pricing() {
  const pricing = [
    {
      ingURL : "pricing.jpg",
      title: "Basic Plan",
      price: "$99",
      length: 3
      // duration: "1 Month",
      // features: ["5 Workouts", "2 Sessions", "1000 Calories Burned"]
    },
    {
      ingURL : "pricing.jpg",
      title: "Itermediate Plan",
      price: "$399",
      length: 3
      // duration: "1 Month",
      // features: ["5 Workouts", "2 Sessions", "1000 Calories Burned"]
    },
    {
      ingURL : "pricing.jpg",
      title: "Advanced Plan",
      price: "$999",
      length: 3,
      duration: "1 Month",
      features: ["5 Workouts", "2 Sessions", "1000 Calories Burned"]
    }
  ]
  return (
    <section className='pricing' >
      <h1>Premium Plans</h1>
      <div className="wrapper">
        {
          pricing.map((item, index) => (
            <div key={index} className="card">
              <img src={item.ingURL} alt={`Pricing image ${index}`} />
              <div className="title">
              <h2>{item.title}</h2>
              <h3>{item.price}</h3>
              <p>per {item.length} Months</p>
              <p>{item.duration}</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> Personal Trainer
                </p>
                <p>
                  <Check /> Free Rest Room 
                </p>
                <p>
                  <Check /> Sahuna
                </p>
                <p>
                  <Check /> 20 days return back
                </p>
                <Link to={"/"} >Join Now</Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Pricing