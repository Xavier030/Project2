// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise";

// export async function GET() {
//   try {
//     console.log("API: Starting database connection...");

//     const connection = await mysql.createConnection({
//       host: process.env.DB_HOST || "localhost",
//       user: process.env.DB_USER || "root",
//       password: process.env.DB_PASSWORD || "Lsy021126",
//       database: process.env.DB_NAME || "travelexperts",
//       port: process.env.DB_PORT || 3306,
//     });

//     console.log("API: Connection established, executing query...");

//     const [packages] = await connection.execute(
//       "SELECT * FROM packages ORDER BY PkgEndDate DESC"
//     );

//     console.log(`API: Found ${packages.length} packages`);

//     await connection.end();

//     return NextResponse.json({
//       success: true,
//       data: packages,
//       count: packages.length,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://fnqzwhsotnjfgxqxednr.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_irh_HXz-f_k9f4ZwUCDQIQ_Vdp3T7uZ";

export async function GET() {
  try {
    console.log("API: Creating Supabase client...");

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      db: {
        schema: "public",
      },
    });

    console.log("API: Client created, executing query...");

    // 查询 packages 表
    const { data, error, count } = await supabase
      .from("packages")
      .select("*", { count: "exact" })
      .order("pkgenddate", { ascending: false });

    if (error) {
      console.error("Supabase query error:", error);
      throw error;
    }

    console.log(`API: Found ${data?.length || 0} packages`);

    if (data && data.length > 0) {
      console.log("First package fields:", Object.keys(data[0]));
      console.log("First package pkgname:", data[0].pkgname);
    }

    return NextResponse.json({
      success: true,
      data: data || [],
      count: count || 0,
      fieldMappings: {
        id: "packageid",
        name: "pkgname",
        startDate: "pkgstartdate",
        endDate: "pkgenddate",
        description: "pkgdsec",
        basePrice: "pkgbaseprice",
        commission: "pkgagencycommission",
      },
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: true,
        data: data || [],
        count: count || 0,
      },
      { status: 500 }
    );
  }
}
