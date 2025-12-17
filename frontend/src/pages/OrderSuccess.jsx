import { useNavigate } from "react-router-dom";
export default function OrderSuccess() {
  const navigate = useNavigate();
  return (
    <div className="success-page-wrapper">
      <div className="success-main-card">
        {/* Success Icon */}
        <div className="success-check">
          ✓
        </div>

        <h1 className="success-title">Thank You!</h1>
        <p className="success-subtitle">
          Your custom clothing order has been submitted successfully
        </p>

        {/* Order Confirmation */}
        <div className="confirmation-card">
          <h3>❤️ Order Confirmation</h3>
          <p>
            We've received your order and will begin crafting your custom
            clothing immediately. You'll receive a confirmation email with
            your order details shortly.
          </p>

          <div className="order-meta">
            <p><strong>Order ID:</strong> BC-VDGJVN9YT</p>
            <p><strong>Estimated Delivery:</strong> 2–3 weeks</p>
          </div>
        </div>

        {/* Timeline */}
        <h3 className="next-title">What happens next?</h3>

        <div className="timeline">
          <div className="timeline-card blue">
            <h4>Week 1</h4>
            <p>Pattern creation and fabric preparation</p>
          </div>

          <div className="timeline-card purple">
            <h4>Week 2</h4>
            <p>Cutting and initial stitching</p>
          </div>

          <div className="timeline-card green">
            <h4>Week 3</h4>
            <p>Final touches and quality check</p>
          </div>
        </div>

        <hr className="divider" />

        {/* Help */}
        <div className="help-section">
          <h4>Need Help?</h4>
          <p>📧 support@bellacouture.com</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>

        <button className="return home" onClick={() => navigate("/")}>
  ← Return home
</button>
      </div>
    </div>
  );
}
