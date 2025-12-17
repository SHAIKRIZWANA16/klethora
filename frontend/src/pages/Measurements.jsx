import { Link } from "react-router-dom";
import { useState } from "react";

export default function Measurement() {
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    shoulder: "",
    arm: "",
    length: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setMeasurements({ ...measurements, [name]: value });
    }
  };

  return (
    <div className="measure-container">
      <div className="step-label">Step 5 of 5</div>

      <div className="measure-card">
        <div className="measure-icon">📏</div>

        <h2 className="measure-title">Body Measurements</h2>
        <p className="measure-subtitle">
          Please provide your measurements in inches for the perfect fit
        </p>

        <div className="measure-grid">
          <div>
            <label>Bust (inches)</label>
            <input
              type="text"
              name="bust"
              value={measurements.bust}
              onChange={handleChange}
              placeholder="28"
            />
          </div>

          <div>
            <label>Waist (inches)</label>
            <input
              type="text"
              name="waist"
              value={measurements.waist}
              onChange={handleChange}
              placeholder="32"
            />
          </div>

          <div>
            <label>Hips (inches)</label>
            <input
              type="text"
              name="hips"
              value={measurements.hips}
              onChange={handleChange}
              placeholder="36"
            />
          </div>

          <div>
            <label>Shoulder Width (inches)</label>
            <input
              type="text"
              name="shoulder"
              value={measurements.shoulder}
              onChange={handleChange}
              placeholder="14"
            />
          </div>

          <div>
            <label>Arm Length (inches)</label>
            <input
              type="text"
              name="arm"
              value={measurements.arm}
              onChange={handleChange}
              placeholder="23"
            />
          </div>

          <div>
            <label>Garment Length (inches)</label>
            <input
              type="text"
              name="length"
              value={measurements.length}
              onChange={handleChange}
              placeholder="45"
            />
          </div>
        </div>

        <div className="tips-box">
          <h4>Measurement Tips:</h4>
          <ul>
            <li>Use a flexible measuring tape</li>
            <li>Measure over light clothing</li>
            <li>Keep the tape snug but not tight</li>
            <li>Stand straight with arms at your sides</li>
          </ul>
        </div>

        <Link to="/checkout"className="cta">place-order→
        </Link>
      </div>
    </div>
  );
}
