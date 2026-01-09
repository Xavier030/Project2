// lib/package.js
import db from "./database.js";

export async function getAllpackageDetails() {
  try {
    const [packages] = await db.query(
      "SELECT * FROM packages WHERE PkgEndDate >= CURRENT_DATE"
    );
    return packages || [];
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
}

export async function getExpiredPackages() {
  try {
    const [packages] = await db.query(
      "SELECT * FROM packages WHERE PkgStartDate <= CURRENT_DATE"
    );
    return packages || [];
  } catch (error) {
    console.error("Error fetching expired packages:", error);
    return [];
  }
}
