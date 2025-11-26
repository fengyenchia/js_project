#!/usr/bin/env node

const { exec } = require('child_process');
const os = require('os');

// 從命令列參數取得目錄名稱
const dirName = process.argv[2];

if (!dirName) {
  console.error('錯誤: 請提供目錄名稱');
  console.log('使用方式: npm run view -- <目錄名稱>');
  console.log('例如: npm run view -- test1');
  process.exit(1);
}

// 建構 URL
const url = `http://localhost:3000/${dirName}`;

console.log(`正在開啟 Chrome 瀏覽器...`);
console.log(`URL: ${url}`);

// 根據作業系統選擇開啟 Chrome 的指令
let chromeCommand;
const platform = os.platform();

switch (platform) {
  case 'win32': // Windows
    chromeCommand = `start chrome "${url}"`;
    break;
  case 'darwin': // macOS
    chromeCommand = `open -a "Google Chrome" "${url}"`;
    break;
  case 'linux': // Linux
    chromeCommand = `google-chrome "${url}" || chromium-browser "${url}"`;
    break;
  default:
    console.error(`錯誤: 不支援的作業系統: ${platform}`);
    console.log('請手動開啟以下網址:');
    console.log(url);
    process.exit(1);
}

exec(chromeCommand, (error) => {
  if (error) {
    console.error('錯誤: 無法開啟 Chrome');
    console.error('請確認 Chrome 已安裝，或手動開啟以下網址:');
    console.log(url);
    process.exit(1);
  }
  console.log('Chrome 已開啟');
});
