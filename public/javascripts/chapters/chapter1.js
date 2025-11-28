// 每個章節都是一個獨立的 class (類別)，用來封裝自己的所有功能
class Chapter1 {

    // constructor 是這個 class 的建構式，會在 sketch.js 中 "new Chapter1()" 時被執行
    constructor() {
        // 在這裡定義這個場景專屬的變數
        this.title = "劇情一：咖啡廳打工";
        this.coffeeLevel = 0;
        this.isMakingCoffee = false;
        
        // 紙條相關的變數
        this.showNote = false;
        this.currentNoteIndex = 0;
        this.notes = [
            "你看起來心情不錯，加油",
            "昨天加班到 10 點，辛苦了",
            "買了你常吃的超商麵包，別挨餓囉"
        ];
    }

    // 每個 class 都需要有 draw() 函式，由 sketch.js 的主迴圈呼叫
    draw() {
        // --- 更新邏輯 ---
        if (this.isMakingCoffee) {
            this.coffeeLevel += 2;
            if (this.coffeeLevel >= 200) {
                this.isMakingCoffee = false;
                this.coffeeLevel = 0;
                // 修改 gameManager 中的全域狀態
                gameState.coffeeMade++; 
                if (gameState.coffeeMade >= 3) {
                    this.showNote = true;
                }
            }
        }

        // --- 繪製畫面 ---
        background(230, 220, 210); // 咖啡廳背景色
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text(this.title, width / 2, 50);
        text(`已完成咖啡: ${gameState.coffeeMade} / 3`, width / 2, 100);

        // 畫一個咖啡杯
        fill(255);
        rectMode(CORNER);
        rect(width / 2 - 50, height / 2, 100, 200);
        // 畫咖啡液面
        fill(101, 67, 33);
        rect(width / 2 - 50, height / 2 + 200, 100, -this.coffeeLevel);

        // 如果需要顯示紙條
        if (this.showNote) {
            fill(255, 255, 220, 200); // 帶透明度的黃色背景
            rectMode(CENTER);
            rect(width / 2, height / 2, 500, 300);
            fill(0);
            textSize(28);
            text(this.notes[this.currentNoteIndex], width / 2, height / 2);
            textSize(16);
            text("(點擊繼續)", width/2, height/2 + 100);
        }
    }

    // 處理這個場景專屬的滑鼠點擊事件
    mousePressed() {
        console.log("Chapter 1 偵測到滑鼠點擊");

        if (this.showNote) {
            // 如果正在顯示紙條，點擊就換下一張
            this.currentNoteIndex++;
            if (this.currentNoteIndex >= this.notes.length) {
                // 紙條顯示完畢，呼叫全域函式切換到下一個場景
                goToChapter(2); 
            }
        } else {
            // 如果不在顯示紙條，點擊就是開始沖咖啡
            if (gameState.coffeeMade < 3) {
                this.isMakingCoffee = true;
            }
        }
    }
}