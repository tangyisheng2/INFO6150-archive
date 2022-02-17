"use strict";
console.log("Hello World!");

const navbarItems = document.querySelectorAll('.menu')
console.log(navbarItems);

for (let navbarItem of navbarItems) {
    navbarItem.addEventListener('click', () => {
        navbarItem.toggleAttribute('expand')
    })
}

const toggleMenu = () => navbarItems.forEach((navbarItem) => navbarItem.toggleAttribute('noshow'));