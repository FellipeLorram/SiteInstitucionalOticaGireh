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

const quemSomosText = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi natus quidem minima cupiditate architecto
assumenda excepturi omnis saepe aspernatur recusandae perspiciatis nihil, voluptate dolor adipisci,
animi
non ipsum provident rem.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quos impedit debitis exercitationem
explicabo soluta voluptas esse optio earum inventore nulla nihil dolore veritatis dolorem porro
deserunt, eius incidunt at.`
let quemSomosTextIndex = 0;
let quemSomosTextLetter = '';

const sections = document.querySelectorAll('section');
const quemSomosTextContainer = document.querySelector('.quem__somos p')



const observer = new IntersectionObserver(
    (entries) => {
        const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
        if (visibleSection && visibleSection.target.id === 'QuemSomos') {
            setInterval(() => {
                quemSomosTextLetter = quemSomosText.slice(0, ++quemSomosTextIndex);

                quemSomosTextContainer.textContent = quemSomosTextLetter;

            }, 5);

        }
    },
    { threshold: 0.5 }
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

