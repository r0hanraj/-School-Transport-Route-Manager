import { useState } from "react";
import Navbar from "../components/Navbar";

function DriverProfile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [drivers, setDrivers] = useState([]);

  const addDriver = () => {
    setDrivers([
      ...drivers,
      {
        name,
        phone,
      },
    ]);

    setName("");
    setPhone("");
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
        <h1>Driver Profile</h1>

        <input
          placeholder="Driver Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br /><br />

        <button onClick={addDriver}>
          Add Driver
        </button>

        <h2>Drivers List</h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index}>
                <td>{driver.name}</td>
                <td>{driver.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DriverProfile;