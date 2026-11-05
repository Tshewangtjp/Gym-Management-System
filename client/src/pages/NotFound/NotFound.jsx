
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <Card title="404 - Page Not Found">
        <PageTitle
          title="Oops! Page Not Found"
          description="The page you are looking for does not exist."
        />

        <Button
          text="Back to Home"
          onClick={() => navigate("/")}
        />
      </Card>
    </div>
  );
}

export default NotFound;
