// app/api/test-db/route.js
import { NextResponse } from "next/server";

export async function GET() {
  console.log("=== DB Connection Test ===");
  console.log("Environment variables:");
  console.log("DB_HOST:", process.env.DB_HOST);
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_NAME:", process.env.DB_NAME);
  console.log("DB_PORT:", process.env.DB_PORT);
  console.log("Node ENV:", process.env.NODE_ENV);

  try {
    const mysql = await import("mysql2/promise");

    // 尝试连接
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Lsy021126",
      port: process.env.DB_PORT || 3306,
      // 不指定数据库，只测试连接
    });

    const [version] = await connection.execute("SELECT VERSION() as version");
    console.log("MySQL Version:", version[0].version);

    // 列出所有数据库
    const [databases] = await connection.execute("SHOW DATABASES");
    console.log(
      "Available databases:",
      databases.map((d) => d.Database)
    );

    await connection.end();

    return NextResponse.json({
      success: true,
      version: version[0].version,
      databases: databases.map((d) => d.Database),
      env: {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_NAME: process.env.DB_NAME,
        NODE_ENV: process.env.NODE_ENV,
      },
    });
  } catch (error) {
    console.error("Connection test failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        errno: error.errno,
        env: {
          DB_HOST: process.env.DB_HOST,
          DB_USER: process.env.DB_USER,
          DB_NAME: process.env.DB_NAME,
        },
      },
      { status: 500 }
    );
  }
}
