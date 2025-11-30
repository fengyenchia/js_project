# 被監視的咖啡廳

本遊戲使用 Node.js、Express 與 p5.js 開發，探討數位足跡、網路隱私與跟蹤騷擾等議題。為「JavaScript 應用程式設計」課程的期末專題。

## 專案介紹

玩家扮演在咖啡廳打工的主角，透過一系列日常事件逐步發現自己被窺探與跟蹤，並在關鍵時刻做出抉擇，導向不同結局。

## 如何執行

1. 安裝依賴套件：
```bash
npm install
```

2. 啟動伺服器：
```bash
npm start
```

3. 開啟遊戲：
在瀏覽器前往 http://localhost:3000

## 團隊成員

- 應數四 陳怡臻
- 地政四 李昀芯
- 心理四 梁育禎
- 廣告三 馮妍嘉
- 廣告四 張雅媗

## 資料夾結構

```
FINAL_PROJECT/
│
├─ README.md
├─ bin/
├─ node_modules/
├─ public/
│  ├─ assets/
│  ├─ javascripts/
│  │  ├─ chapters/
│  │  │  ├─ chapter1.js
│  │  │  ├─ chapter2.js
│  │  │  ├─ chapter3.js
│  │  │  ├─ chapter4.js
│  │  │  ├─ chapter5.js
│  │  │  ├─ chapter6.js
│  │  │  └─ chapter7.js
│  │  ├─ overallControl.js
│  │  ├─ p5.min.js
│  │  ├─ p5.play.js
│  │  ├─ p5.sound.js
│  │  ├─ p5.sound.min.js
│  │  ├─ shape5.js
│  │  └─ sketch.js
│  ├─ stylesheets/
│  ├─ template/
│  ├─ 實用工具/
│  └─ index.html
├─ routes/
├─ .gitignore
├─ app.js
├─ package.json
└─ package-lock.json
```
