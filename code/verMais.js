import { FilterOptions } from "./filterOption.js";

export const VerMaisArmacoes = {
    open() {
        const html = `
        <section class="ver_mais_container">
        <div class="ver_mais_container--header">
            <span id="btn_close" class="material-icons-outlined">arrow_back_ios</span>
            <div class="filter__button_container">
                <div class="filter__button">
                    <span class="material-icons-outlined">filter_alt</span>
                    <span class="filter__button-text">Filtrar</span>
                </div>
            </div>
        </div>
        <div class="filters__container">
        </div>
        <div class="container">
            <div class="informative_text">
                <div class="informative_text--container">
                    <p>
                        Todas as nossas armações são em materiais selecionados, como Acetato comum, Acetato
                        mazzucchelli,
                        Aluminio, Metal.<br>
                        Assim como marcas selecionadas, como Ana Hickman, Menina Bela, Oakley, Nike, Lacoste, Vogue e
                        mais.
                        Não trabalhamos com materias de brinquedo, como o plastico, por exemplo.
                    </p>
                    <div class="informative_text--close">
                        <span class="material-icons-outlined">close</span>
                    </div>
                </div>
            </div>
            
            <div class="ver_mais_content">
                <div class="foto_holder">
                    <img src="./style/images/IMG_20210414_095209.jpg" alt="armacao lacoste">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Lacoste.</p>
                        <p class="price">A partir de R$280</p>
                    </div>
                </div>
                <div class="foto_holder">
                    <img src="./style/images/IMG_20210414_095209.jpg" alt="armacao vogue">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Vogue.</p>
                        <p class="price">A partir de R$320</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;

        const template = document.createElement("template");
        template.innerHTML = html;


        const windownContainer = template.content.querySelector(".ver_mais_container");
        const btnClose = template.content.querySelector("#btn_close");
        const btnFilter = template.content.querySelector(".filter__button_container");
        const btnCloseInformativeText = template.content.querySelector(".informative_text--close");

        btnFilter.addEventListener('click', () => {
            FilterOptions.open();
        });

        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
            document.querySelector('#produtos').classList.remove('animation_section_produtos');
            document.querySelector('#produtos').classList.add('animation_section_produtos--backwards');
        });

        btnCloseInformativeText.addEventListener('click', () => document.querySelector('.informative_text').style.display = 'none');

        document.body.appendChild(template.content);
        document.body.classList.add('stop-scrolling');

    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer);
            document.body.classList.remove('stop-scrolling');
        })
    },
}
