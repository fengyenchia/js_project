let fadeCount = 1;
let fadeSpeed = 0.01;
let fadeStatus = "in";
let to = "";

function fadeInOut(to) {
    let alpha = map(fadeCount, 0, 1, 0, 255);

    if (fadeStatus == "in") {
        fadeCount -= fadeSpeed;
        if (fadeCount <= 0) {
            fadeCount = 0;
            fadeStatus = "none"; // fade-in 完成
        }
    }
    else if (fadeStatus == "out") {
        fadeCount += fadeSpeed;
        if (fadeCount >= 1) {
            fadeStatus = "jump"; // fade-out 完成，跳下一章
        }
    }

    if (fadeStatus != "none") {
        noStroke();
        fill(0, alpha);
        rect(0, 0, width, height);
    }

    if (fadeStatus == "jump") {
        window.location.href = to;
    }
}
