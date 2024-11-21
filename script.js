let menuIcon = document.querySelector('#menu-icom');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navlLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let heigth = sec.offsetHeigth;
        let id = sec.getAttibute('id');

        if(top >= offset && top < offset + heigth){
            navlLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a
                [href*=' + id +']').classList.add
                ('active')
        

            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('b-x');
    navbar.classList.toggle('active')
}