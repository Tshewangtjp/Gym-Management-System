
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">WELCOME TO GYMHUB</span>

          <h1>
            Transform Your Gym Into a
            <span> Smarter Fitness Hub</span>
          </h1>

          <p>
            Manage members, trainers, memberships, attendance
            and payments in one convenient platform.
          </p>

          <div className="hero-buttons">
            <Button
              text="Get Started"
              onClick={() => navigate("/login")}
            />

            <Button
              text="View Dashboard"
              variant="outline"
              onClick={() => navigate("/dashboard")}
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <PageTitle
          title="Our Features"
          description="Everything you need to manage your gym efficiently."
        />

        <div className="feature-grid">
          <Card title="Member Management"
            description="Add, update and manage gym members easily." />

          <Card title="Trainer Management"
            description="Organize trainers and assign members." />

          <Card title="Membership Plans"
            description="Create and manage gym membership plans." />

          <Card title="Attendance Tracking"
            description="Keep track of daily member attendance." />

          <Card title="Payment Management"
            description="Manage payments and membership renewals." />

          <Card title="Reports & Analytics"
            description="View gym activity and performance reports." />
        </div>
      </section>
    </div>
  );
}

export default Home;
