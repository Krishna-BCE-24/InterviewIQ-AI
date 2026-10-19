# InterviewIQ.AI

**AI-Powered Mock Interview Platform**

**Live Website:** https://interviewiq-client-9ahc.onrender.com/

**GitHub Repository:** https://github.com/Krishna-BCE-24/InterviewIQ-AI

InterviewIQ.AI is a full-stack AI-powered mock interview platform designed to help students and job seekers prepare for technical and HR interviews. It provides personalized interview questions, resume-based preparation, voice-based interview simulation, and performance feedback to improve interview readiness.

## Features

- Google Authentication
- PDF Resume Analysis
- AI-Powered Personalized Interview Questions
- Technical and HR Interview Modes
- Voice-Based Interview Simulation
- Male and Female AI Interviewer Selection
- Interview Feedback and Performance Reports
- User Dashboard
- Credit-Based Interview System
- Razorpay Payment Integration
- Responsive User Interface

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, Vite, Tailwind CSS |
| State Management | Redux Toolkit |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Firebase Google Authentication, JWT |
| AI Integration | AI model API integration |
| Voice Features | Web Speech API |
| Payments | Razorpay |
| HTTP Requests | Axios |
| Deployment | Render |
| Version Control | Git and GitHub |

## Project Architecture

The application follows a client-server architecture.

1. **Frontend:** React provides the user interface, interview setup, voice interaction, and report views.
2. **Backend:** Express.js handles authentication, resume processing, interview generation, and application logic.
3. **Database:** MongoDB stores application data.
4. **AI Integration:** The backend uses an AI model API to support personalized interview preparation.
5. **External Services:** Firebase Authentication and Razorpay support authentication and payment workflows.

## Project Structure

```text
InterviewIQ-AI/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── utils/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

*Note: The directory structure above is illustrative. Update it to match the actual folders and files in the repository.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB Atlas account or a compatible MongoDB instance
- Firebase project configured for Google Authentication
- Required AI API credentials
- Razorpay credentials if using payment functionality

### 1. Clone the Repository

```bash
git clone https://github.com/Krishna-BCE-24/InterviewIQ-AI.git
cd InterviewIQ-AI
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory and configure the environment variables required by your backend.

Example:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add the other required AI, Firebase, and Razorpay environment variables according to your backend configuration.

Start the backend:

```bash
npm run dev
```

If your project uses a different port or start script, use the values configured in `server/package.json`.

### 3. Set Up the Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

Configure the frontend environment variables and API base URL according to your local setup.

## Security

- Keep API keys, database credentials, and JWT secrets in environment variables.
- Never commit `.env` files or private credentials to GitHub.
- Configure authentication, CORS, and cookie settings appropriately for local development and production.
- Use test credentials when testing payment integrations.

## Future Enhancements

- Additional interview categories and difficulty levels.
- More detailed performance analytics.
- Interview history and progress tracking improvements.
- Expanded language and accessibility support.
- More personalized preparation recommendations.

## Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Submit a pull request describing your improvements.

## Author

**Krishna Sahu**

B.Tech — Artificial Intelligence and Machine Learning  
Bansal College of Engineering, Mandideep

- GitHub: https://github.com/Krishna-BCE-24

---

If InterviewIQ.AI helps you prepare for interviews, consider giving the repository a star on GitHub.
