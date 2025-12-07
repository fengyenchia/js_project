class Chapter2 {
    constructor() {
        this.something = false; // 待編輯
        // 在這裡定義這個章節需要的所有變數
        // 例如：按鈕的位置、圖片物件、內部的計時器等等
        
        this.fadeCount = 0;
        this.fadeSpeed = 0.01;
        this.fadeStatus = "In";
        this.fadeTimer = 0;
    }

    draw() {
        
        background(200, 220, 255);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("劇情二 IG 陌生追蹤", width / 2, 50);


        
        this.fadeIn();
        
        if(this.something == false){ // 假設這裡是某個條件，當達成時(true)開始淡出
            this.fadeOut();
        }
    }

    mousePressed() {
        // 在這裡處理這個章節專屬的滑鼠點擊事件
        // 例如：檢查滑鼠是否點在某個按鈕上

        // 當需要切換到下個場景時，就呼叫這個函式：
        // goToChapter(Y); // <-- 把 Y 換成目標章節的數字

        // 當玩家做出選擇時，記得記錄到 gameState 中：
        // gameState.playerChoices.instagram = 'reply'; // (以chapter2為例)
    }

    keyPressed() {
        // 在這裡處理這個章節專屬的鍵盤事件 (如果需要的話)
    }

    fadeIn() {
        if (this.fadeStatus == "In") {
            let colorA = color(0);
            let colorB = color(0,0);
            let nowColor = lerpColor(colorA, colorB, this.fadeCount);

            noStroke();
            fill(nowColor);
            rect(0, 0, width, height);

            this.fadeCount += this.fadeSpeed;

            if (this.fadeCount >= 1 && this.fadeStatus == "In") {
                this.fadeCount = 0;
                this.fadeStatus = "Wait3s"
            }
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
            goToChapter(3);
        }
    }

}