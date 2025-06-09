import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #dbeafe, #fef9c3)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "60px 40px",
          borderRadius: "16px",
          boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
          maxWidth: "480px",
          width: "90%",
        }}
      >
        <h1
          style={{ fontSize: "2.5rem", marginBottom: "12px", color: "#1e3a8a" }}
        >
          📚 BookMart App
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#374151", marginBottom: "24px" }}>
          Save your favorite links in one place, forever.
        </p>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;