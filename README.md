# 💸 Xpense — Expense Tracker (Neon + NextAuth)

Full-stack expense tracker built with **Next.js 14**, **Neon PostgreSQL**, **Prisma**, and **NextAuth.js**.

## 🚀 Setup (3 steps)

### 1. Install dependencies
```bash
npm install
```

### 2. Setup environment variables
Create `.env.local` in the root:
```env
DATABASE_URL="postgresql://neondb_owner:npg_H1qM0jgSVJet@ep-misty-king-amvt7zjy-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require&pgbouncer=true&connect_timeout=10"
DIRECT_URL="postgresql://neondb_owner:npg_H1qM0jgSVJet@ep-misty-king-amvt7zjy.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
NEXTAUTH_SECRET="your-random-secret-min-32-chars-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Push database schema & run
```bash
npm run db:push      # Creates tables in Neon
npm run dev          # Start dev server
```

Open [http://localhost:3000](http://localhost:3000) — sign up and start tracking!

---

## 🗄️ Database (Neon PostgreSQL via Prisma)

Tables auto-created by `prisma db push`:
- `users` — id, name, email, password (hashed)
- `expenses` — id, userId, title, amount, category, date, notes
- `budgets` — id, userId, category, monthlyLimit

## 🔐 Auth (NextAuth.js)
- Email + password credentials
- JWT sessions
- Passwords hashed with bcryptjs
- Routes protected by middleware

## 📁 Structure
```
app/
  api/
    auth/[...nextauth]/route.ts  ← NextAuth handler
    auth/signup/route.ts         ← Register endpoint
    expenses/route.ts            ← GET list / POST create
    expenses/[id]/route.ts       ← PUT update / DELETE
    dashboard/route.ts           ← Stats aggregation
  dashboard/, add-expense/, expenses/, login/, signup/
components/layout/, ui/, charts/
lib/prisma.ts, lib/expenses.ts
prisma/schema.prisma
```

## 🛠 Tech Stack
| Tech | Role |
|------|------|
| Next.js 14 | App Router + API Routes |
| Neon | Serverless PostgreSQL |
| Prisma | ORM + migrations |
| NextAuth.js | Authentication (JWT) |
| bcryptjs | Password hashing |
| Tailwind CSS | Styling |
| Recharts | Charts |
