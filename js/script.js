// scrool section
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections= document.querySelectorAll('section');
let navlinks = document.querySelector("header nav a");
window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop -100;
        let heght=sec.offsetHeight;
        let id =sec.getAttribute('id')

        if(top >= offset && top < offset + heght){
            // active navabar
            navlinks.forEach(links =>{
                links.classList.romove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}