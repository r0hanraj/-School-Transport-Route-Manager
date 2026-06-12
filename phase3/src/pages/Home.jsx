import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            paddingTop: "220px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
            }}
          >
            Smart School Transport Management System
          </h1>

          <p
            style={{
              fontSize: "28px",
              marginTop: "20px",
            }}
          >
            Safe • Secure • Real-Time Transportation Monitoring
          </p>

          <button
            onClick={() => navigate("/login")}
            style={{
              marginTop: "25px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;