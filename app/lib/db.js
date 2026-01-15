// lib/db.js
import postgres from "postgres";

// 根据环境配置 SQL 实例
let sql;

if (process.env.NODE_ENV === "production") {
  // 生产环境：使用连接池
  sql = postgres(process.env.DATABASE_URL, {
    ssl: "require",
    idle_timeout: 20,
    max_lifetime: 60 * 30, // 30分钟
  });
} else {
  // 开发环境
  sql = postgres(process.env.DATABASE_URL, {
    ssl: "require",
    idle_timeout: 20,
  });
}

export default sql;
