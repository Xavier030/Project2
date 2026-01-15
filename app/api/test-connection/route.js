import { NextResponse } from "next/server";
import { Pool } from "pg";

export async function GET() {
  try {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      return NextResponse.json({
        success: false,
        message: "DATABASE_URL is not set in environment variables",
      });
    }

    // 隐藏密码的显示
    const safeConnectionString = connectionString.replace(
      /:([^:@]+)@/,
      ":****@"
    );

    const pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    });

    const client = await pool.connect();

    try {
      // 简单查询测试
      const result = await client.query("SELECT version()");
      const version = result.rows[0].version;

      // 检查表
      const tablesResult = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name;
      `);

      await client.release();
      await pool.end();

      return NextResponse.json({
        success: true,
        message: "Connection successful!",
        databaseVersion: version,
        tables: tablesResult.rows.map((row) => row.table_name),
        connectionString: safeConnectionString,
      });
    } finally {
      if (client) client.release();
    }
  } catch (error) {
    console.error("Test connection error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Connection failed",
        error: error.message,
        code: error.code,
        suggestion: "Check your .env.local file and Supabase project settings",
      },
      { status: 500 }
    );
  }
}
