# 🤖 AI-Interview-Agent

AI-Interview-Agent is an **AI-powered interview preparation platform** designed to help users practice mock interviews, improve communication skills, strengthen technical knowledge, and build professional confidence.

The platform simulates **real interview environments** with AI-generated questions, adaptive difficulty, voice interaction, and detailed performance analysis.

---

## 🚀 Features

### 🧠 AI-Powered Smart Interview

Practice role-based mock interviews powered by AI with dynamic follow-up questions and adaptive difficulty.

### 🎯 Role & Experience Selection

Users can choose their **job role and experience level**, allowing AI to generate relevant interview questions.

### 🎤 Smart Voice Interview

Simulates real interviews with **voice interaction** and dynamic follow-up questions based on responses.

### ⏱ Timer Based Simulation

Real interview pressure with **time-based question answering**.

---

## 📊 Advanced AI Capabilities

### 📈 AI Answer Evaluation

AI evaluates answers based on:

- Communication
- Technical correctness
- Confidence
- Overall clarity

### 📄 Resume-Based Interview

Upload a resume and receive **project-specific interview questions**.

### 📑 Downloadable PDF Report

Get detailed reports including:

- Strengths
- Weaknesses
- Suggested improvements

### 📊 History & Analytics

Track performance with:

- Interview history
- Score analysis
- Topic-level insights

---

## 🎭 Interview Modes

### HR Interview Mode

Focuses on:

- Behavioral questions
- Communication skills
- Personality evaluation

### Technical Interview Mode

Focuses on:

- Technical knowledge
- Role-based coding and conceptual questions

### Confidence Detection

Basic voice-based tone analysis to evaluate confidence.

### Credits System

Premium interviews are unlocked through a **credit-based system**.

---

## 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Framer Motion
- Redux Toolkit
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### AI Integration

- OpenRouter API (LLM based question generation and evaluation)

### Payment Integration

- Razorpay

---

## 📂 Project Structure

```javascript
AI-Interview-Agent
│
├── client/ # React Frontend
│ ├── components
│ ├── pages
│ ├── redux
│ └── assets
│
├── server/ # Node.js Backend
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── middlewares
│ └── services
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/taniya23y/AI-Interview-Agent.git
cd AI-Interview-Agent
```

#### 2️⃣ 2️⃣ Install Dependencies

- Frontend

```javascript
cd client
npm install
```

- Backend

```javascript
cd server
npm install
```

#### 3️⃣ Setup Environment Variables

- Create .env in server folder

```javascript
PORT = 8000;
MONGODB_URL = your_mongodb_url;
JWT_SECRET = your_jwt_secret;
OPENROUTER_API_KEY = your_ai_api_key;

RAZORPAY_KEY_ID = your_key;
RAZORPAY_KEY_SECRET = your_secret;
```

#### 4️⃣ Run the Project

- Backend

```javascript
cd server
npm run dev
```

- Frontend

```javascript
cd client
npm run dev
```

### 📸 Application Flow

- User selects role and experience level
- AI generates interview questions
- User answers through voice or text
- AI evaluates responses
- Performance report is generated
- User can track progress through history & analytics

### 🎯 Future Improvements

- Real-time speech analysis
- Video interview simulation
- AI interviewer avatar
- Team/company mock interview simulation
- Advanced analytics dashboard

---

### 👩‍💻 Author

Taniya Yadav

Full Stack MERN Developer passionate about building AI-powered web applications that solve real-world problems.

---
