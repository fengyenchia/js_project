// fadeStatus 是從 fadeInOut.js 引入的全域變數

function setup() {
    createCanvas(1440, 1024);
}

function draw() {
    background(255);

    if (fadeStatus == "none") {
        gameContent();
    }

    fadeInOut("/07");
}

// -----------------------------------------
// 將遊戲內容放在gameContent()裡
function gameContent() {
    fill(255);
    stroke(0);
    circle(width/2, height/2, 200);


    if (mouseIsPressed && fadeStatus == "none") {
        fadeStatus = "out";
    }
}