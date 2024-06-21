const red = document.getElementById('btn-one')
const yellow = document.getElementById('btn-two')
const green = document.getElementById('btn-three')
const boxTwo = document.querySelector('.box_two')
const boxThree = document.querySelector('.box-three')
const boxFor = document.querySelector('.box-for')


red.addEventListener('click', () => {
    setTimeout(() => {
        red.style.opacity = 1
        boxTwo.innerHTML = `
          <div class="red_stop">
                <h1 class="stop">
                    To'xtang!
                </h1>
            </div>`
        setTimeout(() => {
            red.style.opacity = 0.5
            boxTwo.innerHTML = `""`
        }, 3000);
    }, 1000);

})

yellow.addEventListener('click', () => {
    setTimeout(() => {
        yellow.style.opacity = 1
        boxThree.innerHTML = `
           <div class="yellow">
                <h1 class="yellow-text">
                    Sabr qiling!
                </h1>
            </div>`
        setTimeout(() => {
            yellow.style.opacity = 0.5
            boxThree.innerHTML = `""`
        }, 3000);
    }, 1000);

})

green.addEventListener('click', () => {
    setTimeout(() => {
        green.style.opacity = 1
        boxFor.innerHTML = `
          <div class="green">
                <h1 class="green-text">
                    Oq yo'l!
                </h1>
            </div>`
        setTimeout(() => {
            green.style.opacity = 0.5
            boxFor.innerHTML = `""`
        }, 3000);
    }, 1000);

})