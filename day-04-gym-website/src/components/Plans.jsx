import "./Plans.css";

function Plans() {
  return (
    <section className="plans">
      <h2 className="plans-title">Membership Plans</h2>

      <div className="plans-wrapper">
        {/* LEFT CARD */}
        <div className="plan-card">
          <h3>Monthly Plan</h3>
          <p className="price">₹999</p>
          <p>Access to all machines</p>
          <p>Basic guidance</p>
          <button>Join Now</button>
        </div>

        {/* MIDDLE CARD - HIGHLIGHTED */}
        <div className="plan-card highlight">
          <h3>Quarterly Plan</h3>
          <p className="price">₹2499</p>
          <p>All machines access</p>
          <p>Trainer support</p>
          <button>Join Now</button>
        </div>

        {/* RIGHT CARD */}
        <div className="plan-card">
          <h3>Yearly Plan</h3>
          <p className="price">₹8999</p>
          <p>Full access</p>
          <p>Premium training</p>
          <button>Join Now</button>
        </div>
      </div>
    </section>
  );
}

export default Plans;
