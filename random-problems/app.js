const button = document.querySelector('button')

function toggle() {
    button.classList.toggle('altColor')
}


// toggle()

// console.log(button)

// 1. 
button.addEventListener('click', toggle)

// console.log(button)

// toggle with () is waiting to be called

// without () it is a anonymous function


// 2. 
// button.addEventListener('click', function () { // now a anonymous function
//     button.classList.toggle('altColor')
// }
//  )


// 3. 
//  button.addEventListener('click',  ()  => { // now a anonymous function  // arrow function
//     button.classList.toggle('altColor')
// }
//  )

// toggle = () => {}  === callBack  asynchronous
// toggle() != () => {}  === will be used immediately