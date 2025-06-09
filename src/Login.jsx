import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: "buyer",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Store user data in localStorage (temporary)
    localStorage.setItem("bookmartUser", JSON.stringify(formData));

    // Redirect based on user type
    if (formData.userType === "buyer") {
      navigate("/buyer-dashboard");
    } else {
      navigate("/seller-dashboard");
    }
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #f9fafb, #e0f2fe)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#2563eb" }}>Login / Register</h2>

        <label style={{ display: "block", marginBottom: "8px" }}>
          User Type:
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              marginBottom: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "8px" }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              marginBottom: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "8px" }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "4px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        {error && (
          <p style={{ color: "red", marginBottom: "16px", fontWeight: "bold" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Login / Register
        </button>
      </form>
    </div>
  );
}

export default Login;