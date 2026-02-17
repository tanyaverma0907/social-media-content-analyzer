# ContentPulse – Social Media Content Analyzer

ContentPulse is a full-stack web application that analyzes social media content and provides AI-powered engagement insights, performance metrics, and improvement suggestions.
Built using the MERN stack with a modern SaaS-style UI.
---

## Features

- Upload PDF content
- AI-based engagement score calculation
- Word count & hashtag analysis
- Smart improvement suggestions
- Extracted text preview
- Beautiful SaaS UI with smooth scrolling
- Real-time dashboard updates
- Drag & Drop file upload support

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- Multer (File Upload)
- PDF Parser

---

## Project Structure

```
SocialMediaContentAnalyzer/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/SocialMediaContentAnalyzer.git
```

---

### 2️.  Install dependencies

#### Frontend
```
cd client
npm install
```

#### Backend
```
cd server
npm install
```

---

### 3. Run the project

#### Start backend
```
cd server
node server.js
```

#### Start frontend
```
cd client
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

Backend runs on:
```
http://localhost:5000
```

---

## How It Works

1. User uploads a PDF file.
2. Backend extracts text from PDF.
3. Text is analyzed for:
   - Word count
   - Hashtag count
   - Engagement scoring
4. Dashboard displays metrics and suggestions instantly.

---

## Future Improvements

- User authentication
- Save upload history
- Advanced NLP sentiment analysis
- Deployment (Vercel + Render)
- Dark mode toggle

---

## Author

**Tanya Verma**  
B.Tech Computer Science  
Full Stack MERN Developer  


