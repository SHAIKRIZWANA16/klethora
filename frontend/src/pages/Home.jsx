import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app">
      <div className="card">
        <div className="icon-circle">
          <span className="heart">♡</span>
        </div>

        <h1 className="brand">
          Klethora <span className="sparkle">✨</span>
        </h1>

        <p className="tagline">Design Your Perfect Custom Clothing</p>

        <div className="love-text">
          <span className="star">✦</span> Handcrafted with Love
        </div>

        <p className="description">
          Create your dream outfit with our personalized design experience.
          Choose your fabric, design, and measurements for a perfect fit.
        </p>

        <div className="steps">
          <div className="step">
            <span className="step-title">Step 1-3</span>
            <span className="step-text">Choose Fabric & Design</span>
          </div>

          <div className="step">
            <span className="step-title">Step 4-5</span>
            <span className="step-text">Customize & Measure</span>
          </div>

          <div className="step">
            <span className="step-title">Step 6-7</span>
            <span className="step-text">Details & Confirm</span>
          </div>
        </div>
        <Link to="/fabric" className="cta">Start Designing
        </Link>
      </div>
    </div>
  );
}
