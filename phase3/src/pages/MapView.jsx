import Navbar from "../components/Navbar";

function MapView() {
  return (
    <>
      <Navbar />

      <div 
  style={{
    padding: "20px",
    marginTop: "80px"
  }}
>
        <h1>Map View</h1>

        <iframe
          title="map"
          width="100%"
          height="500"
          src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </>
  );
}

export default MapView;