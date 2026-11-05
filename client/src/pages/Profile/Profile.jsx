
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {
  return (
    <div className="profile-page">
      <PageTitle
        title="My Profile"
        description="View your account information."
      />

      <Card title="Personal Information">
        <div className="profile-details">
          <p><strong>Name:</strong> Pema Tshewang Norbu</p>
          <p><strong>Email:</strong> pema@example.com</p>
          <p><strong>Role:</strong> Administrator</p>
          <p><strong>Account Status:</strong> Active</p>
        </div>

        <Button
          text="Edit Profile"
          onClick={() => alert("Profile editing will be implemented later.")}
        />
      </Card>
    </div>
  );
}

export default Profile;
