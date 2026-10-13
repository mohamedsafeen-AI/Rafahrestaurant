# RAFAH RESTAURANT

A full-stack restaurant application with a React frontend and Express backend.

## Project Structure

The project is organized into two main directories:

- `frontend/`: React application built with Vite and TypeScript
- `backend/`: Express.js API server

## Features

- Interactive menu with category filtering
- Image gallery
- Reservation system
- Responsive design for mobile and desktop
- Backend API for menu items and reservations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. In a separate terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

1. Build the frontend:
   ```
   cd frontend
   npm run build
   ```

2. Set the environment variable in `.env`:
   ```
   NODE_ENV=production
   ```

3. Start the production server:
   ```
   cd backend
   npm start
   ```

## Technologies Used

### Frontend
- React
- TypeScript
- Vite
- CSS

### Backend
- Express.js
- Node.js
- Twilio API (for SMS notifications)

## License

This project is licensed under the MIT License.