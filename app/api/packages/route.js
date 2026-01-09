// app/api/packages/route.js
import { NextResponse } from "next/server";

export async function GET() {
  console.log("API: Starting database connection...");
  console.log("DB_HOST:", process.env.DB_HOST || "localhost");
  console.log("DB_USER:", process.env.DB_USER || "root");
  console.log("DB_NAME:", process.env.DB_NAME || "travelexperts");

  try {
    // 动态导入mysql2/promise
    const mysql = await import("mysql2/promise");

    console.log("API: Creating connection...");

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Lsy021126",
      database: process.env.DB_NAME || "travelexperts",
      port: process.env.DB_PORT || 3306,
      // 添加更多连接选项
      timezone: "+00:00",
      decimalNumbers: true,
      supportBigNumbers: true,
      bigNumberStrings: true,
    });

    console.log("API: Connection established, executing query...");

    // 先尝试简单查询测试连接
    const [test] = await connection.execute("SELECT 1 as test");
    console.log("API: Test query result:", test);

    // 查询数据库中的所有表
    const [tables] = await connection.execute("SHOW TABLES");
    console.log("API: Available tables:", tables);

    // 查询packages表
    const [packages] = await connection.execute(
      "SELECT * FROM packages WHERE PkgEndDate >= CURRENT_DATE OR PkgEndDate IS NULL"
    );

    console.log("API: Packages found:", packages.length);
    console.log("API: First package:", packages[0]);

    await connection.end();
    console.log("API: Connection closed");

    return NextResponse.json({
      success: true,
      data: packages,
      count: packages.length,
      debug: {
        tables: tables.map((t) => Object.values(t)[0]),
        connection: "success",
      },
    });
  } catch (error) {
    console.error("API: Database error details:");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error errno:", error.errno);
    console.error("Error sqlState:", error.sqlState);
    console.error("Full error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
        errorCode: error.code,
        errorNo: error.errno,
        sqlState: error.sqlState,
        suggestion: "Check if MySQL is running and credentials are correct",
      },
      { status: 500 }
    );
  }
}
