# 🌤️ Clario – Productivity Management System using MongoDB
<table>
  <tr>
    <td>
      <img src="FRONTEND/assets/App%20logo.jpg" alt="Clario App Logo" width="140">
    </td>
    <td style="padding-left:15px; vertical-align:top;">
      <img src="FRONTEND/assets/website%20logo.jpg" alt="Clario Website Logo" width="100"><br>
      Full-Stack Productivity Dashboard with MongoDB Database Connectivity for managing tasks, events, and user data<br>
      👩‍💻 By Lavanya
    </td>
  </tr>
</table>

---

## 🧠 The Problem We're Solving
In today’s fast-paced world, individuals often struggle to stay organized, maintain emotional balance, and keep track of personal growth. Juggling tasks, moods, and daily plans can feel overwhelming without a centralized system.

Clario solves this by offering a sleek, responsive, all-in-one dashboard that helps you:
- ✅ Stay on top of tasks and events
- 😊 Track moods and emotional well-being
- 🔔 Set smart reminders to stay focused
- 🌤️ Plan ahead with live weather updates
- 📊 Visualize your habits and productivity trends

---

## 🌟 Key Highlights

- 📅 **Smart Calendar** – Organize and view daily events  
- ✅ **Task Manager** – Add, complete, and filter tasks  
- ⏰ **Reminders** – Ringing alerts with visual cue (bell) and online sounds  
- 📝 **Sticky Notes** – Drag and drop idea pads  
- 😊 **Mood Tracker** – Log feelings with emoji & notes  
- 📊 **Data Visualization** – Analyze habits, moods, and task stats  
- 🌤️ **Live Weather** – Auto or manual location-based weather insights  
- 🔐 **Authentication** – Secure sign-up/login using JWT  
- 🎨 **Theme Toggle** – Light and Dark mode  
- 📱 **Responsive UI** – Works beautifully across devices  
- 💾 **Data Export / Reset** – Backup or clean with one click  

---

## 🌐 Live Demo



Check out Clario in action:

- [**Frontend (Live):**](https://lavu-create.github.io/Clario/FRONTEND/)  
- [**Backend (API):**](https://clario-dataengineering.onrender.com/)

> This deployed backend is connected to MongoDB Atlas and reflects the latest database-integrated version of the project.

---

## 💡 Why It Matters

- Clario helps you take control of your day and well-being by:
- Creating daily structure and mental clarity
- Supporting smart planning with weather insights
- Building emotional awareness through mood tracking
- Encouraging productive habits with visual data  

---

## 🧰 Tech Stack

| Layer              | Technologies                                       | Purpose                                 |
|--------------------|----------------------------------------------------|-----------------------------------------|
| Frontend           | HTML, CSS, JavaScript                              | Responsive layout, various themes       |
| Backend            | Node.js, Express.js                                | REST APIs, JWT protected routes         |
| Authentication     | JWT, bcrypt                                        | Password hashing and session management |
| Database           | MongoDB Atlas (Primary Database using Mongoose)    | User data, tasks, events, notes, and productivity logs|
| Charts & Analytics | Chart.js                                           | Visualizing moods, tasks, events        |
| Notifications      | Web Audio API                                      | Online notification sounds              |
| Weather            | OpenWeatherMap API                                 | Auto/manual location updates            |
| Deployment         | GitHub Pages(frontend) + Render(backend)           | Fully hosted, live updates              |

---

## 🔌 Database Connectivity
This project uses MongoDB Atlas as a cloud database.
- Connected using Mongoose in Node.js backend
- Connection string stored securely in .env file
- Backend establishes connection on server start

This ensures proper database connectivity by enabling real-time data storage and retrieval through backend APIs.

### Testing
APIs were tested using tools like curl/Postman to verify successful data insertion and retrieval from MongoDB.

---

## Data Flow: 
Frontend → Backend (Express API) → MongoDB Atlas

## Supported Operations:
- Create (Register user, add tasks/events)
- Read (Fetch user data, tasks, notes)
- Update (Modify tasks/events)
- Delete (Remove entries)

---

## 🚀 Getting Started

### 🖥️ Frontend
```bash
cd CLARIO/FRONTEND
# Open index.html directly in your browser OR
# Start a local HTTP server for full JS features (optional):
# python -m http.server 5500
```

### 🔧 Backend
```bash
cd CLARIO-BACKEND
npm install                 # Install dependencies
node backend/server.js      # Start backend server
```

Backend runs at: `http://localhost:5050`

---

## 🔐 Auth Flow

1. User signs up with email + password.
2. Password is hashed securely using bcrypt.
3. On login, a JWT token is issued.
4. Protected routes require a valid token.
5. Token is stored in localStorage for session persistence.  

---

## 📊 Data Visualization

Interactive charts to display:

- Task completion rates  
- Emoji-based mood trends  
- Event frequency and productivity spikes  

---

## 📁 Project Structure

```
Clario/  
├── CLARIO-BACKEND/        → Express APIs and server logic
│   └── backend/           → Signup/Login, JWT handling
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── utils/
├── DATA-VIZUALIZATION/    → Mood & task analytics (Charts)
├── FRONTEND/              → Complete UI (HTML, CSS, JS)
│   └── assets/            → Icons, sounds, images (used in frontend)  
└── README.md              → Project overview and documentation

```

---

## 🌱 Git Workflow

```bash
git clone https://github.com/lavu-create/Clario-DataEngineering.git  
cd clario  
git checkout -b feature/your-feature-name  
# Make changes  
git add .  
git commit -m "Added new feature"  
git push origin feature/your-feature-name
```

---

## 🛠️ Future Enhancements

- 🎙️ Voice-based reminders  
- 🧠 AI-powered mood predictions 
- 👥 Shared calendar sync
- 📲 Mobile app (React Native / Flutter)
- 🧭 PWA support (offline-first)

---

> Clario isn’t just a productivity tool — it’s your personal space to stay organized, motivated, and mindful.
> Thoughtfully crafted. Purposefully built. ✨