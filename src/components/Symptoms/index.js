import React from "react";

import "./index.scss";

const Symptoms = () => (
  <div className="symptoms-container">
    <div className="symptoms-intro">
      <span>Covid-19 Prevention</span>
      <h2>
        <span>COVID-19</span>
        {" "}
        Symptoms
      </h2>
      <div>
        <span>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.</span>
        <span>Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</span>
      </div>
    </div>

    <img src="/img/symptoms.png" alt="symptoms" />
  </div>
);

export default Symptoms;
