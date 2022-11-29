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
    // console.log(randString)
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

// const colorPalette = document.querySelector('#color-palette')
// const myPalette = document.querySelector('#my-palette')

const addColor = event => {
    console.dir(event.target.style.backgroundColor)
    const color = event.target.style.backgroundColor
    const newSquare = document.createElement('div')
    newSquare.classList.add('square')
    newSquare.style.backgroundColor = color
    document.querySelector('#my-palette').appendChild(newSquare)
}

const makePalette = () => {
    const colorPalette = document.querySelector('#color-palette')
    while (colorPalette.firstChild) {
        colorPalette.removeChild(colorPalette.firstChild)
    }
    for (let i = 0; i < 150; i++) {
        // create element
        const square = document.createElement('div')
        // set props
        square.classList.add('square')
        square.style.backgroundColor = randRGB()
        square.addEventListener('click', addColor)
        // append element
        colorPalette.appendChild(square)
    }
}

const makeGrid = () => {
    const grid = document.querySelector('#grid')
    // for (let i = 0; i < 64; i++) {
    //     // make a new box
    //     const box = document.createElement('div')
    //     // set the box's props
    //     box.classList.add('box')
    //     console.log(`is ${i} even? ${i % 2 === 0}`)
    //     // condition to evaluate ? result if true : result if false 
    //     box.style.backgroundColor = i % 2 === 0 ? 'red' : 'black'
    //     // append box to container
    //     grid.append(box)
    // }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            // make a new box
            const box = document.createElement('div')
            // set the box's props
            box.classList.add('box')
            console.log(`is ${i} even? ${i % 2 === 0}`)
            const evenOrOdd = j % 2 === 0 ? 1 : 0
            // condition to evaluate ? result if true : result if false 
            box.style.backgroundColor = i % 2 === evenOrOdd ? 'red' : 'black'
            // append box to container
            grid.append(box)
        }
    }
}

// PYRAMID BONUS
const generatePyramid = num => {
    const pyramid = document.querySelector('#pyramid')
  
    for (let i = 0; i <= num; i++) {
      const row = document.createElement('div')
      row.classList.add('row')
      for (let j = 0; j < i; j++) {
        const triangle = document.createElement('div')
        triangle.classList.add('triangle')
        row.appendChild(triangle)
      }
      pyramid.appendChild(row)
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    // const generate = document.querySelector('#generate')
    // generate.addEventListener('click', makePalette)
    // addH1()
    // generateQuilt(5000)
    // makePalette()
    makeGrid()
    generatePyramid(8)
})