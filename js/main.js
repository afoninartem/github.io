(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

//BURGER HANDLER 

(function(){
    const burgerItem = document.querySelector('.burger');
    const exit = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    exit.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    })
}());