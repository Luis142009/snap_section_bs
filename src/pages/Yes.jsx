import React from 'react'

export const Yes = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col">
          <h2 className="fw-bold">Built for real life</h2>
          <p>Cooking shouldn't be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.</p>
          <p>Whether you're new to the kitchen or just need fresh ideas, we've got you covered.</p>
        </div>

        <div className="col">
          <img src="./peluche.jpg" className="img-fluid rounded-3" alt="cooking" />
        </div>

      </div>
    </div>
  )
}