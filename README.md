# VELORA Real Estate

A bilingual real-estate website and API for browsing properties, viewing project details, and sending inquiries. The interface supports English and Arabic, including right-to-left layouts.

## Tech Stack

- React 18 and Vite
- Tailwind CSS, Framer Motion, and Swiper
- i18next for English and Arabic
- Express API with cookie-based JWT authentication

## Requirements

- Node.js 18 or newer
- npm

## Run Locally

Install dependencies in the frontend and backend folders:

```powershell
cd frontend
npm install
cd ..\backend
npm install
```

Open two terminals from the repository root. Start the API in the first:

```powershell
cd backend
npm start
```

Start the website in the second:

```powershell
cd frontend
npm run dev
```

Open `http://localhost:5173`. The API listens on `http://localhost:5000`.

The frontend defaults to `http://localhost:5000/api/v1`. To override it, copy `frontend/.env.example` to `frontend/.env` and set `VITE_API_URL`.

## Production Build

```powershell
cd frontend
npm run build
npm run preview
```

The production files are generated in `frontend/dist/`.

## API Overview

The API is mounted under `/api/v1`. It provides health, authentication, properties, and inquiry endpoints. Check `backend/server.js` for the current route definitions.

The development API stores users, properties, and inquiries in memory. Data is reset when the server restarts; use a persistent database before deploying this as a production service.

## Environment and Security

- Keep `.env` files and credentials out of Git. `.env.example` files contain placeholders only.
- Configure a unique `JWT_SECRET` for any deployed backend.
- The seeded admin account and fallback development secret in `backend/server.js` are for local development only. Replace them before deployment.
- Update the backend CORS allowlist for the production frontend origin.

## Repository Layout

```text
backend/   Express API
frontend/  React/Vite website
src/       Root-level Vite app files
```

The `frontend/` app is the one configured for `http://localhost:5173` and used in the local run instructions above.
