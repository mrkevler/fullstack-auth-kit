# Fullstack Auth Kit 💫

## Full-stack Authentication Starter with OAuth 2.0

**Repository:** [mrkevler/fullstack-auth-kit](https://github.com/mrkevler/fullstack-auth-kit)

**Demo** 🌐 [](#)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-5-000000?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens&logoColor=white) ![Passport](https://img.shields.io/badge/Passport.js-OAuth-34E27A?logo=passport&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)  
![GitHub](https://img.shields.io/github/followers/mrkevler?label=Follow&style=social) ![License](https://img.shields.io/badge/License-MIT-blue)  
![Repo Size](https://img.shields.io/github/repo-size/mrkevler/fullstack-auth-kit) ![Last Commit](https://img.shields.io/github/last-commit/mrkevler/fullstack-auth-kit)
[![Buy Me a Coffee](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-yellow)](https://buymeacoffee.com/mrkevler)

## 🔍 Table of Contents

- [Fullstack Auth Kit 💫](#fullstack-auth-kit-)
  - [Full-stack Authentication Starter with OAuth 2.0](#full-stack-authentication-starter-with-oauth-20)
  - [🔍 Table of Contents](#-table-of-contents)
  - [🚀 Project Overview](#-project-overview)
  - [✨ Key Features](#-key-features)
  - [🌟 Architecture](#-architecture)
  - [🛠️ Technologies Used](#️-technologies-used)
    - [Frontend Stack](#frontend-stack)
    - [Backend Stack](#backend-stack)
    - [DevOps \& Tools](#devops--tools)
  - [💻 Authentication Flow](#-authentication-flow)
    - [JWT Authentication](#jwt-authentication)
    - [GitHub OAuth 2.0 Flow](#github-oauth-20-flow)
  - [🏗️ Project Structure](#️-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Docker Setup](#docker-setup)
  - [🔧 Development](#-development)
    - [Running Locally](#running-locally)
    - [API Endpoints](#api-endpoints)
  - [📱 Frontend Features](#-frontend-features)
  - [🔐 Security Features](#-security-features)
  - [🎯 Future Enhancements](#-future-enhancements)

---

## 🚀 Project Overview

A modern full-stack authentication boilerplate featuring **JWT authentication** and **GitHub OAuth 2.0** integration 🔐  
Built as a **monorepo** with React 19, Express.js 5, MongoDB 8, and Docker support for rapid development and deployment 🚀

Perfect starting point for applications requiring secure user authentication with social login capabilities 🎨

Enjoy building secure applications! ✌️  
[mrKevler](https://github.com/mrkevler)

---

## ✨ Key Features

- **🔐 Dual Authentication** - Email/password registration with JWT tokens + GitHub OAuth 2.0
- **🎨 Modern UI** - Responsive React 19 frontend with Tailwind CSS 4
- **🚀 Express.js 5** - Latest backend framework with async/await support
- **📦 MongoDB 8** - NoSQL database with Mongoose ODM
- **🐳 Docker Ready** - Complete Docker Compose setup for development
- **🏗️ Monorepo Structure** - Organized frontend/backend separation
- **🔒 Secure by Default** - Password hashing with bcrypt, JWT tokens, secure sessions
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **⚡ Hot Reloading** - Development efficiency with Vite and Nodemon
- **🧪 Environment Config** - Separate development/production settings

---

## 🌟 Architecture

**Monorepo Structure Benefits:**

- **Unified Codebase** - Frontend and backend in single repository
- **Shared Dependencies** - Common packages managed centrally
- **Atomic Commits** - Related changes across stack in single commit
- **Simplified CI/CD** - Single pipeline for entire application
- **Team Collaboration** - Easier code reviews and knowledge sharing

**Authentication Architecture:**

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│   React     │────▶│  Express    │────▶│   MongoDB    │
│  Frontend   │◀────│   Backend   │◀────│   Database   │
└─────────────┘     └─────────────┘     └──────────────┘
       │                    │                     
       │              ┌─────────────┐            
       └─────────────▶│   GitHub    │            
                      │   OAuth     │            
                      └─────────────┘            
```

---

## 🛠️ Technologies Used

### Frontend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.0 | UI library with latest features |
| **React Router** | 7.6.2 | Client-side routing |
| **Tailwind CSS** | 4.1.10 | Utility-first styling |
| **Vite** | 6.3.5 | Build tool and dev server |
| **Axios** | 1.10.0 | HTTP client for API calls |

### Backend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| **Express.js** | 5.1.0 | Web application framework |
| **MongoDB** | 8.x | NoSQL database |
| **Mongoose** | 8.16.0 | MongoDB ODM |
| **Passport.js** | 0.7.0 | Authentication middleware |
| **JWT** | 9.0.2 | Token-based authentication |
| **bcrypt** | 6.0.0 | Password hashing |

### DevOps & Tools
| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization |
| **Docker Compose** | Multi-container orchestration |
| **Nodemon** | Auto-reload development |
| **ESLint** | Code linting |

---

## 💻 Authentication Flow

### JWT Authentication

```javascript
// Registration Flow
POST /auth/register
├── Validate input data
├── Check if user exists
├── Hash password with bcrypt
├── Create user in MongoDB
└── Return success message

// Login Flow
POST /auth/login
├── Validate credentials
├── Verify password hash
├── Generate JWT token
├── Return token + user data
└── Store token in localStorage
```

### GitHub OAuth 2.0 Flow

```javascript
// OAuth Flow
GET /auth/github
├── Redirect to GitHub authorization
├── User approves app permissions
├── GitHub redirects with code
├── Exchange code for access token
├── Fetch user profile from GitHub
├── Create/update user in database
└── Redirect to frontend with JWT
```

---

## 🏗️ Project Structure

```
fullstack-auth-kit/
├── frontend/                  # React application
│   ├── src/
│   │   ├── pages/            # Page components
│   │   │   ├── Home/         # Landing page
│   │   │   ├── Login/        # Login with OAuth
│   │   │   ├── Register/     # User registration
│   │   │   └── Profile/      # Protected route
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── public/               # Static assets
│   └── package.json          # Frontend dependencies
│
├── backend/                   # Express application
│   ├── models/               # Mongoose schemas
│   │   ├── User.js          # User model
│   │   └── Content.js       # Content model
│   ├── routers/              # API routes
│   │   ├── userRouters.js   # Auth endpoints
│   │   └── contentRouters.js # Protected routes
│   ├── middlewares/          # Custom middleware
│   │   └── auth.js          # JWT verification
│   ├── passport/             # OAuth strategies
│   │   └── auth.js          # GitHub strategy
│   ├── utils/                # Helper functions
│   ├── db/                   # Database config
│   ├── index.js              # Server entry
│   └── package.json          # Backend dependencies
│
├── docker-compose.yml         # Docker orchestration
├── .github/                   # GitHub Actions
│   └── workflows/
│       └── ci.yml            # CI/CD pipeline
└── README.md                  # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **MongoDB** 7+ (or use Docker)
- **GitHub OAuth App** ([Create here](https://github.com/settings/developers))
- **Docker** (optional but recommended)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mrkevler/fullstack-auth-kit.git
cd fullstack-auth-kit
```

2. **Install dependencies:**
```bash
# Install all dependencies
npm run install:all

# Or manually
cd frontend && npm install
cd ../backend && npm install
```

### Environment Variables

1. **Backend `.env`:**
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/auth-kit
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:5001/auth/github/callback

# URLs
CLIENT_URL=http://localhost:3000
SESSION_SECRET=your_session_secret
```

2. **Frontend `.env`:**
```env
REACT_APP_API_URL=http://localhost:5001
REACT_APP_GITHUB_CLIENT_ID=your_github_client_id
```

### Docker Setup

```bash
# Build and start all services
npm run docker:up

# Or use docker-compose directly
docker-compose up --build
```

**Services will be available at:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5001
- MongoDB: mongodb://localhost:27017
- Mongo Express: http://localhost:8081

---

## 🔧 Development

### Running Locally

**Without Docker:**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - MongoDB
mongod
```

**With Docker:**
```bash
npm run docker:up
```

### API Endpoints

**Authentication Routes:**
```
POST   /auth/register        # User registration
POST   /auth/login          # User login
GET    /auth/github         # GitHub OAuth login
GET    /auth/github/callback # OAuth callback
GET    /auth/github/logout  # Logout GitHub user
```

**Protected Routes:**
```
GET    /content/:id         # Get content (requires JWT)
POST   /content/:userId     # Create content
```

---

## 📱 Frontend Features

- **🏠 Home Page** - Landing page with navigation
- **📝 Registration** - User signup with validation
- **🔐 Login Page** - Dual auth (email or GitHub)
- **👤 Profile Page** - Protected user dashboard
- **🎨 Responsive Design** - Mobile-first approach
- **⚡ Fast Navigation** - Client-side routing
- **🔄 State Management** - LocalStorage for auth

---

## 🔐 Security Features

- **Password Security** - bcrypt hashing with salt rounds
- **JWT Tokens** - Secure token generation and validation
- **Protected Routes** - Middleware-based route protection
- **CORS Configuration** - Cross-origin resource sharing
- **Environment Variables** - Sensitive data protection
- **Session Management** - Express sessions for OAuth
- **Input Validation** - Server-side validation
- **Error Handling** - Secure error responses

---

## 🎯 Future Enhancements

- [ ] **Email Verification** - Confirm user emails
- [ ] **GitHub OAuth** - Additional provider

---

**Perfect for:**
- 🚀 **SaaS Applications**
- 📱 **Mobile App Backends**
- 🎓 **Learning Projects**
- 💼 **MVP Development**
- 🏢 **Enterprise Starters**

---

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FF8000?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://www.buymeacoffee.com/mrkevler)

Crafted with ♥ by [mrKevler](https://github.com/mrkevler)