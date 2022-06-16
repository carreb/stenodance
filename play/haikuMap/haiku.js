const lyrics = ['i', 'have', 'been', 'trying', 'to', 'write', 'a', 'haiku', 'for', 'you', //'-', '-', '-', '-', 
'some', 'things', 'i', 'just', 'cant', 'do', 'maybe', 'youre', 'beyond', 'ancient', 'asian', 'poetry', 'or', 'maybe', 'its', 'just', 'me', 'i', 'have', 'been', 'trying', 'to', 'get', 'this', 'haiku', 'just', 'right', 'all', 'night', 'for', 'you', 'alright', 'im', 'through', 'maybe', 'this', 'poem', 'was', 'lost', 'in', 'the', 'sauce', 'we', 'spilled', //'-', '-', '-', '-',
'that', 'never', 'got', 'refilled', 'ive', 'never', 'thought', 'much', 'of', 'formulaic', 'verse', 'anyway', 'and', 'rhymes', 'are', 'not', 'my', 'forte', 'i', 'have', 'been', 'trying', 'to', 'get', 'this', 'haiku', 'just', 'right', 'all', 'night', 'for', 'you', 'alright', 'im', 'through', 'im', 'trying', 'not', 'to', 'try', 'too', 'hard', 'but', 'youre', 'hard', 'to', 'write', 'down', 'right', 'so', 'i', 'pen', 'these', 'trite', 'attempts', 'at', 'haikus', 'for', 'you', 'tonight', //'-', '-', '-', '-', 
'la', 'da', 'dee', 'diddum', 'lada', 'da', 'dum', 'doo', 'diddle', 'dum', 'doo', 'la', 'dee', 'do', 'there', 'thats', 'sufficient', 'i', 'wrote', 'a', 'haiku', 'for', 'you', 'well', 'i', 'tried', 'at', 'least', 'and', 'thats', 'not', 'so', 'bad', 'im', 'working', 'here', 'can', 'that', 'be', 'said', 'for', 'you', // '-', '-', '-', '-', 
'im', 'trying', 'not', 'to', 'try', 'too', 'hard', 'but', 'youre', 'hard', 'to', 'write', 'down', 'right', 'so', 'i', 'pen', 'these', 'trite', 'attempts', 'at', 'haikus', 'for', 'you', 'toniiight', 'words', 'dont', 'work', 'like', 'webster', 'says', 'they', 'trip', 'me', 'up', 'all', 'night', 'im', 'just', 'trying', 'to', 'write', 'for', 'you', 'but', 'youre', 'hard', 'to', 'write', 'down', 'right']

document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[0]}</span> ${lyrics[1]} ${lyrics[2]} ${lyrics[3]}`
// array of the alphabet
const song = new Audio('./song.mp3')
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const timings = [1563,1630,1670,1717,1780,1813,1892,1974,2008,2031,2285,2344,2366,2401,2451,2484,2566,2613,2653,2846,2899,2968,3229,3306,3343,3389,3422,3452,3526,3566,3605,3686,3717,3773,3818,3919,3956,4037,4073,4160,4189,4301,4390,4523,4704,4744,4812,4875,4909,4960,4987,5031,5098,5164,5374,5431,5474,5560,5604,5656,5716,5742,5806,5900,5964,6044,6322,6385,6407,6436,6468,6512,6550,6608,6643,6679,6763,6787,6854,6900,6998,7036,7124,7160,7243,7272,7386,7461,7574,7739,7799,7854,7906,7963,8020,8048,8184,8287,8316,8333,8369,8409,8464,8686,8741,8800,8884,8938,9027,9126,9215,9254,9275,9368,10592,10645,10685,10751,10818,10877,10913,10946,11064,11321,11362,11392,11435,11483,11559,11632,11724,11759,11792,11838,11888,11987,12011,12097,12110,12151,12169,12208,12238,12278,12304,12322,12347,12368,12453,12486,12508,12535,12549,12586,12617,12638,12752,12818,12865,12919,12977,13033,13061,13176,13225,13273,13316,13383,13436,13478,13694,13744,13815,13897,13952,14028,14150,14239,14288,14313,14418,14669,14731,14776,14839,14952,14991,15104,15142,15183,15243,15296,15359,15631,15676,15746,15792,15853,15905,15929,16058,16108,16155,16187,16228,16290,16374]

let correctWords = 0
let incorrectWords = 0
let incorrectKeystrokes = 0
let correctKeystrokes = 0
let Health = 100.0
let debugMode
const amountofWords = lyrics.length
let currentWord = 0
let currentTime = 0
let currentTimeInSeconds


const userinput = document.getElementById('userinput')

// Prevent the user from typing the incorrect letter
userinput.addEventListener('keydown', function(e) {
    // Split the current word into an array of letters
    let currentWordArray = lyrics[currentWord].split('')
    // get the length of the user's input
    let userInputLength = userinput.value.length
    // Get which key the user pressed
    if (e.key.toLowerCase() !== currentWordArray[userInputLength] || !alphabet.includes(e.key.toLowerCase())) {
        e.preventDefault()
        healthCalculation(-15)
        incorrectKeystrokes++
    } else {
        correctKeystrokes++
        healthCalculation(0.25)
    }
})


// Sequence word when user finishes typing
userinput.addEventListener('input', function(e) {
    if (lyrics[currentWord] !== '-') {
       if (userinput.value.toLowerCase() == lyrics[currentWord]) {
        if (currentTime + 20 < timings[currentWord]) {
            userinput.value = ''
            healthCalculation(-33)
        } else {
            userinput.value = null
            currentWord++
            healthCalculation(2.5)
            updateWordDisplay()
        }
    } 
    }
})

function nextWord() {
    if (Health > 0) {
        if (lyrics[currentWord] === '-') {
        currentWord++
        return updateWordDisplay();
        }
        else {
            userinput.value = null
            currentWord++
            if (userinput.value.toLowerCase() == lyrics[currentWord]) {
                correctWords++
                healthCalculation(2)
            }
            else {
                incorrectWords++
                healthCalculation(-33)
            }
            return updateWordDisplay();
        }
    } else {
        Health = 0
        song.pause()
        userinput.disabled = true
        document.getElementById('currentLine').innerHTML = `yikes....<br>Stats:<br>Word Accuracy: %<br>Keystroke Accuracy: %<br>Final Health: ${Health}`
    }
    
}

function updateWordDisplay() {
    if (debugMode != undefined) {
        timings.push(currentTime)
    }
    if (lyrics[currentWord + 3] == undefined) {
            document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]} ${lyrics[currentWord + 2]}`
            if (lyrics[currentWord + 2] == undefined) {
                document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]}`
                if (lyrics[currentWord + 1] == undefined) {
                    document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span>`
                    if (lyrics[currentWord] == undefined) {
                        document.getElementById('currentLine').innerHTML = `GG!<br>Stats:<br>Word Accuracy: %<br>Keystroke Accuracy: %<br>Final Health: ${Health}`
                        userinput.disabled = true
                    }
                }
            }
        } else {
            document.getElementById('currentLine').innerHTML = `<span class='currentword'>${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]} ${lyrics[currentWord + 2]} ${lyrics[currentWord + 3]}`
        }
}

// make a sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = () => {
    userinput.disabled = true
    userinput.value = null
    sleep(3000).then(() => {
        song.play()
        userinput.disabled = false
        userinput.focus()
        song.volume = 0.3;
        timer = setInterval(function() {
            currentTime += 1
            console.log(currentTime)
        }, 10)
    })
};

// song.addEventListener('timeupdate', function() {
//     currentTime = song.currentTime
//     currentTimeInSeconds = currentTime * 1000
// })




const debugButton = document.getElementById('debug')

debugButton.addEventListener('click', function() {
    if (debugMode == undefined) {
        debugMode = true
        debugButton.innerHTML = 'Debug Mode: On'
    } else {
        debugMode = false
        debugButton.innerHTML = 'Debug Mode: Off'
    }
})


function healthCalculation(amt) {
    Health += amt
    if (Health > 100) {
        Health = 100
    }
    if (Health <= 0) {
        Health = 0
        song.pause()
        document.getElementById('currentLine').innerHTML = `yikes....<br>Stats:<br>Word Accuracy: %<br>Keystroke Accuracy: %<br>Final Health: ${Health}`
        userinput.disabled = true
    }
    healthBar.updateHealth(Health)
}


// Healthbar shenanigans
const canvas = document.getElementById('healthbar')
const context = canvas.getContext('2d')
const width = canvas.width = 1000;
const height = canvas.height = 100;

const healthBarWidth = 700;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2- healthBarHeight / 2;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, Health, "#23a6d5");

const frame = function() {
    context.clearRect(0, 0, width, height);
    healthBar.draw(context);
    requestAnimationFrame(frame);
}

// canvas.onclick = function () {
//     healthCalculation(-10)
// }

frame();


// Check if the player has entered the word during the threshold
wordChecker = setInterval(function() {
    if ((currentTime - 20) > timings[currentWord]) {
        nextWord()
    }
}, 1)