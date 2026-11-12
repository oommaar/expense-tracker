-- ============================================================
-- XPENSE — NEON DATABASE SETUP
-- Run this in Neon Dashboard → SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS "users" (
  "id"        TEXT NOT NULL,
  "name"      TEXT,
  "email"     TEXT NOT NULL,
  "password"  TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "users_email_key" ON "users"("email");

CREATE TABLE IF NOT EXISTS "expenses" (
  "id"        TEXT NOT NULL,
  "userId"    TEXT NOT NULL,
  "title"     TEXT NOT NULL,
  "amount"    DOUBLE PRECISION NOT NULL,
  "category"  TEXT NOT NULL DEFAULT 'Other',
  "date"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "notes"     TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "expenses_userId_idx"   ON "expenses"("userId");
CREATE INDEX IF NOT EXISTS "expenses_date_idx"     ON "expenses"("date");
CREATE INDEX IF NOT EXISTS "expenses_category_idx" ON "expenses"("category");

ALTER TABLE "expenses"
  ADD CONSTRAINT "expenses_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "users"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE IF NOT EXISTS "budgets" (
  "id"           TEXT NOT NULL,
  "userId"       TEXT NOT NULL,
  "category"     TEXT NOT NULL,
  "monthlyLimit" DOUBLE PRECISION NOT NULL,
  "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "budgets_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "budgets_userId_category_key"
  ON "budgets"("userId", "category");

ALTER TABLE "budgets"
  ADD CONSTRAINT "budgets_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "users"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

-- Auto-update updatedAt trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW."updatedAt" = CURRENT_TIMESTAMP; RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_updated_at   ON "users";
DROP TRIGGER IF EXISTS expenses_updated_at ON "expenses";
DROP TRIGGER IF EXISTS budgets_updated_at  ON "budgets";

CREATE TRIGGER users_updated_at    BEFORE UPDATE ON "users"    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER expenses_updated_at BEFORE UPDATE ON "expenses" FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER budgets_updated_at  BEFORE UPDATE ON "budgets"  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

SELECT 'Tables created successfully! ✅' AS status;
