
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

        }, 150);

        setTimeout(() => {
            clearInterval(titleInerval);
            document.querySelector('.home__hero_title').classList.add('inactive')
            index = 0;

            const subTitleInterval = setInterval(() => {
                letter = subTitle.slice(0, ++index);

                document.querySelector('.home__hero_subtitle').textContent = letter;

            }, 150)
        }, 2300);
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
            navBar.style.zIndex = 2;
            navBar.style.opacity = 1;
        }
    },
    { threshold: 0.7 }
);

setInterval(() => {
    sections.forEach((section) => observer.observe(section));
}, 500)

// Maps

function initMap() {
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

}

// Ver mais 
const VerMaisArmacoes = {
    open() {
        const html = `
        <section class="ver_mais_container">
            <div class="close">
                <span class="material-icons-outlined">close</span>
            </div>
            <div class="container">
                <div class="informative_text">
                    <p>
                        Todas as nossas armações são em materiais selecionados, como Acetato comun, Acetato mazzucchelli, Aluminio, Metal <br>
                        Não trabalhamos com materias de brinquedo, como o plastico por exemplo.
                    </p>
                </div>
                <div class="ver_mais_content">
                    <div class="foto_holder">
                        <img src="" alt="">
                    </div>
                </div>
                </div>
        </section>
        `;

        const template = document.createElement("template");
        template.innerHTML = html;


        const windownContainer = template.content.querySelector(".ver_mais_container");
        const btnClose = template.content.querySelector(".close span");
        console.log(btnClose)
        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
        });

        document.body.appendChild(template.content);
        document.body.classList.add('stop-scrolling');
    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer)
            document.body.classList.remove('stop-scrolling')
        })
    },
}

const produtosItens = document.querySelectorAll('.produtos_info_container--item');
produtosItens.forEach(item => item.addEventListener('click', e => {
    if (e.target.dataset.to === 'Armacoes') VerMaisArmacoes.open()
}));
