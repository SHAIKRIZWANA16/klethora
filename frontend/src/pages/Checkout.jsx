import { Link } from "react-router-dom";
export default function Check({ onPay }) {
  const order = {
    product: "Custom Tailored Dress",
    base: 1499,
    stitching: 500,
    delivery: 99,
  };

  const total = order.base + order.stitching + order.delivery;

  return (
    <div className="page-container">
      <div className="card checkout-card">
        <div className="page-icon">🧾</div>
        <h2 className="page-title">Order Summary</h2>
        <p className="page-subtitle">Review your order details</p>

        <div className="summary-box">
          <div className="row">
            <span>{order.product}</span>
            <span>₹{order.base}</span>
          </div>
          <div className="row">
            <span>Stitching Charges</span>
            <span>₹{order.stitching}</span>
          </div>
          <div className="row">
            <span>Delivery</span>
            <span>₹{order.delivery}</span>
          </div>

          <hr />

          <div className="row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
            <Link to="/personal-details">Enter Personal Details →</Link>
        </div>
      </div>
  );
}
