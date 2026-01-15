import postgres from "postgres";

export default async function testConnection() {
  const sql = postgres(process.env.DATABASE_URL, {
    ssl: "require",
    idle_timeout: 20,
    connect_timeout: 10,
  });

  try {
    const result = await sql`SELECT version()`;
    console.log("✅ Database connection successful:", result[0].version);
    await sql.end();
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    await sql.end();
    return false;
  }
}
