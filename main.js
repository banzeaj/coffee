
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =()=>{

    search.classList.toggle('active');
    narbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick =()=>{

    navbar.classList.toggle('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle.toggle('shadow',window.scrollY >0);
});