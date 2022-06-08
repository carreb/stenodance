const lyrics = ['i', 'have', 'been', 'trying', 'to', 'write', 'a', 'haiku', 'for', 'you', '-', '-', '-', '-', 'some', 'things', 'i', 'just', 'cant', 'do', 'maybe', 'youre', 'beyond', 'ancient', 'asian', 'poetry', 'or', 'maybe', 'its', 'just', 'me', 'i', 'have', 'been', 'trying', 'to', 'get', 'this', 'haiku', 'just', 'right', 'all', 'night', 'for', 'you', 'alright', 'im', 'through']

document.getElementById('currentLine').innerHTML = `<span class="currentword">${lyrics[0]}</span> ${lyrics[1]} ${lyrics[2]} ${lyrics[3]}`

let currentWord = 0

const userinput = document.getElementById('userinput')



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
                        document.getElementById('currentLine').innerHTML = `GG!`
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