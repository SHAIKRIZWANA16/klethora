import { Link } from "react-router-dom";

export default function PersonalDetails() {


  return (
    <div className="page-container">
      <div className="card personal-card">
        <div className="page-icon">👤</div>

        <h2 className="page-title">Personal Details</h2>
        <p className="page-subtitle">
          Please provide your contact and shipping information
        </p>

        <form className="personal-form">
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your full name" />

          <div className="form-row">
            <div>
              <label>Email Address *</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Phone Number *</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>

          <label>Address *</label>
          <input type="text" placeholder="Enter full address" />

          <div className="form-row">
            <div>
              <label>City *</label>
              <input type="text" placeholder="City" />
            </div>
            <div>
              <label>ZIP Code *</label>
              <input type="text" placeholder="ZIP Code" />
            </div>
          </div>

          <label>Special Requests (Optional)</label>
          <textarea placeholder="Any special requirements or notes..."></textarea>

          <div className="info-box">
            <strong>Delivery Time:</strong> Your custom clothing will be ready
            in 2–3 weeks. We'll send updates via email and SMS.
          </div>

          <Link to="/order-success">Place Order →</Link>
        </form>
      
      </div>
    </div>
  );
}
