import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const shoulderDesigns = [
  {
    name: "Regular Sleeves",
    desc: "Classic full sleeves",
    bg: "#e0ecff",
  },
  {
    name: "Cap Sleeves",
    desc: "Short and sweet",
    bg: "#fde7f3",
  },
  {
    name: "Sleeveless",
    desc: "Modern and airy",
    bg: "#e6ffe9",
  },
  {
    name: "3/4 Sleeves",
    desc: "Elegant length",
    bg: "#f3e8ff",
  },
  {
    name: "Puff Sleeves",
    desc: "Vintage charm",
    bg: "#fff9c4",
  },
  {
    name: "Bell Sleeves",
    desc: "Flowy and dramatic",
    bg: "#ffe4e1",
  },
];

export default function ShoulderDesign() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); 

  return (
    <div className="design-page">
      <div className="top-bar">
      <span className="back" onClick={() => navigate(-1)}>
  ← Back
</span>
        <span className="step">Step 3 of 5</span>
      </div>
    
      <div className="design-card">
        <h1 className="title">Choose Shoulder Design</h1>
        <p className="subtitle">
          Select the perfect sleeve style for your outfit
        </p>

        <div className="design-grid">
          {shoulderDesigns.map((d, i) => (
            <div
              key={i}
              className={`design-item ${
                selected === i ? "active" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <div
                className="design-preview"
                style={{ backgroundColor: d.bg }}
              >
                <span className="dress-icon">👕</span>
                {selected === i && <span className="check">✓</span>}
              </div>

              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/neck-design" className="cta">Continue→
        </Link>
      </div>
    </div>
  );
}
