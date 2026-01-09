import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    console.log("API: Starting database connection...");

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Lsy021126",
      database: process.env.DB_NAME || "travelexperts",
      port: process.env.DB_PORT || 3306,
    });

    console.log("API: Connection established, executing query...");

    const [packages] = await connection.execute(
      "SELECT * FROM packages ORDER BY PkgEndDate DESC"
    );

    console.log(`API: Found ${packages.length} packages`);

    await connection.end();

    return NextResponse.json({
      success: true,
      data: packages,
      count: packages.length,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
