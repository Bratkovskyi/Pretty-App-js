const board = document.querySelector('#board')
const colors = ['rgb(255,51,0)', 'rgb(153,0,51)', 'rgb(255,251,10)', 'rgb(204,51,51)', 'rgb(255,0,255)', 'rgb(102,51,102)', 'rgb(0,51,225)', 'rgb(51,255,255)', 'rgb(0,102,51)', 'rgb(51,255,51)']
const SQUARES_NUMBER = 5000


while (colors.length < 1000) {
    colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)

    function setColor(event) {
        const element = event.target
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(event) {
        const element = event.target
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}