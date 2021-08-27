// Animação da navBar

window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navBar_container')
    navBar.classList.toggle('sticky', window.scrollY > 0);
});

// Criando as cenas de animação

let QuemSomosTimeLine = new TimelineMax();
let NossaHistoriaLine = new TimelineMax();

const controller = new ScrollMagic.Controller();

QuemSomosTimeLine.from('.backText--quem-somos', .2, { x: -70, opacity: 0 });
QuemSomosTimeLine.from('#quem_somos_text', 1, { x: 70, opacity: 0 });
NossaHistoriaLine.from('.backText--nossa-historia', .2, { x: 100, opacity: 0 });
NossaHistoriaLine.from('#nossa_historia-text', 1, { x: -70, opacity: 0 });

const QuemSomosScene = new ScrollMagic.Scene({
    triggerElement: "#QuemSomos",
}).setTween(QuemSomosTimeLine).addTo(controller);


const NossaHistoriaScene = new ScrollMagic.Scene({
    triggerElement: "#NossaHistoria",
}).setTween(NossaHistoriaLine).addTo(controller);


// Setando a posiçao no site
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        if (visibleSection) link.classList.remove('active')
    });


    navLinks.forEach(link => {
        if (visibleSection && link.href.split('#')[1] == visibleSection.target.id) {
            link.classList.add('active')
        }
    });

}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
