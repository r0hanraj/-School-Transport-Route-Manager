import { useState } from "react";
import Navbar from "../components/Navbar";

function DelayAlert() {
  const [busNumber, setBusNumber] = useState("");
  const [delayTime, setDelayTime] = useState("");

  const [alerts, setAlerts] = useState([]);

  const createAlert = () => {
    if (!busNumber || !delayTime) {
      alert("Fill all fields");
      return;
    }

    setAlerts([
      ...alerts,
      {
        busNumber,
        delayTime,
      },
    ]);

    setBusNumber("");
    setDelayTime("");
  };

  return (
    <>
      <Navbar />

      <div
  style={{
    padding: "20px",
    marginTop: "80px"
  }}
>
        <h1>Delay Alert</h1>

        <input
          type="text"
          placeholder="Bus Number"
          value={busNumber}
          onChange={(e) => setBusNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Delay Time (Minutes)"
          value={delayTime}
          onChange={(e) => setDelayTime(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button onClick={createAlert}>
          Create Alert
        </button>

        <h2>Delay Alert Records</h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Delay Time</th>
            </tr>
          </thead>

          <tbody>
            {alerts.map((item, index) => (
              <tr key={index}>
                <td>{item.busNumber}</td>
                <td>{item.delayTime} Minutes</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DelayAlert;