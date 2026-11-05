
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>GYM<span>HUB</span></h3>
          <p>Your fitness, our management.</p>
        </div>

        <p>
          © {new Date().getFullYear()} Gym Management System.
          All Rights Reserved.
        </p>

        <p>Developed by Pema Tshewang Norbu</p>
      </div>
    </footer>
  );
}

export default Footer;
