'use strict'
document.addEventListener('DOMContentLoaded', () => {
//    открытие строки поиска
    const search = document.querySelector('.header__input');
    const showSearch = document.querySelector('.header__btn');

    showSearch.addEventListener('click', () => {
        search.classList.toggle('header__input--active');
    })
    document.addEventListener('click', ev => {
        ev.target.closest('.header__search') ? '' : search.classList.remove('header__input--active');
    })

//    меню бургер
    const burgerWrapper = document.querySelector('.burger-menu__nav-wrapper');
    const burgerBtn = document.querySelector('.burger-menu__btn');
    const burgerClose = document.querySelector('.burger-menu__close');

    burgerBtn.addEventListener('click', ev => {
        burgerWrapper.classList.toggle('burger-menu__nav-wrapper--active');
        ev.currentTarget.classList.toggle('burger-menu__btn--active');
        document.body.classList.toggle('lock');
    })

    burgerClose.addEventListener('click', () => {
        burgerWrapper.classList.remove('burger-menu__nav-wrapper--active');
        burgerBtn.classList.remove('burger-menu__btn--active');
        document.body.classList.remove('lock');
    })

    burgerWrapper.addEventListener('click', ev => {
        if (!ev.target.closest('.burger-menu__nav')) {
            burgerWrapper.classList.remove('burger-menu__nav-wrapper--active');
            burgerBtn.classList.remove('burger-menu__btn--active');
            document.body.classList.remove('lock');
        }
    })
})
