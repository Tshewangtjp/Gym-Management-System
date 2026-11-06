
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    alert("Login interface is working!");
  };

  return (
    <div className="login-page">
      <PageTitle
  title="Login"
  subtitle="Access your GymHub account."
/>

      <Card
        title="Welcome Back"
        description="Enter your account details to continue."
      >
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <Button
            text="Login"
            type="submit"
          />
        </form>
      </Card>
    </div>
  );
}

export default Login;
