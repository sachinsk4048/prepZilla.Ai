<div align="center">

# prepZilla.Ai
An interview prepration web application 


_Built with the tools and technologies:_

<br/>

<!-- Tech Stack Badges -->
<img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/.ENV-yellow?style=for-the-badge&logo=dotenv&logoColor=black" />
<br/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />

</div>



## 📌 About the Project


**PrepZilla.AI** is an AI-driven web application designed to help students and job seekers prepare for technical interviews in a structured and personalized manner.  

The platform enables users to create job-specific interview sessions and generate AI-powered interview questions using Google’s Gemini API. All session data is securely stored and accessible through a personalized dashboard.

---

## ⚙️ Tech Stack

This project uses the following technologies:

- **Frontend**: React + Vite + Tailwind
- **Backend**: Express.js, Node.js
- **Database**: MongoDB via Mongoose
- **AI**: Gemini API
- **Authentication**: JSON Web Tokens (JWT)
---

## 🚀 Features

- 🔐 **Secure JWT Authentication**  
  Sign up or log in securely using JWT-based authentication to access your personalized dashboard.

- 📂 **Create Job-specific Interview Sessions**  
  Start a session tailored to a specific job role or skill set (e.g., Frontend Developer, Node.js, etc.).

- 🤖 **Generate AI-Powered Questions (Gemini API)**  
  Automatically generate high-quality, relevant interview questions using Google's Gemini model — including coding questions.

- 📌 **Pin Important Questions**  
  Mark key questions during the session to review or revise them later.

- 🧠 **Get Explanations for Questions**  
  Generate clear explanations for any question in the session using Gemini.

- 🔁 **Generate More Questions in Same Session**  
  Easily expand a session by generating more follow-up questions based on the same skill/topic.

- 📥 **Persistent Data Saving**  
  All questions, pins, and session details are automatically saved to your account.

- 🗑️ **Delete Entire Session**  
  Clean up your dashboard by deleting sessions you no longer need.

---

## 🛠️ Getting Started

### 🔧 Prerequisites

Before starting, make sure you have:

- Node.js & npm installed
- MongoDB running locally or Atlas URI
- Gemini API key in `.env`

---

### ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/Pyjavascript/InterviewPrepAi.git
cd prepZilla.Ai

# Install fronten
cd frontend
npm install
npm install react-router-dom react-hot-toast react-icons axios moment framer-motion react-markdown remark-gfm react-syntax-highlighter

# Install backend
cd ../backend
npm install



```

## 🔐 Environment Variables (`.env`)

Create a `.env` file inside the `backend/` folder and add the following variables:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=InterviewPrepAI
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET=your_jwt_secret_key_here
PORT=8000

```

### 📁 Project Structure
```
InterviewPrepAi/
│
├── frontend/            # React frontend (Vite + Tailwind)
│   └── src/             # Components, pages, services, etc.
│
├── backend/             # Express backend with Gemini + JWT
    ├── config/          # Database Setup
│   ├── controllers/     # API logic and handlers
│   ├── middleware/      # JWT auth, error handling
    ├── models/          # User,Session,Question model
│   ├── routes/          # Route definitions
    ├── utils/           # Gemini prompts
    ├── Server.js        # Server file
│   └── .env             # Environment variables (NOT committed to Git)
│
├── README.md

```


<h3 id="jwt">🔐 Getting the JWT Token</h3>

Make sure your **backend server is running** before accessing the login/register APIs.

---

#### ▶️ Step 1: Start the Backend Server

```bash
cd backend

# For development (auto restarts on file changes)
npm run dev

# Or for production
npm start
```

By default, the server runs at:  
**http://localhost:8000**

---

#### 📥 Step 2: Register a New User

**Endpoint:** `POST /api/auth/register`  
**Headers:** `Content-Type: application/json`

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "password": "yourPassword",
  "profileImageUrl": "optional-image-url"
}
```

---

#### 🔑 OR : Log In (if user have account)

**Endpoint:** `POST /api/auth/login`  
**Headers:** `Content-Type: application/json`

```json
{
  "email": "your@email.com",
  "password": "yourPassword"
}
```

---

#### ✅ Response on Success

```json
{
  "token": "your_jwt_token_here"
}
```

Use this token in the `Authorization` header for protected API routes:

```http
Authorization: Bearer your_jwt_token_here
```


✨ Once both the backend and frontend are running, open your browser and navigate to:
http://localhost:5173 — Your full-stack InterviewPrepAi app will be up and running!