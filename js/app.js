const addH1 = () => {
    // create the element 
    const h1 = document.createElement('h1')
    // set the element's properties
    h1.innerText = 'Color Quilt'
    // append the element to DOM
    document.querySelector('body').append(h1)
}

const randRGB = () => {
    // console.log(Math.floor(Math.random() * 256))
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const randString = `rgb(${r}, ${g}, ${b})`
    console.log(randString)
    return randString
}

const generateQuilt = (numberOfSquares) => {
    // iterate 1001 times adding 1001 divs
    for (let i = 0; i <= numberOfSquares; i++) {
        // create an element 
        const square = document.createElement('div')
        // set the props
        square.innerText = i
        square.classList.add('square')
        square.style.backgroundColor = randRGB()
        // append the element
        document.querySelector('body').append(square)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addH1()
    generateQuilt(5000)
})