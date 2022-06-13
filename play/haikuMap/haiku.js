const lyrics = ['i', 'have', 'been', 'trying', 'to', 'write', 'a', 'haiku', 'for', 'you', '-', '-', '-', '-', 'some', 'things', 'i', 'just', 'cant', 'do', 'maybe', 'youre', 'beyond', 'ancient', 'asian', 'poetry', 'or', 'maybe', 'its', 'just', 'me', 'i', 'have', 'been', 'trying', 'to', 'get', 'this', 'haiku', 'just', 'right', 'all', 'night', 'for', 'you', 'alright', 'im', 'through', 'maybe', 'this', 'poem', 'was', 'lost', 'in', 'the', 'sauce', 'we', 'spilled', '-', '-', '-', '-', 'that', 'never', 'got', 'refilled', 'ive', 'never', 'thought', 'much', 'of', 'formulaic', 'verse', 'anyway', 'and', 'rhymes', 'are', 'not', 'my', 'forte', 'i', 'have', 'been', 'trying', 'to', 'get', 'this', 'haiku', 'just', 'right', 'all', 'night', 'for', 'you', 'alright', 'im', 'through', 'im', 'trying', 'not', 'to', 'try', 'too', 'hard', 'but', 'youre', 'hard', 'to', 'write', 'down', 'right', 'so', 'i', 'pen', 'these', 'trite', 'attempts', 'at', 'haikus', 'for', 'you', 'tonight', '-', '-', '-', '-', 'la', 'da', 'dee', 'diddum', 'lada', 'da', 'dum', 'doo', 'diddle', 'dum', 'doo', 'la', 'dee', 'do', 'there', 'thats', 'sufficient', 'i', 'wrote', 'a', 'haiku', 'for', 'you', 'well', 'i', 'tried', 'at', 'least', 'and', 'thats', 'not', 'so', 'bad', 'im', 'working', 'here', 'can', 'that', 'be', 'said', 'for', 'you', '-', '-', '-', '-', 'im', 'trying', 'not', 'to', 'try', 'too', 'hard', 'but', 'youre', 'hard', 'to', 'write', 'down', 'right', 'so', 'i', 'pen', 'these', 'trite', 'attempts', 'at', 'haikus', 'for', 'you', 'toniiight', 'words', 'dont', 'work', 'like', 'webster', 'says', 'they', 'trip', 'me', 'up', 'all', 'night', 'im', 'just', 'trying', 'to', 'write', 'for', 'you', 'but', 'youre', 'hard', 'to', 'write', 'down', 'right']

document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[0]}</span> ${lyrics[1]} ${lyrics[2]} ${lyrics[3]}`
// array of the alphabet
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let correctWords = 0
let incorrectWords = 0
let incorrectKeystrokes = 0
let correctKeystrokes = 0
let Health = 100
const amountofWords = lyrics.length
let currentWord = 0
// Check the percentage of words correct
function checkPercentageWords() {
    let percentage = (correctWords / amountofWords) * 100
    return percentage
}
// Check the percentage of keystrokes correct
function checkPercentageKeystrokes() {
    let percentage = (correctKeystrokes / incorrectKeystrokes) * 100
    return percentage
}

const userinput = document.getElementById('userinput')

// Prevent the user from typing the incorrect letter
userinput.addEventListener('keydown', function(e) {
    // Split the current word into an array of letters
    let currentWordArray = lyrics[currentWord].split('')
    // get the length of the user's input
    let userInputLength = userinput.value.length
    // Get which key the user pressed
    if (e.key !== currentWordArray[userInputLength] || !alphabet.includes(e.key)) {
        e.preventDefault()
        incorrectKeystrokes++
    }
})


// Sequence word when user finishes typing
userinput.addEventListener('input', function(e) {
    if (lyrics[currentWord] !== '-') {
       if (userinput.value.toLowerCase() == lyrics[currentWord]) {
        userinput.value = null
        currentWord++
        // Prevent the lyric from showing if it is undefined
        if (lyrics[currentWord + 3] == undefined) {
            document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]} ${lyrics[currentWord + 2]}`
            if (lyrics[currentWord + 2] == undefined) {
                document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]}`
                if (lyrics[currentWord + 1] == undefined) {
                    document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span>`
                    if (lyrics[currentWord] == undefined) {
                        keystrokeAccuracy = checkPercentageKeystrokes()
                        wordAccuracy = checkPercentageWords()
                        document.getElementById('currentLine').innerHTML = `GG!<br>Stats:<br>Word Accuracy: ${wordAccuracy}%<br>Keystroke Accuracy: ${keystrokeAccuracy}%<br>Final Health: ${Health}`
                        userinput.disabled = true
                    }
                }
            }
        } else {
            document.getElementById('currentLine').innerHTML = `<span class='currentword'>${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]} ${lyrics[currentWord + 2]} ${lyrics[currentWord + 3]}`
        }
    } 
    }
})

function nextWord() {
    if (lyrics[currentWord] === '-') {
        currentWord++
        return updateWordDisplay();
    }
    else {
        userinput.value = null
        currentWord++
        if (userinput.value.toLowerCase() == lyrics[currentWord]) {
            correctWords++
        }
        else {
            incorrectWords++
        }
        return updateWordDisplay();
    }
}

function updateWordDisplay() {
    if (lyrics[currentWord + 3] == undefined) {
            document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]} ${lyrics[currentWord + 2]}`
            if (lyrics[currentWord + 2] == undefined) {
                document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]}`
                if (lyrics[currentWord + 1] == undefined) {
                    document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[currentWord]}</span>`
                    if (lyrics[currentWord] == undefined) {
                        keystrokeAccuracy = checkPercentageKeystrokes()
                        wordAccuracy = checkPercentageWords()
                        document.getElementById('currentLine').innerHTML = `GG!<br>Stats:<br>Word Accuracy: ${wordAccuracy}%<br>Keystroke Accuracy: ${keystrokeAccuracy}%<br>Final Health: ${Health}`
                        userinput.disabled = true
                    }
                }
            }
        } else {
            document.getElementById('currentLine').innerHTML = `<span class='currentword'>${lyrics[currentWord]}</span> ${lyrics[currentWord + 1]} ${lyrics[currentWord + 2]} ${lyrics[currentWord + 3]}`
        }
}