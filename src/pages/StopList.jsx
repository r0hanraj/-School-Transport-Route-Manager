import { useState } from "react";
import Navbar from "../components/Navbar";

function StopList() {
  const [stopName, setStopName] = useState("");
  const [address, setAddress] = useState("");

  const [stops, setStops] = useState([
    {
      name: "School Main Gate",
      address: "Miyapur, Hyderabad",
    },
  ]);

  const addStop = () => {
    if (!stopName || !address) {
      alert("Enter Stop Name and Address");
      return;
    }

    setStops([
      ...stops,
      {
        name: stopName,
        address: address,
      },
    ]);

    setStopName("");
    setAddress("");
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
        <h1>Stop List</h1>

        <input
          type="text"
          placeholder="Stop Name"
          value={stopName}
          onChange={(e) => setStopName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <button
          onClick={addStop}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Stop
        </button>

        <table
          style={{
            width: "100%",
            marginTop: "30px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Stop Name
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Address
              </th>
            </tr>
          </thead>

          <tbody>
            {stops.map((stop, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {stop.name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {stop.address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StopList;