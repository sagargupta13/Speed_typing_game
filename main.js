window.addEventListener("load", init)

// calling DOM elements 
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const msg = document.querySelector("#message")


let score = 0
let time = 6

//array of words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
];

// creating main function 
function init() {
    showWord(words)
    wordInput.addEventListener("input", startMatch)
    setInterval(cowntdown, 1000)
    cowntdown()
}



function startMatch() {
    if (matchWord()) {
        showWord(words)
        wordInput.value = ''
        score++
        
    }
    scoreDisplay.innerHTML = score

}

// creating a function to match the words
function matchWord() {
    if (currentWord.innerHTML == wordInput.value) {
        msg.innerHTML = "Correct!!"
       
        
        return true;
    }
    msg.innerHTML = "Incorrect!!"
    return false
}

// creating show word function 
function showWord(words) {
    // console.log(words.length)
    const randomIdx = Math.floor(Math.random() * words.length)
    // console.log(randomIdx)
    currentWord.innerHTML = words[randomIdx]
}


// creating a function to show timmer
function cowntdown() {
    if (time > 0) {
        time--;
    }
    timeDisplay.innerHTML = time
    // if(time==0){
    //     msg.innerHTML="Game Over"
    // }master
}