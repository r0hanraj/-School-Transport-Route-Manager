import Navbar from "../components/Navbar";

function History() {
  return (
    <div className="page">
      <Navbar />

      <div className="card">
        <h2>Trip History</h2>

        <table width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Bus</th>
              <th>Route</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>26-05-2026</td>
              <td>Bus-12</td>
              <td>Main Gate</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;