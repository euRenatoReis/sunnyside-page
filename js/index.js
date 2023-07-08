

const botaoHamb = document.querySelector('.button-hamb');
const menuHamb = document.querySelector('.menu-hamburguer');
const darkBackg = document.querySelector('.dark-backg');



botaoHamb.addEventListener('click', () => {


    menuHamb.classList.toggle('on');
    darkBackg.classList.toggle('on')

    if (menuHamb.classList.includes('on')) {

        menuHamb.classList.remove('on')
        darkBackg.classList.remove('on')

        return

    } else {

        menuHamb.classList.toggle('on')

        darkBackg.classList.toggle('on')
    }


})