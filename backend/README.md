# Document AI Backend

This is the backend API for the Document AI application, built with Node.js, Express, and MongoDB.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/documentai
   NODE_ENV=development
   ```

3. **Start MongoDB:**
   - For local MongoDB: Make sure MongoDB is running on your system
   - For MongoDB Atlas: Use your connection string in MONGODB_URI

4. **Run the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Documents
- `GET /api/documents` - Get all documents
- `GET /api/documents/:executionId` - Get document by execution ID
- `POST /api/documents` - Create new document
- `PUT /api/documents/:executionId` - Update document
- `DELETE /api/documents/:executionId` - Delete document
- `GET /api/documents/status/:status` - Get documents by status
- `GET /api/documents/environment/:environment` - Get documents by environment

## Database Schema

### Document Model
- `executionId` (String, required, unique)
- `fileName` (String, required)
- `startTime` (Date, required)
- `endTime` (Date, required)
- `reviewStatus` (String: 'Pending', 'In Review', 'Completed')
- `environment` (String: 'Production', 'Development', 'Testing')
- `filePath` (String, required)
- `fileSize` (Number, required)
- `processingTime` (Number, required)
- `createdAt` (Date, auto-generated)
- `updatedAt` (Date, auto-generated)

## Sample Data

To add sample data, you can use the following API call:

```bash
curl -X POST http://localhost:5000/api/documents \
  -H "Content-Type: application/json" \
  -d '{
    "executionId": "EXE-001",
    "fileName": "contract_2024.pdf",
    "startTime": "2024-01-15T09:30:00.000Z",
    "endTime": "2024-01-15T09:35:00.000Z",
    "reviewStatus": "Completed",
    "environment": "Production",
    "filePath": "/uploads/contract_2024.pdf",
    "fileSize": 2048576,
    "processingTime": 300
  }'
``` 