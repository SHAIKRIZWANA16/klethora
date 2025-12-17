import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const designs = [
  {
    name: "Elegant Dress",
    desc: "Classic and timeless",
    color: "#fde2e2",
  },
  {
    name: "Casual Blouse",
    desc: "Comfortable daily wear",
    color: "#dbeafe",
  },
  {
    name: "Stylish Top",
    desc: "Modern and trendy",
    color: "#dcfce7",
  },
  {
    name: "Flowing Tunic",
    desc: "Relaxed and graceful",
    color: "#f3e8ff",
  },
  {
    name: "Formal Shirt",
    desc: "Professional look",
    color: "#f3f4f6",
  },
  {
    name: "Traditional Kurta",
    desc: "Cultural elegance",
    color: "#ffedd5",
  },
];

export default function Design() {
  const [selected, setSelected] = useState(null);
    const navigate = useNavigate(); 
  return (
    <div className="design-page">
      {/* Top bar */}
      <div className="top-bar">
      <span className="back" onClick={() => navigate(-1)}>
  ← Back
</span>
        <span className="step">Step 2 of 5</span>
      </div>
  
    <div className="design-card">
      <h1 className="title">Choose Your Design</h1>
      <p className="subtitle">
        Select the style that matches your vision
      </p>

      <div className="design-grid">
        {designs.map((d, i) => (
          <div
            key={i}
            className={`design-item ${
              selected === i ? "active" : ""
            }`}
            onClick={() => setSelected(i)}
          >
            <div
              className="design-preview"
              style={{ backgroundColor: d.color }}
            >
              <span className="dress-icon">👗</span>
              {selected === i && <span className="check">✓</span>}
            </div>

            <h3>{d.name}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
          <Link to="/shoulder-design" className="cta">Continue→
        </Link>
    </div>
  </div>
);
}
 