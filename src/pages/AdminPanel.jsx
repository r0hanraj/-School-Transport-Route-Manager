import Navbar from "../components/Navbar";

function AdminPanel() {
  return (
    <div className="page">
      <Navbar />

      <div className="card">
        <h2>Admin Dashboard</h2>

        <p>Total Buses: 12</p>
        <p>Routes Active: 8</p>
        <p>Students Assigned: 320</p>
        <p>Pending Alerts: 2</p>
      </div>
    </div>
  );
}

export default AdminPanel;