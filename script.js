const pinguim = document.querySelector('.pinguim');
const pipe = document.querySelector('.pipe');

function pulo() {
    pinguim.classList.add('pulo');

    setTimeout(() => {

        pinguim.classList.remove('pulo');
    }, 700);
}

const loop = setInterval(() =>{

const pipePosition = pipe.offsetLeft;
const pinguimPosition = +window.getComputedStyle(pinguim).bottom.replace('px','');

console.log(pinguimPosition);

if (pipePosition <= 110 && pipePosition > 0 && pinguimPosition < 68){

pipe.style.animation = 'none';
pipe.style.left = `${pipePosition}px`

pinguim.style.animation = 'none';
pinguim.style.bottom = `${pinguimPosition}px`

pinguim.src = 'https://i.imgur.com/2jL2biB.png'
pinguim.style.width = '130px'


clearInterval(loop);


}

} ,10)



document.addEventListener('keydown', pulo);

