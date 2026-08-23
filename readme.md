# CollabSpace 🚀

A real-time, collaborative workspace platform inspired by Notion. Built using the MERN stack, featuring rich-text editing, block-based structures, live multi-user collaboration, and robust workspace management.

## ✨ Features

- **Block-Based Rich Text Editor:** Create headings, lists, code blocks, and check-lists effortlessly.
- **Real-Time Collaboration:** Multiple users can edit the exact same document simultaneously with live cursor tracking.
- **Nested Document Organization:** Infinite folder and sub-page nesting for structured knowledge management.
- **Workspace Management:** Create private personal notes or shared workspaces for teams.
- **Secure Authentication:** JWT-based user login, registration, and session management.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, [Editor.js / Slate.js / TipTap]
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Real-Time Sync:** Socket.io / WebSockets

---

## 📂 Project Structure

```text
collabspace/
├── backend/          # Express API server
├── frontend/         # React client application
└── README.md         # Documentation
```

---

## ⚙️ Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org) (v18+ recommended)
- [MongoDB](https://mongodb.com) (Local instance or Atlas URI)

### 1. Clone the Repository

```bash
git clone https://github.com
cd collabspace
```

### 2. Environment Variables Configuration

#### Backend Configuration

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/collabspace
JWT_SECRET=your_super_secret_jwt_key
CLIENT_URL=http://localhost:5173
```

#### Frontend Configuration

Create a `.env` file inside the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### 3. Installation

Install dependencies for both frontend and backend.

From the root directory:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

## 🚀 Running the Application

### Running Separately

**Start Backend Server:**

```bash
cd backend
npm run dev
```

_Backend runs on `http://localhost:5000`_

**Start Frontend Client:**

```bash
cd frontend
npm run dev
```

_Frontend runs on `http://localhost:5173`_

---

## 🧪 API Endpoints (Quick Reference)

### Authentication

- `POST /api/auth/register` - Create a new account
- `POST /api/auth/login` - Authenticate a user

### Documents

- `GET /api/documents` - Fetch all workspace documents
- `POST /api/documents` - Create a new document / sub-page
- `GET /api/documents/:id` - Fetch single document details
- `PUT /api/documents/:id` - Update document structure/content
- `DELETE /api/documents/:id` - Move document to trash

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
