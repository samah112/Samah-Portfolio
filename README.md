<div align="center">

<img src="public/logo-en.png" alt="Samah A. Basoodan" width="120" />

# Samah A. Basoodan — Portfolio

**AI Researcher · Computer Science Student · Biomedical Engineering Innovator · Medical Inventor**

[🌐 Website](https://samahbasoodan.com) · [💼 LinkedIn](https://www.linkedin.com/in/samah-basoodan-329348294) · [📄 CV](public/SamahCV.pdf)

![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_API-8E75B2?logo=googlegemini&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## About

A bilingual (Arabic / English) personal portfolio and research showcase for **Samah A. Basoodan**, an AI researcher and biomedical innovator building intelligent technologies for healthcare, investment, and future systems, and founder of **ULTRA Investment**.

The site includes **Samah AI**, an embedded assistant powered by Google Gemini that answers questions about her research, projects, and achievements in the visitor's language.

## Highlights

| | |
|---|---|
| 🎓 **Education** | B.Sc. Computer Science, Saudi Electronic University (SEU) · KAUST Academy AI Program · KACST Semiconductor IC Program |
| 🏆 **Award** | 2nd Place, National Health Datathon — *Reducing Premature Mortality* track (AI stroke risk prediction) |
| 🧠 **Innovations** | Brain Cancer FUS AI concept · AI Stroke Risk Prediction · Thrombosis Dosage Decision Algorithm · Medical Telemetry & Edge AI |
| 💼 **Venture** | ULTRA Investment — AI-powered investment intelligence and portfolio analytics platform |
| 🎤 **Leadership** | President, Okaz Toastmasters Club at Ithra (Aramco) — 5+ years of leadership |

## Features

- 🌍 Full Arabic (RTL) and English (LTR) support
- 🌗 Light and dark themes
- 🤖 Samah AI chat assistant with real-time streaming responses
- 🔒 API key kept server-side only (never shipped to the browser)
- 🧩 Offline fallback answers from a verified knowledge base when the AI service is unavailable
- 📱 Responsive layout with mobile bottom navigation
- ✨ Animated hero, scroll reveal, and project showcase with detail modals

## Architecture

```
Browser (React SPA)
   │  POST /api/chat/stream   (Server-Sent Events)
   │  POST /api/chat          (JSON fallback)
   ▼
Server (Netlify Function in production · Express in development)
   │  GEMINI_API_KEY from environment variables
   ▼
Google Gemini API
```

## Project Structure

```
├── src/
│   ├── components/        # UI sections (hero, projects, research, chat, ...)
│   ├── context/           # Language and theme providers
│   ├── data/              # Portfolio content (bilingual)
│   ├── config.ts          # Site configuration and links
│   └── App.tsx
├── server/
│   └── chatCore.ts        # Shared AI logic: system prompt, Gemini client, fallback
├── netlify/functions/
│   └── chat.mts           # Production API: /api/chat and /api/chat/stream
├── server.ts              # Local development server (Express + Vite)
├── public/                # Images, fonts, CV
└── netlify.toml           # Build and routing configuration
```

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# 1. Install dependencies
npm install

# 2. Add your Gemini API key
cp .env.example .env
#    then edit .env and set GEMINI_API_KEY

# 3. Start the development server
npm run dev
```

Open `http://localhost:3000`.

> The assistant still works without a key: it answers from the built-in verified knowledge base.

## Deployment (Netlify)

1. Connect this repository in Netlify.
2. Build settings are read from `netlify.toml` (`npm run build`, publish `dist`).
3. Go to **Site configuration → Environment variables** and add `GEMINI_API_KEY`.
4. Deploy.

## Security

- `.env` is git-ignored; only `.env.example` is committed.
- The Gemini key is read only by server code (`server/chatCore.ts`) and is never bundled into the frontend.
- The chat API is rate-limited per visitor (Netlify platform limit + in-app limiter) to protect the AI quota.
- Chat input and history are validated and length-limited on the server.
- Security headers (HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`) are set in `netlify.toml`.
- Dependabot checks npm dependencies weekly (`.github/dependabot.yml`).
- No personal phone number is published; WhatsApp appears only if a business number is set in `src/config.ts`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the frontend and the Node server into `dist/` |
| `npm start` | Run the production Node server |
| `npm run lint` | Type-check the project |

---

<div align="center">

© 2026 Samah A. Basoodan. All rights reserved.

</div>
