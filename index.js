window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navBar_container')
    navBar.classList.toggle('sticky', window.scrollY > 0);
});

let QuemSomosTimeLine = new TimelineMax();
let NossaHistoriaLine = new TimelineMax();

const controller = new ScrollMagic.Controller();

QuemSomosTimeLine.from('.backText--quem-somos', .2, { x: -70, opacity: 0 });
QuemSomosTimeLine.from('#quem_somos_text', 1, { x: 70, opacity: 0 });
NossaHistoriaLine.from('.backText--nossa-historia', .2, { x: 70, opacity: 0 });
NossaHistoriaLine.from('#nossa_historia-text', 1, { x: -70, opacity: 0 });

const QuemSomosScene = new ScrollMagic.Scene({
    triggerElement: "#QuemSomos",
}).setTween(QuemSomosTimeLine).addTo(controller);


const NossaHistoriaScene = new ScrollMagic.Scene({
    triggerElement: "#NossaHistoria",
}).setTween(NossaHistoriaLine).addTo(controller);




/*

ScrollTimeLine.from('span', 1, { width: 0}, "=-.5");
ScrollTimeLine.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
ScrollTimeLine.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

{
    onUpdate: () => {
        tl.progress();
        console.log(tl.progress());
    }
}

new ScrollMagic.Scene({
  triggerElement: "blockquote"
}).setPin("#QuemSomos")
  .setTween(tl2)
        .addTo(controller);
            triggerHook: "onLeave",
    duration: "100%"


*/
