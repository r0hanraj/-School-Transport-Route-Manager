import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    padding: "15px",
    zIndex: "1000",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    backgroundColor: "#2563eb",
    padding: "10px 14px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>

      <Link to="/login" style={linkStyle}>Login</Link>

      <Link to="/signup" style={linkStyle}>Sign Up</Link>

      <Link to="/routebuilder" style={linkStyle}>Route Builder</Link>

      <Link to="/stoplist" style={linkStyle}>Stop List</Link>

      <Link to="/studentassign" style={linkStyle}>Student Assign</Link>

      <Link to="/driverprofile" style={linkStyle}>Driver Profile</Link>

      <Link to="/mapview" style={linkStyle}>Map View</Link>

      <Link to="/parentnotify" style={linkStyle}>Parent Notify</Link>

      <Link to="/delayalert" style={linkStyle}>Delay Alert</Link>

      <Link to="/history" style={linkStyle}>History</Link>

      <Link to="/export" style={linkStyle}>Export</Link>

      <Link to="/adminpanel" style={linkStyle}>Admin Panel</Link>
    </nav>
  );
}

export default Navbar;