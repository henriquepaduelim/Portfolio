import { Pool } from "pg";

// Lazy singleton to avoid touching env/connect at build time.
let globalPool: Pool | undefined = (global as unknown as { _pool?: Pool })._pool;

export function getDb() {
  if (globalPool) return globalPool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is required");
  }

  globalPool = new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000
  });

  (global as unknown as { _pool?: Pool })._pool = globalPool;
  return globalPool;
}
