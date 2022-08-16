//

let words = [
    "hello",
    "kill",
    "red",
    "blue",
    "green",
    "sana",
    "flex",
    "Iran",
    "yalda",
    "usa",
];

let boxes = document.querySelector(".guessBox");
let remain = document.querySelector(".remain");
let wrong = document.querySelector(".wrong span");
let btn = document.querySelector(".button");

let randomWord = Math.floor(Math.random() * 10);

randomWord = words[randomWord];
let guessNumber = randomWord.length - 1;
// console.log(guessNumber);

remain.innerText = `Remaining guess : 0${guessNumber}`;

creatBox(randomWord);

function creatBox(word) {
    console.log(word);

    let wordarr = word.split("");
    let mainDiv = document.querySelector(".guessBox");

    wordarr.forEach((item) => {
        let box = document.createElement("div");
        box.classList = "box";
        mainDiv.appendChild(box);
    });
}
let s = 0;
document.addEventListener("keypress", function(e) {
    let letter = e.key;
    let k = 0;

    let boxes = document.querySelectorAll(".box");

    randomWord = randomWord.toLowerCase();
    let wordarr = randomWord.split("");

    for (let i = 0; i < wordarr.length; i++) {
        if (wordarr[i] === letter) {
            s += 1;

            boxes[i].innerText = letter;
            if (s === wordarr.length) {
                alert("You are Win");
            }
        } else {
            k++;

            if (k == wordarr.length) {
                remain.innerText = `Remaining guess : ${--guessNumber}`;
                wrong.innerText += `${letter},`;

                if (guessNumber === 0) {
                    alert("Game Over");
                }
            }
        }
    }
});

btn.addEventListener("click", function() {
    location.reload();
});