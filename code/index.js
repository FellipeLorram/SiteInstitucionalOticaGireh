import { VerMaisArmacoes } from './Armacoes/ArmacoesSection.js';
import { VerMaisLentes } from './Lentes/LentesSection.js'
import { VerMaisPerguntasFrequentes } from './Perguntas Frequentes/PerguntasFrequenteSection.js';

// Maps
var script = document.createElement('script');
script.src =
    'https://maps.googleapis.com/maps/api/js?libraries=places,visualization&key=AIzaSyB8OyKEhDjxPRd55JI5e25NvPFYwfa3AUk&v=weekly&callback=initMap';
script.async = true;
window.initMap = function () {
    const mapCaju = new google.maps.Map(document.getElementById("map_caju"), {
        center: { lat: -22.881212831181884, lng: -43.228010456483204 },
        zoom: 18,
    });


    const markerCaju = new google.maps.Marker({
        position: { lat: -22.881212831181884, lng: -43.228010456483204 },
        map: mapCaju,
    })

    const mapPinheiro = new google.maps.Map(document.getElementById("map_pinheiro"), {
        center: { lat: -22.8674477, lng: -43.2354215 },
        zoom: 18,
    });


    const markerPinheiro = new google.maps.Marker({
        position: { lat: -22.8674477, lng: -43.2354215 },
        map: mapPinheiro,
    })

    const mapBaixa = new google.maps.Map(document.getElementById("map_baixa"), {
        center: { lat: -22.881212831181884, lng: -43.228010456483204 },
        zoom: 18,
    });


    const markerBaixa = new google.maps.Marker({
        position: { lat: -22.881212831181884, lng: -43.228010456483204 },
        map: mapBaixa,
    })
};
document.head.appendChild(script);

window.addEventListener('scroll', () => {
    const iconDow = document.querySelector('.icon__dow a')
    iconDow.classList.toggle('hide', window.scrollY > 300);
});


// Criando as cenas de animação

const glassIcon = document.querySelector('.icon svg');
const iconConainer = document.querySelector('.icon__conatainer');

glassIcon.addEventListener('click', e => {
    glassIcon.parentElement.classList.add('with_glasses');

    setTimeout(() => {
        iconConainer.style.display = "none";
        document.querySelector('.container').classList.remove('blurred')
    }, 1000);
});

const intervalAnimation = setInterval(() => {
    if (glassIcon.parentElement.classList.contains('with_glasses')) {
        clearInterval(intervalAnimation)
        document.querySelector('.home__hero_title').textContent = '';
        document.querySelector('.home__hero_subtitle').textContent = '';

        const title = 'Ótica Girêh'
        const subTitle = 'Qualidade em visão.'
        let index = 0;
        let letter = '';

        const titleInerval = setInterval(() => {
            letter = title.slice(0, ++index);

            document.querySelector('.home__hero_title').textContent = letter;

        }, 50);

        setTimeout(() => {
            clearInterval(titleInerval);
            document.querySelector('.home__hero_title').classList.add('inactive')
            index = 0;

            const subTitleInterval = setInterval(() => {
                letter = subTitle.slice(0, ++index);

                document.querySelector('.home__hero_subtitle').textContent = letter;

            }, 50)
        }, 1200);
    }
}, 500)

const quemSomosText = `Desde de 2009, a <span class="blue__text">Ótica Girêh</span> é especializada em atendimento, 
buscando sempre conhecer, nos mínimos detalhes, <span class="red__text">a sua necessidade visual</span>, em busca de oferecer o que há de <span class="red__text">melhor</span>
no mercado ótico a <span class="red__text">preços que cabem no seu bolso. </span> <br>
<br>
A <span class="blue__text">Ótica Girêh</span> conta com três unidades em pontos estratégicos, onde pode reduzir custos e conseguentemente, 
<span class="red__text">reduzir os preços de seus produtos.</span>
`

let quemSomosTextIndex = 0;
let quemSomosTextLetter = '';

const sections = document.querySelectorAll('section');
const quemSomosTextContainer = document.querySelector('.quem__somos p')
const navBar = document.querySelector('.nav__bar');

const observer = new IntersectionObserver(
    (entries) => {
        const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

        if (visibleSection && visibleSection.target.id === 'QuemSomos') {
            setInterval(() => {
                quemSomosTextLetter = quemSomosText.slice(0, ++quemSomosTextIndex);
                quemSomosTextContainer.innerHTML = quemSomosTextLetter;

            }, 2);
        }

        if (visibleSection && visibleSection.target.id === 'produtos') {
            navBar.style.opacity = 0;
            navBar.style.zIndex = -10;
        } else {
            navBar.style.zIndex = 4;
            navBar.style.opacity = 1;
        }

        document.querySelectorAll('.nav__menu_items a').forEach(link => {
            if (visibleSection && link.dataset.href === visibleSection.target.id) link.style.display = 'none';
            else link.style.display = 'initial';
        });
    },
    { threshold: 0.7 }
);

setInterval(() => {
    sections.forEach((section) => observer.observe(section));
}, 500)


// Ver mais 
const produtosItens = document.querySelectorAll('.produtos_info_container--item');
produtosItens.forEach(item => item.addEventListener('click', e => {
    if (e.target.dataset.to === 'Armacoes') {
        VerMaisArmacoes.open();
        document.querySelector('#produtos').classList.remove('animation_section_produtos--backwards');
        document.querySelector('#produtos').classList.add('animation_section_produtos');
    }
    if (e.target.dataset.to === 'Lentes') {
        VerMaisLentes.open();
        document.querySelector('#produtos').classList.remove('animation_section_produtos--backwards');
        document.querySelector('#produtos').classList.add('animation_section_produtos');
    }
    if (e.target.dataset.to === 'Perguntas') {
        VerMaisPerguntasFrequentes.open();
        document.querySelector('#produtos').classList.remove('animation_section_produtos--backwards');
        document.querySelector('#produtos').classList.add('animation_section_produtos');
    }
}));

//Toggle Nav Bar
const navToogle = document.querySelector('.nav__bar--toggle');
const navMenu = document.querySelector('.nav__menu');
document.querySelectorAll('.nav__menu_items a').forEach(link => link.addEventListener('click', () => {
    navToogle.classList.toggle('close');

    if (navToogle.classList.contains('close')) navMenu.classList.add('active');
    else navMenu.classList.remove('active')
}));

navToogle.addEventListener('click', e => {
    if (e.target.classList.contains('nav__bar--toggle')) e.target.classList.toggle('close');
    else e.target.parentElement.classList.toggle('close')

    if (navToogle.classList.contains('close')) navMenu.classList.add('active');
    else navMenu.classList.remove('active')
});



