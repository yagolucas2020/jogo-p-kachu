const pikachu = document.querySelector('.pikachu');
const buraco = document.querySelector('.buraco');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {

        pikachu.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const buracoPosition = buraco.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '')

    console.log(pikachuPosition);

    if (buracoPosition <= 100 && buracoPosition > 0 && pikachuPosition < 80) {

        buraco.style.animation = 'none';
        buraco.style.left = `${buracoPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;

        pikachu.src = './imagem/fim.png';
        pikachu.style.width = '75px'
        pikachu.style.marginLeft = '25px'



        clearInterval(loop);

    }

}, 10);





document.addEventListener('keydown', jump);