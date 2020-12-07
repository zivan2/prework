let buttonGrow,
    buttonBlue,
    buttonFade,
    buttonReset,
    box,
    previousTime,
    reqID

window.onload = function() {
    buttonGrow = document.getElementById('button1')
    buttonBlue = document.getElementById('button2')
    buttonFade = document.getElementById('button3')
    buttonReset = document.getElementById('button4')
    box = document.getElementById('box')
}

function grow() {
    box.style.width = `${parseInt(box.style.width.substr(0, box.style.width.length - 2)) + 10}px`
    box.style.height = `${parseInt(box.style.height.substr(0, box.style.height.length - 2)) + 10}px`
}

function blue() {
    box.style.backgroundColor = 'blue'
}

function fade() {
    reqID = requestAnimationFrame(frame)
}

function frame(timestamp) {
    if (previousTime) {
        if (((timestamp - previousTime) > 50)) {
            if (parseFloat(box.style.opacity) <= 0) {
                previousTime = null
            } else {
                box.style.opacity = parseFloat(box.style.opacity) - 0.1
                previousTime = timestamp
                reqID = requestAnimationFrame(frame)
            }
        } else {
            reqID = requestAnimationFrame(frame)
        }
    } else {
        previousTime = timestamp
        reqID = requestAnimationFrame(frame)
    }
}

function reset() {
    cancelAnimationFrame(reqID)
    box.style.width = '150px'
    box.style.height = '150px'
    box.style.opacity = 1
    box.style.backgroundColor = 'orange'
}