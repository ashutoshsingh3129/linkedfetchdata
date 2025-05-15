# LinkedIn Posts Dashboard

A modern dashboard built with **Vite**, **React**, and **Tailwind CSS** that displays LinkedIn posts, supports filtering, search, and shows top-performing posts by engagement.

## ✨ Features

- 🔍 Search LinkedIn posts by text
- 🎯 Filter posts:
  - Only Original Posts
  - Only Reshared Posts
  - Posts With Video
- 📊 Top 3 Engaging Posts (by total reaction count)
- 🧠 Reshared post content and video support
- 👤 Author info with profile picture
- ❤️ Reactions breakdown (like, praise, empathy, funny, etc.)

## 🧱 Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- [RapidAPI - LinkedIn API](https://rapidapi.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- npm

### Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/linkedin-dashboard.git
cd linkedin-dashboard
npm install
npm run dev

src/
│
├── components/        # UI components like PostCard, Filters, SearchBar
├── hooks/             # Custom hooks like useFetchPosts
├── styles/            # Global styles (Tailwind imports)
├── App.tsx            # Main application
├── main.tsx           # Entry point
└── types.ts           # Type definitions (if used)
