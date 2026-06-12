import Navbar from "../components/Navbar";

function ExportPage() {
  return (
    <div className="page">
      <Navbar />

      <div className="card">
        <h2>Export Reports</h2>

        <button>Export CSV</button>

        <br /><br />

        <button>Download PDF</button>
      </div>
    </div>
  );
}

export default ExportPage;