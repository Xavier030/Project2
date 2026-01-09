const fs = require("fs");
const path = require("path");

console.log("🔍 项目结构诊断报告");
console.log("====================");
console.log("");

// 1. 检查package.json
console.log("📦 1. package.json检查:");
try {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  console.log("   ✅ 文件存在且格式正确");
  console.log(`   名称: ${pkg.name}`);
  console.log(`   Next.js版本: ${pkg.dependencies?.next || "未找到"}`);
  console.log(`   React版本: ${pkg.dependencies?.react || "未找到"}`);
} catch (e) {
  console.log("   ❌ 问题:", e.message);
}

console.log("");

// 2. 检查app目录
console.log("📁 2. app目录结构:");
if (fs.existsSync("app")) {
  const items = fs.readdirSync("app");
  console.log(`   ✅ app目录存在 (${items.length}个项目)`);
  
  // 列出所有项目
  items.forEach((item, index) => {
    const itemPath = path.join("app", item);
    const stats = fs.statSync(itemPath);
    console.log(`   ${index + 1}. ${item} [${stats.isDirectory() ? "目录" : "文件"}]`);
  });
  
  // 检查关键文件
  console.log("\n   🔑 关键文件检查:");
  const criticalFiles = [
    { path: "app/layout.js", required: true },
    { path: "app/page.js", required: true }
  ];
  
  criticalFiles.forEach(({ path: filePath, required }) => {
    const exists = fs.existsSync(filePath);
    const status = exists ? "✅" : required ? "❌" : "⚠️";
    console.log(`   ${status} ${filePath}`);
  });
} else {
  console.log("   ❌ app目录不存在");
}

console.log("");

// 3. 检查node_modules
console.log("📦 3. 依赖检查:");
if (fs.existsSync("node_modules")) {
  console.log("   ✅ node_modules目录存在");
  
  // 检查关键包
  const packages = ["next", "react", "react-dom"];
  let allFound = true;
  
  packages.forEach(pkg => {
    const pkgPath = path.join("node_modules", pkg);
    const exists = fs.existsSync(pkgPath);
    console.log(`   ${exists ? "✅" : "❌"} ${pkg}`);
    if (!exists) allFound = false;
  });
  
  console.log(allFound ? "\n   🎉 所有关键包都存在" : "\n   ⚠️ 缺少一些关键包");
} else {
  console.log("   ❌ node_modules目录不存在");
  console.log("   💡 运行命令: npm install");
}

console.log("");

// 4. 检查重复文件
console.log("🔍 4. 检查重复文件问题:");
function findDuplicates(dir) {
  const duplicates = [];
  const seen = new Map();
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item.name);
      
      if (item.isDirectory()) {
        scan(fullPath);
      } else if (item.name === "page.js") {
        if (seen.has("page.js")) {
          duplicates.push(fullPath);
        } else {
          seen.set("page.js", fullPath);
        }
      }
    });
  }
  
  scan(dir);
  return duplicates;
}

if (fs.existsSync("app")) {
  const dupes = findDuplicates("app");
  if (dupes.length > 0) {
    console.log(`   ⚠️ 找到 ${dupes.length} 个重复的 page.js 文件:`);
    dupes.forEach((dupe, i) => {
      console.log(`      ${i + 1}. ${dupe.replace(process.cwd(), "")}`);
    });
    console.log("   💡 建议: 保留 app/page.js，删除其他重复文件");
  } else {
    console.log("   ✅ 没有重复的 page.js 文件");
  }
}

console.log("");
console.log("📋 建议操作:");
console.log("1. 如果有重复文件，运行: Get-ChildItem app -Recurse -Filter page.js | Where-Object {\$_.DirectoryName -ne (Get-Item app).FullName} | Remove-Item");
console.log("2. 如果没有node_modules，运行: npm install");
console.log("3. 启动项目: npm run dev");
console.log("====================");
