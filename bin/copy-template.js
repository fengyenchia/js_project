#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


const folderName = process.argv[2];

if (!folderName) {
  console.error('錯誤: 請提供資料夾名稱');
  console.log('使用方式: npm run new -- <資料夾名稱>');
  process.exit(1);
}

const sourceDir = path.join(__dirname, '..', 'public', 'template');
const targetDir = path.join(__dirname, '..', 'public', folderName);


function copyDirectory(src, dest) {

  if (!fs.existsSync(src)) {
    console.error(`錯誤: 來源目錄不存在: ${src}`);
    process.exit(1);
  }


  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }


  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {

      copyDirectory(srcPath, destPath);
    } else {

      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {

  if (fs.existsSync(targetDir)) {
    console.error(`錯誤: 目錄 "${folderName}" 已存在於 public 目錄中`);
    process.exit(1);
  }

  copyDirectory(sourceDir, targetDir);
  
  // 將 template.js 重新命名為 {folderName}.js
  const oldJsPath = path.join(targetDir, 'template.js');
  const newJsPath = path.join(targetDir, `${folderName}.js`);
  
  if (fs.existsSync(oldJsPath)) {
    fs.renameSync(oldJsPath, newJsPath);
  }
  
  // 更新 index.html 中的引用
  const indexPath = path.join(targetDir, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    indexContent = indexContent.replace(
      /<script src="template\.js"><\/script>/g,
      `<script src="${folderName}.js"></script>`
    );
    fs.writeFileSync(indexPath, indexContent, 'utf8');
  }
  
  console.log(`成功: 已將 template 複製到 ${folderName}`);
  console.log(`- template.js 已重新命名為 ${folderName}.js`);
  console.log(`- index.html 已更新引用`);
} catch (error) {
  console.error('錯誤:', error.message);
  process.exit(1);
}
