let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navlLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let heigth = sec.offsetHeigth;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth){
            navlLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +' ]').classList.add
                ('active')

                    

        

            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('b-x');
    navbar.classList.toggle('active');
}

const botaoVoltarAoTopo = document.getElementById("voltarAoTopo");

window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botaoVoltarAoTopo.style.display = "block";
    } else {
        botaoVoltarAoTopo.style.display = "none";
    }  
};

 botaoVoltarAoTopo.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
 };
