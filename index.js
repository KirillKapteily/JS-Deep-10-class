// // Will run first
// console.log("First log");
// setTimeout(() => {
// // Will run last, after 2000 milliseconds
// console.log("Second log");
// }, 2000);
// // Will run second
// console.log("Third log");

//1
let timeDisplay = document.querySelector(".timeDisplay");
let startBtn = document.querySelector(".startBtn");
let time = 0;
let startTimer = () => {
    setInterval(() => {
        time++;
        timeDisplay.textContent = time;
        console.log(time);

    }, 1000);
}

startBtn.addEventListener("click", startTimer)

//2
let colorBox = document.querySelector(".colorBox");

// setInterval(() => {
//     function getRandomHex() {
//         return `#${getRandomColor()}`;
//     }
//     function getRandomColor() {
//         let r = Math.floor(Math.random() * 256).toString(16)
//         let g = Math.floor(Math.random() * 256).toString(16)
//         let b = Math.floor(Math.random() * 256).toString(16)
//         return `${r}${g}${b}`
//     }
//     console.log(getRandomHex());

//     colorBox.style.backgroundColor = getRandomHex();
// }, 3000);

//3
// let textDisplay = document.querySelector(".textDisplay");
// setInterval(() => {
// let texts = ["Hello!", "Hallo!", "Hola!", "こんにちは!"];
// let randomNumber = Math.floor(Math.random() * texts.length);
// textDisplay.textContent = texts[randomNumber];
// }, 2000)

//4
let delayedMessage = document.querySelector(".delayedMessage");
let delayedTextMessage = "It was delayed"

setTimeout(() => {
    let getDelayedText = () => {
        let gotten = delayedTextMessage;
        console.log(gotten);
    }

    getDelayedText();
    // delayedMessage.textContent = getDelayedText();
}, 1000);

//5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let printNumbers2 = (from, to) => {
    let nowNum = from;
    function run() {
        console.log(nowNum);
        if (nowNum < to) {
            nowNum++
            setTimeout(run, 1000);
        }
    }
    run()
}

let printNumbers = (from, to) => {
    let nowNum = from;
    const runningInterval = setInterval(() => {
        console.log(nowNum);
        if (nowNum == to) {
            clearInterval(runningInterval);
        }
        nowNum++
    }, 1000);

}
printNumbers2(1, 19)

//6
let changingBlock = document.querySelector(".changingBlock");
let chancgeBlock = (backColor) => {
    let nowColor = backColor;
    function run() {
        console.log(nowColor);
        let colors = ["red", "blue", "yellow", "lightgreen", "green", "purple"];
        if (nowColor) {
            let randomNumber = Math.floor(Math.random() * colors.length);
            changingBlock.style.backgroundColor = colors[randomNumber];
            setTimeout(run, 1000);
        }
    }
    run();
}

// chancgeBlock(true);

//7
let slides = document.querySelector(".slides");
let slide = document.querySelector(".slide");
// let slide1 = document.querySelector(".1");
// let slide2 = document.querySelector(".2");
// let slide3 = document.querySelector(".3");

let chancgeImg = (img) => {
    let nomImg = img;
    function run() {
        console.log(nomImg);
        let images = ["fall.jpeg", "cool.png", "sea.jpg"];
        if (nomImg) {
            let randomNumber = Math.floor(Math.random() * images.length);
            slide.innerHTML = `<div class="slide"><img src="${images[randomNumber]}" alt="fall" width="300"></div>`
            setTimeout(run, 1000);
        }
    }
    run();
}

chancgeImg(true)