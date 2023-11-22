const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    const rndCol2 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    e.target.style.backgroundColor = rndCol2;
    document.body.style.backgroundColor = rndCol;

    return rndCol
}

btn.addEventListener("click", bgChange);


const textBox = document.querySelector('#textBox')
const output = document.querySelector('#output')

textBox.addEventListener('keydown', (event) => {
    output.textContent = `You pressed '${event.key}.'`
})

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = bgChange();
});