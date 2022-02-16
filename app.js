const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const navMenu = document.querySelector('.nav__menu');

    const headerH1 = document.querySelector('.header__h1');
    const arrow = document.querySelector('.header__arrow');

    burger.addEventListener('click',()=>{
        navMenu.classList.toggle('nav__menu--active');
        headerH1.classList.toggle('disappear');
        arrow.classList.toggle('disappear');
    });
}

navSlide();