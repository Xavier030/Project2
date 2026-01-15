const { Pool } = require("pg");
require("dotenv").config();

async function createPackagesTable() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    const client = await pool.connect();

    // 创建 packages 表
    await client.query(`
      CREATE TABLE IF NOT EXISTS packages (
        PackageId SERIAL PRIMARY KEY,
        PkgName VARCHAR(50),
        PkgStartDate DATE,
        PkgEndDate DATE,
        PkgDesc VARCHAR(50),
        PkgBasePrice DECIMAL(10,2),
        PkgAgencyCommission DECIMAL(10,2)
      );
    `);

    console.log("✅ Table 'packages' created or already exists");

    // 插入示例数据
    await client.query(`
      INSERT INTO packages (PkgName, PkgStartDate, PkgEndDate, PkgDesc, PkgBasePrice, PkgAgencyCommission)
      VALUES 
        ('Caribbean New Year', '2023-12-27', '2023-12-31', 'Cruise the Caribbean & Celebrate the New Year.', 4800.00, 400.00),
        ('Polynesian Paradise', '2023-12-12', '2023-12-20', '8 Day All Inclusive Hawaiian Vacation', 3000.00, 300.00),
        ('Asian Expedition', '2023-08-21', '2023-09-01', 'Airfaire, Hotel and Eco Tour.', 2800.00, 250.00)
      ON CONFLICT (PackageId) DO NOTHING;
    `);

    console.log("✅ Sample data inserted");

    // 验证数据
    const result = await client.query("SELECT * FROM packages");
    console.log(`✅ Total packages: ${result.rows.length}`);

    await client.release();
    console.log("✅ Migration completed successfully!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  } finally {
    await pool.end();
  }
}

createPackagesTable();
