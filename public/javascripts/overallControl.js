/*
 * =========================================
 * overallControl.js
 * -----------------------------------------
 * 這個檔案是專案的「大腦」或「劇本」。
 * 它只負責一件事：記錄遊戲中所有的「狀態」。
 * 例如：現在是第幾章、玩家做了什麼選擇等等。
 * 這裡不應該有任何 p5.js 的繪圖程式碼。
 * =========================================
 */

// 建立一個全域的 gameState 物件，用來儲存所有遊戲狀態
// 這是我們整個專案的「單一事實來源」
const gameState = {
    // 用數字 1-7 來對應你的 chapter1.js - chapter7.js
    currentChapter: 1, 
    
    // 劇情一需要的狀態
    coffeeMade: 0,
    
    // 用來儲存玩家在整個遊戲過程中所做的所有選擇
    playerChoices: {
        instagram: null, // 劇情二的選擇: 'block' 或 'reply'
        pathHome: null,  // 劇情五的選擇: 'normal' 或 'detour'
        door: null,      // 劇情六的選擇: 'open' 或 'dont_open'
    }
};

// 這是一個全域的「工具函式」，任何檔案都可以呼叫它來切換場景
// 這是唯一推薦用來改變 gameState.currentChapter 的方式
function goToChapter(chapterNumber) {
    console.log(`場景切換：從 Chapter ${gameState.currentChapter} 前往 Chapter ${chapterNumber}`);
    
    // 更新遊戲狀態
    gameState.currentChapter = chapterNumber;
    
    // 可以在這裡播放一個統一的轉場音效或效果
}