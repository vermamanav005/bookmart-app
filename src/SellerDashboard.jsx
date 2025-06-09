import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SellerDashboard() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Node.js Guide",
      img: "https://m.media-amazon.com/images/I/51Cj76gQz-L._SY342_.jpg",
    },
    {
      id: 2,
      title: "MongoDB in Action",
      img: "https://m.media-amazon.com/images/I/71y7aVJXwUL._SY466_.jpg",
    },
  ]);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  function handleLogout() {
    localStorage.removeItem("bookmartUser");
    navigate("/");
  }

  function handleAddBook(e) {
    e.preventDefault();
    if (!title || !img) return alert("Please fill both fields.");
    const newBook = {
      id: Date.now(),
      title,
      img,
    };
    setBooks([newBook, ...books]);
    setTitle("");
    setImg("");
  }

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px 20px",
        background: "linear-gradient(to bottom, #e0f7fa, #f1f5f9)",
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
        <h1 style={{ fontSize: "2.2rem", color: "#047857" }}>
          📗 Seller Dashboard
        </h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#ef4444",
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
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
        >
          Logout
        </button>
      </header>

      <section
        style={{
          maxWidth: "700px",
          margin: "0 auto 40px",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "#111827" }}>
          Add a New Book
        </h2>
        <form onSubmit={handleAddBook} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              border: "none",
              backgroundColor: "#10b981",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Add Book
          </button>
        </form>
      </section>

      <h2
        style={{
          textAlign: "center",
          color: "#1f2937",
          fontSize: "1.6rem",
          marginBottom: "25px",
        }}
      >
        Your Books
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
        {books.map((book) => (
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

export default SellerDashboard;