📚 BookMart App

A simple and elegant React-based bookmarking application for book buyers and sellers. Users can register as a buyer or seller, login, and access role-specific dashboards. Buyers can view available books, while sellers can add new books with cover images.

⸻

🔧 Features
	•	🏠 Beautiful landing page with a “Get Started” button.
	•	🔐 Login/Registration with user role selection (Buyer/Seller).
	•	🧠 Form validation (prevent empty fields).
	•	💾 Temporary session using localStorage.
	•	↪️ Auto redirect to dashboard based on user role.
	•	📘 Buyer Dashboard: View available books.
	•	📗 Seller Dashboard: Add new books and view list.
	•	🚪 Logout functionality.

⸻

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/your-username/bookmart-app.git
cd bookmart-app

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev


⸻

🗂️ Project Structure

bookmart-app/
├── public/
├── src/
│   ├── App.jsx              // Landing Page
│   ├── main.jsx             // Entry Point with Router
│   ├── Login.jsx            // Login/Registration Page
│   ├── BuyerDashboard.jsx   // Buyer Dashboard
│   ├── SellerDashboard.jsx  // Seller Dashboard
│   └── index.css            // Optional (global CSS)
├── package.json
└── README.md


⸻

📸 Preview

Landing Page	Login Page	Buyer Dashboard	Seller Dashboard
			


⸻

🛠 Tech Stack
	•	React
	•	React Router DOM
	•	Vite
	•	Vanilla CSS / Inline Styling
	•	localStorage (for temporary session)