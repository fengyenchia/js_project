class Chapter5 {

    constructor() {
        // 在這裡定義這個章節需要的所有變數
        // 例如：按鈕的位置、圖片物件、內部的計時器等等
    }

    draw() {
        // 在這裡畫出這個章節的所有畫面元素
        // 也可以在這裡處理每一幀都需要更新的邏輯
    }

    mousePressed() {
        // 在這裡處理這個章節專屬的滑鼠點擊事件
        // 例如：檢查滑鼠是否點在某個按鈕上
        
        // 當需要切換到下個場景時，就呼叫這個函式：
        // goToChapter(Y); // <-- 把 Y 換成目標章節的數字
        
        // 當玩家做出選擇時，記得記錄到 gameState 中：
        // gameState.playerChoices.pathHome = 'detour'; // (以chapter5為例)
    }

    keyPressed() {
        // 在這裡處理這個章節專屬的鍵盤事件 (如果需要的話)
    }
}