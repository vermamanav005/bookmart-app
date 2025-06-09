import { useNavigate } from "react-router-dom";

const sampleBooks = [
  {
    id: 1,
    title: "JavaScript Basics",
    img: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    title: "Learn React",
    img: "https://images-na.ssl-images-amazon.com/images/I/71Q6eEolGaL.jpg",
  },
  {
    id: 3,
    title: "CSS Secrets",
    img: "https://images-na.ssl-images-amazon.com/images/I/51oHUv4t2PL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

function BuyerDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("bookmartUser");
    navigate("/");
  }

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px 20px",
        background: "linear-gradient(to bottom, #e0f2fe, #f9fafb)",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          padding: "0 10px",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", color: "#1e3a8a" }}>
          📘 Buyer Dashboard
        </h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#b91c1c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc2626")}
        >
          Logout
        </button>
      </header>

      <h2
        style={{
          textAlign: "center",
          color: "#111827",
          fontSize: "1.6rem",
          marginBottom: "25px",
        }}
      >
        Explore Available Books
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {sampleBooks.map((book) => (
          <div
            key={book.id}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)",
              padding: "16px",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 15px rgba(0, 0, 0, 0.08)";
            }}
          >
            <img
              src={book.img}
              alt={book.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <p style={{ marginTop: "12px", fontWeight: "600", fontSize: "1rem" }}>
              {book.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;