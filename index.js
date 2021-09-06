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
    }, 300);
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
}, 200)
