import { useState } from "react";
import Navbar from "../components/Navbar";

function RouteBuilder() {
  const [routeName, setRouteName] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [routes, setRoutes] = useState([]);

  const saveRoute = () => {
    const newRoute = {
      routeName,
      busNumber,
      pickup,
      drop,
    };

    setRoutes([...routes, newRoute]);

    setRouteName("");
    setBusNumber("");
    setPickup("");
    setDrop("");
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
        <h1>Route Builder</h1>

        <input
          placeholder="Route Name"
          value={routeName}
          onChange={(e) => setRouteName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Bus Number"
          value={busNumber}
          onChange={(e) => setBusNumber(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Pickup Point"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Drop Point"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />

        <br /><br />

        <button onClick={saveRoute}>Save Route</button>

        <h2>Saved Routes</h2>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Route</th>
              <th>Bus</th>
              <th>Pickup</th>
              <th>Drop</th>
            </tr>
          </thead>

          <tbody>
            {routes.map((route, index) => (
              <tr key={index}>
                <td>{route.routeName}</td>
                <td>{route.busNumber}</td>
                <td>{route.pickup}</td>
                <td>{route.drop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RouteBuilder;