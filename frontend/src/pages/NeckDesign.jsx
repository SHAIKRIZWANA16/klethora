
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const neckDesigns = [
  {
    id: "round",
    title: "Round Neck",
    subtitle: "Classic and versatile",
    icon: "⭕",
  },
  {
    id: "vneck",
    title: "V-Neck",
    subtitle: "Elegant and elongating",
    icon: "🔻",
  },
  {
    id: "boat",
    title: "Boat Neck",
    subtitle: "Wide and sophisticated",
    icon: "⛵",
  },
  {
    id: "high",
    title: "High Neck",
    subtitle: "Modern and chic",
    icon: "⛰️",
  },
  {
    id: "scoop",
    title: "Scoop Neck",
    subtitle: "Soft and feminine",
    icon: "🥄",
  },
  {
    id: "square",
    title: "Square Neck",
    subtitle: "Structured and bold",
    icon: "⬜",
  },
];

export default function NeckDesign() {
  const [selectedNeck, setSelectedNeck] = useState(null);
  const navigate = useNavigate(); 

  return (
    <div className="neck-page">
      {/* Top bar */}
      <div className="top-bar">
      <span className="back" onClick={() => navigate(-1)}>
  ← Back
</span>
        <span className="step">Step 4 of 5</span>
      </div>
    <div className="neck-container">
      <h2 className="neck-heading">Choose Neck Design</h2>
      <p className="neck-subheading">
        Select the perfect neckline for your outfit
      </p>

      <div className="neck-grid">
        {neckDesigns.map((neck) => (
          <div
            key={neck.id}
            className={`neck-card ${
              selectedNeck === neck.id ? "selected" : ""
            }`}
            onClick={() => setSelectedNeck(neck.id)}
          >
            {selectedNeck === neck.id && (
              <span className="checkmark">✔</span>
            )}

            <div className="neck-icon">{neck.icon}</div>
            <h3>{neck.title}</h3>
            <p>{neck.subtitle}</p>
          </div>
        ))}
      </div>
      <Link to="/measurements" className="cta">Continue→</Link>   
    </div>
    </div>
  );
}
