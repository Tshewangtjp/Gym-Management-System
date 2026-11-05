
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <PageTitle
        title="Dashboard"
        description="Overview of your gym management activities."
      />

      <div className="dashboard-grid">
        <Card title="Total Members" description="Registered gym members">
          <h2 className="dashboard-number">250</h2>
        </Card>

        <Card title="Total Trainers" description="Available gym trainers">
          <h2 className="dashboard-number">15</h2>
        </Card>

        <Card title="Active Memberships" description="Currently active plans">
          <h2 className="dashboard-number">180</h2>
        </Card>

        <Card title="Monthly Revenue" description="Illustrative revenue figure">
          <h2 className="dashboard-number">₹45,000</h2>
        </Card>
      </div>

      <Card
        title="Welcome to GymHub"
        description="Your gym management dashboard is ready."
      >
        <p>
          Use the navigation menu to explore the different
          sections of the application.
        </p>
      </Card>
    </div>
  );
}

export default Dashboard;
