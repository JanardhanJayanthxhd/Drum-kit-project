
let audiosToMusic = {
    "cl_hihat": new Audio('src/sounds/cl_hihat.wav'),
    "claves": new Audio('src/sounds/claves.wav'),
    "conga1": new Audio('src/sounds/conga1.wav'),
    "cowbell": new Audio('src/sounds/cowbell.wav'),
    "crashcym": new Audio('src/sounds/crashcym.wav'),
    "handclap": new Audio('src/sounds/handclap.wav'),
    "hi_conga": new Audio('src/sounds/hi_conga.wav'),
    "hightom": new Audio('src/sounds/hightom.wav'),
    "kick1": new Audio('src/sounds/kick1.wav'),
    "kick2": new Audio('src/sounds/kick2.wav'),
    "maracas": new Audio('src/sounds/maracas.wav'),
    "open_hh": new Audio('src/sounds/open_hh.wav'),
    "rimshot": new Audio('src/sounds/rimshot.wav'),
    "snare": new Audio('src/sounds/snare.wav'),
    "tom1": new Audio('src/sounds/tom1.wav')
}

let keysToAudio = {
    "a": "cl_hihat",
    "s": "claves",
    "d": "conga1",
    "f": "cowbell",
    "g": "crashcym",
    "h": "handclap",
    "j": "hi_conga",
    "k": "hightom",
    "l": "kick1",
    "q": "kick2",
    "w": "maracas",
    "e": "open_hh",
    "r": "rimshot",
    "t": "snare",
    "y": "tom1"
}

function playSound(drum) {
    let audio = audiosToMusic[drum]
    audio.play()
}

let buttons = document.querySelectorAll('button')

buttons.forEach(
    (element) => element.addEventListener("click", () => {
        let drumName = element.getAttribute('value')
        playSound(drumName)
        animateButton(element)
    })
)

function getButtonByKey(key) {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText.toLowerCase() === key) {
            return buttons[i]
        }
    }
}

function animateButton(button) {
    button.classList.add('btn-hover')
    setTimeout(() => {
        button.classList.remove('btn-hover')
    }, 100)
}

document.addEventListener("keydown", function(event) {
    let songName = keysToAudio[event.key]
    let currentButton = getButtonByKey(event.key)

    if (songName !== undefined) {
        playSound(songName)
        animateButton(currentButton)
    }
})
