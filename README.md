# 🍞 Morine Bakery

Premium artisan bakery website — redesigned with 3D animations, elegant UI, and rich golden-amber aesthetics. Built with React, Vite, Express, and PostgreSQL.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS v4, Framer Motion, Radix UI |
| **Backend API** | Express 5, Pino (logging), Zod (validation) |
| **Database** | PostgreSQL + Drizzle ORM |
| **API Client** | TanStack Query + Orval (auto-generated) |
| **Monorepo** | pnpm workspaces |

## 📁 Project Structure

```
morine-bakery-helper/
├── artifacts/
│   ├── morine-bakery/     # 🎨 Main bakery website (React + Vite)
│   ├── api-server/        # 🚀 Express API server
│   └── mockup-sandbox/    # 🧪 UI prototyping sandbox
├── lib/
│   ├── db/                # Database schema & queries (Drizzle ORM)
│   ├── api-zod/           # Zod validation schemas (auto-generated)
│   ├── api-spec/          # OpenAPI 3.1 specification
│   └── api-client-react/  # Auto-generated React Query hooks
├── api/                   # Vercel serverless function entry
└── vercel.json            # Vercel deployment config
```

## 🚀 Getting Started

```bash
# Install dependencies (requires pnpm)
pnpm install

# Start the bakery frontend (dev)
pnpm --filter @workspace/morine-bakery run dev

# Start the API server (dev)
pnpm --filter @workspace/api-server run dev

# Build for production (Vercel)
pnpm run build:vercel
```

## 🌐 Deployment

Configured for **Vercel** with:
- Static frontend via Vite
- Serverless API via Express → `api/index.ts`
- PostgreSQL via `DATABASE_URL` environment variable

## 📸 Screenshots

*Coming soon*

---

© Morine Bakery. Designed & Developed by Media Wagon.
