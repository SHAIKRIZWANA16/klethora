import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const fabrics=[
  { name: "Premium Cotton", desc: "Soft and breathable", color: "#dbeafe" },
  { name: "Pure Silk", desc: "Luxurious and elegant", color: "#f3e8ff" },
  { name: "Natural Linen", desc: "Light and airy", color: "#dcfce7" },
  { name: "Chiffon", desc: "Delicate and flowing", color: "#fce7f3" },
  { name: "Satin", desc: "Smooth and shiny", color: "#fef9c3" },
  { name: "Velvet", desc: "Rich and textured", color: "#fde2e2" },
];

export default function Fabric() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); 
  return (
    <div className="fabric-page">
      {/* Top bar */}
      <div className="top-bar">
      <span className="back" onClick={() => navigate(-1)}>
  ← Back
</span>
        <span className="step">Step 1 of 5</span>
      </div>

      <div className="fabric-card">
        <h1 className="title">Choose Your Fabric</h1>
        <p className="subtitle">
          Select the perfect fabric for your custom clothing
        </p>

        <div className="fabric-grid">
          {fabrics.map((f, i) => (
            <div
              key={i}
              className={`fabric-item ${selected === i ? "active" : ""}`}
              onClick={() => setSelected(i)}
            >
              <div
                className="fabric-preview"
                style={{ backgroundColor: f.color }}
              >
                {selected === i && <span className="check">✓</span>}
              </div>

              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/design" className="cta">Continue →</Link>
      </div>
    </div>
  );
}
