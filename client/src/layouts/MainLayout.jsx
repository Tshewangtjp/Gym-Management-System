
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />

      <main className="main-content">
        {children || (
          <h2>Welcome to Gym Management System</h2>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
