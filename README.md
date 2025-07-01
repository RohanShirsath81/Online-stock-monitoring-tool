📈 Online Stock Monitoring Tool
An interactive, real-time stock monitoring web application that allows users to view, track, and manage stock holdings and positions with dynamic visualizations and a user-friendly dashboard.


✨ Features
Real-time display of stock holdings and positions

Add new orders via the dashboard

Secure backend API integration

Interactive charts using Chart.js



Responsive, multi-page frontend with:

Home
Signup
About
Product
Pricing
Support



🛠️ Tech Stack
Frontend: React.js, React Router DOM, Axios, MUI (Material UI)

Dashboard: React.js, Chart.js, Axios, MUI

Backend: Node.js, Express.js, MongoDB Atlas, Mongoose, Passport.js

Database: MongoDB Atlas (Cloud)



🔗 Project Modules
1. Frontend (localhost:3000)
Landing pages with navigation and routing

User signup and information pages

2. Dashboard (localhost:3001)
Stock visualization

Live data interaction and order management

3. Backend (localhost:3002)
REST API for stocks, positions, and orders

Connected to MongoDB Atlas for data storage



⚙️ Installation and Setup
Prerequisites:
Node.js

MongoDB Atlas account

NPM or Yarn

1. Clone the repository
bash
Copy
Edit
git clone <your-repo-link>
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
# Create a .env file and add:
# MONGO_URL=<your-mongodb-atlas-uri>
npm start
3. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
4. Setup Dashboard
bash
Copy
Edit
cd dashboard
npm install
npm start



📊 API Endpoints
Method	Endpoint	Description
GET	/allHoldings	Fetch all stock holdings
GET	/allPositions	Fetch all stock positions
POST	/newOrder	Place a new stock order



👨‍💻 Author
Rohan Shirsath
Email: officialrohan.genai@gmail.com

