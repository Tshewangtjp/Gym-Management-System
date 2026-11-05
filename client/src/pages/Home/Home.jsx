import "./Home.css";
function Home() {
  return (
    <main className="home-container">
      <div className="glass-card">
        <div className="home-icon">✦</div>

        <span className="welcome-label">
          YOUR FITNESS. YOUR CONTROL.
        </span>

        <h1>
          Welcome to <span>FitSphere.</span>
        </h1>

        <h2>Gym Management System</h2>

        <p>
          Manage your gym activities, members, memberships,
          and daily operations — all from one simple platform.
        </p>

        <div className="home-actions">
          <button className="primary-btn">
            Get Started <span>→</span>
          </button>
          <button className="secondary-btn">
            Explore Dashboard
          </button>
        </div>

        <div className="home-footer">
          <span>SMART MANAGEMENT</span>
          <span>•</span>
          <span>BETTER FITNESS</span>
        </div>
      </div>
    </main>
  );
}

export default Home;
