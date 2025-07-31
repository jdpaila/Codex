# Astrology Consultation Platform

This repository contains a minimal full-stack web application split into a `frontend` built with React and a `backend` built with Node.js/Express and MongoDB.

## Prerequisites
- Node.js 18+
- npm
- MongoDB running locally (or update the connection string in `backend/.env`)

## Setup

### Backend
```
cd backend
cp .env.example .env
npm install
npm start
```
The API will run on port `5000` by default.

### Frontend
```
cd frontend/astrology-client
npm install
npm run dev
```
The React app will start on port `5173`.

This is a basic starter demonstrating authentication routes, expert listings and booking endpoints. TailwindCSS is loaded from CDN for quick styling.
