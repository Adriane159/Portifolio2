let menuIcon = document.querySelector('#menu-icom');
let navbar = document.querySelector('navbar');
let sections = document.querySelector('section');
let navlLinks = document.querySelector('header nav a');


window.onscroll = ( => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =>sec.offserTop -150;
        let heigth = sec.offsetH
    })
})