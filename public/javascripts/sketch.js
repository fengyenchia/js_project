/*
 * =========================================
 * 這個檔案是專案的「導演」。
 * 它負責 p5.js 的初始化，並像導演一樣，
 * 根據 overallControl 中的「劇本」，決定現在該讓哪個「演員」(Chapter) 上場表演。
 * =========================================
 */

// 這個變數將用來管理所有 Chapter 物件
let chapterManager;

// 建立一個物件來存放所有載入的資源，方便管理
const assets = {
    noteImage1: null,
    noteImage2: null,
    noteImage3: null,
};

// 用來在遊戲開始前載入所有資源
function preload() {   
    assets.noteImage1 = loadImage('assets/images/ch1/note_1.png');
    assets.noteImage2 = loadImage('assets/images/ch1/note_2.png');
    assets.noteImage3 = loadImage('assets/images/ch1/note_3.png');
    // 範例： assets.sfx_door = loadSound('assets/sounds/door_open.mp3');
}


function setup() {
    createCanvas(1440, 1024); 
    console.log("sketch.js 已啟動");

    // 將載入好的圖片資源打包成一個陣列
    // chapter1
    let noteImages = [assets.noteImage1, assets.noteImage2, assets.noteImage3];
    // chapter2
    // chapter3
    // chapter4
    // chapter5
    // chapter6
    // chapter7

    // 初始化所有 Chapter，並把它們儲存在 chapterManager 中
    // key (1, 2, 3...) 對應 gameState.currentChapter 的值
    chapterManager = {
        1: new Chapter1(noteImages),
        2: new Chapter2(),
        3: new Chapter3(),
        4: new Chapter4(),
        5: new Chapter5(),
        6: new Chapter6(),
        7: new Chapter7()
    };
}


// p5.js 的 draw() 函式，會以每秒 60 次的頻率不斷執行
function draw() {
    // 每一幀都先用黑色清空畫布
    background(0);

    // --- 導演的核心工作 ---
    // 1. 從 gameManager 讀取當前的章節編號
    const currentChapterNumber = gameState.currentChapter;

    // 2. 從 chapterManager 中找到對應的章節物件
    const activeChapter = chapterManager[currentChapterNumber];

    // 3. 如果找到了，就執行該章節自己的 draw() 函式，讓它畫出自己該有的畫面
    if (activeChapter) {
        activeChapter.draw();
    }
    else {
        fill(255);
        textAlign(CENTER);
        text(`錯誤：找不到 Chapter ${currentChapterNumber}`, width / 2, height / 2);
    }
}


// --- 事件分發 ---
// 這裡會攔截所有的滑鼠點擊，然後把它交給「當前活躍的」章節去處理
function mousePressed() {
    const activeChapter = chapterManager[gameState.currentChapter];
    // 確認該章節有 mousePressed 這個函式，再呼叫它
    if (activeChapter && typeof activeChapter.mousePressed === 'function') {
        activeChapter.mousePressed();
    }
}

function keyPressed() {
    const activeChapter = chapterManager[gameState.currentChapter];
     // 確認該章節有 keyPressed 這個函式，再呼叫它
    if (activeChapter && typeof activeChapter.keyPressed === 'function') {
        activeChapter.keyPressed();
    }
}