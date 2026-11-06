
import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";


function Dashboard() {
  // Exercise 3: State
  const [count, setCount] = useState(0);

  // Exercise 5: User input
  const [userName, setUserName] = useState("");

  // Exercise 6: Conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="dashboard-page">
      <PageTitle
        title="Dashboard"
        subtitle="Welcome to your Gym Management Dashboard."
      />

      <div className="dashboard-grid">

        {/* Counter */}
        <Card
          title="Interactive Counter"
          description="Test React State and button events."
        >
          <h2>{count}</h2>
          <p>Total button clicks: {count}</p>

          <Button onClick={() => setCount(count + 1)}>
            Increase Count
          </Button>

          <Button
            variant="outline"
            onClick={() => setCount(0)}
          >
            Reset Count
          </Button>
        </Card>

        {/* User Input */}
        <Card
          title="Dynamic User Input"
          description="Enter your name below."
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(event) =>
              setUserName(event.target.value)
            }
          />

          <p>
            Hello, {userName.trim() || "Guest"}!
          </p>
        </Card>

        {/* Conditional Rendering */}
        <Card
          title="Account Status"
          description="Test conditional rendering."
        >
          {isLoggedIn ? (
            <p>Welcome! You are logged in.</p>
          ) : (
            <p>Please log in to access your dashboard.</p>
          )}

          <Button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Card>

      </div>
    </div>
  );
}

export default Dashboard;
