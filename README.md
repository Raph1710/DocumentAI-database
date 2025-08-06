# DocumentAI Database

DocumentAI Database is a full-stack application designed to intelligently process, store, and manage documents—especially for medical and business use cases. The project leverages a modern React frontend with animated user experiences and a robust Node.js/Express backend with MongoDB for data extraction and persistence.

---

## Features

### Frontend (React + Vite + Tailwind CSS)

- **Animated User Experience:**  
  The frontend uses Tailwind CSS for styling and includes custom animations to enhance user engagement. For example, the "How It Works" section on the home page features animated step transitions, spinning icons, and interactive visual cues to guide users through the document processing workflow.
- **Responsive Design:**  
  The UI is fully responsive, ensuring usability across devices.
- **Navigation:**  
  A persistent, animated navbar allows users to switch between the Home and Database pages.
- **Document Database View:**  
  Users can view a table of all processed documents, with real-time status indicators and color-coded review statuses.
- **Document Detail Modal:**  
  Clicking "View Document" opens a modal with detailed information, animated metrics, and actionable buttons (Approve, Mark for Review, Download, Delete).
- **Error Handling & Loading States:**  
  Animated loaders and clear error messages provide feedback during data fetching.

### Backend (Node.js + Express + MongoDB)

- **RESTful API:**  
  The backend exposes endpoints for CRUD operations on documents, including filtering by status and environment.
- **Data Extraction:**  
  When new documents are added, the backend extracts and stores metadata such as file name, size, processing time, and environment. This enables advanced querying and analytics.
- **Sample Data Seeding:**  
  Includes a script to seed the database with realistic sample documents for testing and demo purposes.
- **Environment Configuration:**  
  Supports both local MongoDB and MongoDB Atlas via environment variables.
- **Robust Error Handling:**  
  All endpoints return meaningful error messages and status codes.

---

## Project Structure

```
DocumentAI-database/
  backend/
    config/
    models/
    routes/
    seedData.js
    server.js
    .env
  frontend/
    src/
      components/
      pages/
      App.jsx
      main.jsx
    public/
    index.html
    tailwind.config.js
    vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB (local or Atlas)

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```
2. **Configure environment:**
   - Copy `.env` and set your MongoDB URI.
3. **Seed sample data (optional):**
   ```bash
   npm run seed
   ```
4. **Start the server:**
   ```bash
   npm run dev
   ```
   The backend runs on `http://localhost:5000`.

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend runs on `http://localhost:5173`.

---

## API Endpoints

See [backend/README.md](backend/README.md) for a full list of endpoints.

---

## Animations in the Frontend

- **Hero Section:**  
  Animated buttons and transitions introduce the app.
- **How It Works:**  
  Animated icons and connecting lines visually explain the three-step process (Store, Process, Timeline).
- **Loading States:**  
  Spinning loaders indicate data fetching.
- **Status Indicators:**  
  Color-coded badges and animated transitions reflect document review status.
- **Modal Transitions:**  
  The document detail modal appears with smooth fade-in and scaling effects.

---

## Data Extraction in the Backend

- **Metadata Extraction:**  
  When a document is created via the API, the backend extracts and stores metadata such as:
  - `executionId`
  - `fileName`
  - `filePath`
  - `fileSize`
  - `processingTime`
  - `environment`
  - `reviewStatus`
  - Timestamps (`createdAt`, `updatedAt`)
- **Flexible Querying:**  
  Endpoints allow filtering documents by status and environment for advanced data analysis.

---