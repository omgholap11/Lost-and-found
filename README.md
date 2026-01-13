# 🦅 Lost & Found System

![Live Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A seamless digital platform designed to bridge the gap between lost items and their rightful owners within an educational campus. Streamlines the process of reporting, tracking, and claiming lost belongings with an intuitive interface and automated verification.

---

## 🚀 Live Demo

**Frontend (Vercel):** [https://lost-and-found-delta-seven.vercel.app/](https://lost-and-found-delta-seven.vercel.app/)  
**Backend (Render):** *Hosted API*

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Deployment
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

---

## ✨ Features

-   🕵️ **Easy Reporting:** Quickly report lost or found items with image uploads.
-   🔐 **Secure Claims:** Automated verification process for claiming items.
-   🛡️ **Admin/Guard Panel:** Dedicated interface for security personnel to manage inventory.
-   📧 **Smart Notifications:** Automated email alerts for claim status and expiry.
-   📱 **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
-   ☁️ **Cloud Storage:** Integrated with Cloudinary for secure image hosting.

---

## 📂 Project Structure

```bash
📦 Lost-And-Found-System
 ┣ 📂 client                 # Frontend Application (React)
 ┃ ┣ 📂 public               # Static assets
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components         # Reusable UI components
 ┃ ┃ ┣ 📂 pages              # Main page views
 ┃ ┃ ┣ 📂 context            # Global state management
 ┃ ┃ ┗ 📜 App.js             # Main entry point
 ┃ ┗ 📜 package.json         # Frontend dependencies
 ┣ 📂 server                 # Backend API (Node/Express)
 ┃ ┣ 📂 config               # Configuration files
 ┃ ┣ 📂 controllers          # Request logic
 ┃ ┣ 📂 models               # Mongoose database models
 ┃ ┣ 📂 routes               # API endpoints
 ┃ ┗ 📜 app.js               # Server entry point
 ┗ 📜 README.md              # Project documentation
```

---

## ⚡ Getting Started Locally

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js (v14+)
*   MongoDB (Local or Atlas URL)
*   npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/lost-and-found.git
cd lost-and-found
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
FROM_EMAIL=noreply@lostandfound.com
```

Start the Server:

```bash
npm start
# Server runs on http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal configuration:

```bash
cd client
npm install
```

Create a `.env.local` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the React App:

```bash
npm start
# App runs on http://localhost:3000
```

---

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

<p align="center">
  Made with ❤️ for the Community
</p>
