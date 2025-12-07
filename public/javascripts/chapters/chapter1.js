// 每個章節都是一個獨立的 class (類別)，用來封裝自己的所有功能
class Chapter1 {

    // constructor 是這個 class 的建構式，會在 sketch.js 中 "new Chapter1()" 時被執行
    constructor(noteImages) {
        // 在這裡定義這個場景專屬的變數
        this.coffeeLevel = 0;
        this.isMakingCoffee = false;

        // 紙條相關的變數
        this.noteImages = noteImages;      // 儲存從 sketch.js 傳來的圖片陣列
        this.selectedNoteImage = null;     // 用來存放「隨機選中的那張」圖片
        this.showNote = false;             // 控制是否顯示紙條

        this.fadeCount = 0;
        this.fadeSpeed = 0.01;
        this.fadeStatus = "Wait3s"; // Wait3s → Out → In → Done
        this.fadeTimer = 0;
    }

    // 每個 class 都需要有 draw() 函式，由 sketch.js 的主迴圈呼叫
    draw() {
        // --- 繪製畫面 ---
        background(230, 220, 210); // 咖啡廳背景色
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("劇情一：咖啡廳打工", width / 2, 50);
        text(`已完成咖啡: ${gameState.coffeeMade} / 5`, width / 2, 100);

        // 咖啡杯
        fill(255);
        rectMode(CORNER);
        rect(width / 2 - 50, height / 2, 100, 200);
        // 咖啡液面
        fill(101, 67, 33);
        rect(width / 2 - 50, height / 2 + 200, 100, -this.coffeeLevel);

        // --- 更新邏輯 ---
        if (this.isMakingCoffee) {
            this.coffeeLevel += 5;
            if (this.coffeeLevel >= 200) {
                this.isMakingCoffee = false;
                this.coffeeLevel = 0;
                gameState.coffeeMade++; // 修改 overallControl.js 中的全域狀態
                // 當咖啡滿 5 杯，且紙條尚未顯示時，執行一次隨機選擇
                if (gameState.coffeeMade >= 5 && !this.showNote) {
                    this.showNote = true;
                    this.selectedNoteImage = random(this.noteImages);
                }
            }
        }

        // 如果需要顯示紙條
        if (this.showNote) {
            // 畫一個半透明的背景模糊效果
            background(0, 0, 0, 150);

            // 如果選中的圖片存在
            if (this.selectedNoteImage) {
                imageMode(CENTER);
                image(this.selectedNoteImage, width / 2, height / 2, 900, 600);
            }

            this.fadeOut(2);
        }



    }

    // 處理這個場景的滑鼠點擊事件
    mousePressed() {
        // if (this.fadeStatus == "Done" && this.showNote) {

        //     goToChapter(2);
        // }

        // 如果不在顯示紙條，點擊就是開始沖咖啡
        if (gameState.coffeeMade < 5) {
            this.isMakingCoffee = true;
        }
    }


    fadeOut() {
        if (this.fadeStatus == "Wait3s") {
            if (this.fadeTimer == 0) {
                this.fadeTimer = millis();   // 第一次進來時記錄時間
            }
            if (millis() - this.fadeTimer >= 3000) {
                this.fadeStatus = "Out";
                this.fadeTimer = 0; // 用不到，清空
            }
            return; // 等待期間不做淡化
        }
        if (this.fadeStatus == "Out") {
            let colorA = color(0, 0);
            let colorB = color(0);
            let nowColor = lerpColor(colorA, colorB, this.fadeCount);
           
            noStroke();
            fill(nowColor);
            rect(0, 0, width, height);

            this.fadeCount += this.fadeSpeed;

            if (this.fadeCount >= 1 && this.fadeStatus == "Out") {
                this.fadeCount = 0;
                this.fadeStatus = "Done";
            } 
        }
        if (this.fadeStatus == "Done") {
            goToChapter(2);
        }
    }

}