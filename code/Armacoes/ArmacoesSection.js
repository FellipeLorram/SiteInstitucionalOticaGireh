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
                <div data-marca="Lacoste" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/lacostePretaAberta.jpg" alt="armacao lacoste">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Lacoste.</p>
                        <p class="price">A partir de R$280</p>
                    </div>
                </div>
                <div data-marca="Fridon" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/fridonAzulVermelhaAcetato.jpg" alt="armacao fridon">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Fridon.</p>
                        <p class="price">A partir de R$220</p>
                    </div>
                </div>
                <div data-marca="Ana Hickmann" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/AnaMetalFechadoBranca.jpeg" alt="armacao Metal Fechado Branca">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Ana Hickmann.</p>
                        <p class="price">A partir de R$220</p>
                    </div>
                </div>
                <div data-marca="Channel" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/ChanelMarromTransparente.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Channel.</p>
                        <p class="price">A partir de R$280</p>
                    </div>
                </div>
                <div data-marca="Ana Hickmann" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/AnaMetalFechadoPreta.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Ana Hickmann.</p>
                        <p class="price">A partir de R$250</p>
                    </div>
                </div>
                <div data-marca="Dolce Gabbana" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/DGmarronAcetato.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Dolce & Gabbana.</p>
                        <p class="price">A partir de R$280</p>
                    </div>
                </div>
                <div data-marca="Dulcet" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/Dulcet1.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Dulcet.</p>
                        <p class="price">A partir de R$180</p>
                    </div>
                </div>
                <div data-marca="Dulcet" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/DulcetTransparente.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Dulcet.</p>
                        <p class="price">A partir de R$180</p>
                    </div>
                </div>
                <div data-marca="Oakley" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/oakleyAbertaPreta.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Oakley.</p>
                        <p class="price">A partir de R$240</p>
                    </div>
                </div>
                <div data-marca="Dulcet" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/DulcetRedondaAzul.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Dulcet.</p>
                        <p class="price">A partir de R$180</p>
                    </div>
                </div>
                <div data-marca="Oakley" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/oakleyPretaAberta.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Oakley.</p>
                        <p class="price">A partir de R$240</p>
                    </div>
                </div>
                <div data-marca="Ray Ban" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/raybanHexagonal.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Ray-Ban Hexagonal.</p>
                        <p class="price">A partir de R$240</p>
                    </div>
                </div>
                <div data-marca="Oakley" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/oakleyAbertaPVerde.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Oakley.</p>
                        <p class="price">A partir de R$240</p>
                    </div>
                </div>
                <div data-marca="Oakley" data-sex="masc" class="foto_holder">
                    <img src="./code/Armacoes/images/oakleyAbertaPRosa.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Oakley.</p>
                        <p class="price">A partir de R$240</p>
                    </div>
                </div>
                <div data-marca="Dulcet" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/DulcetTransparenteRedonda.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em acetato Dulcet.</p>
                        <p class="price">A partir de R$180</p>
                    </div>
                </div>
                <div data-marca="Ana Hickmann" data-sex="fem" class="foto_holder">
                    <img src="./code/Armacoes/images/AnaMetalFechadoPreta.jpeg" alt="armacao">
                    <div class="img_from">
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </div>
                    <div class="img_info">
                        <p>Armação em metal Ana Hickmann.</p>
                        <p class="price">A partir de R$250</p>
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
        const btnFilter = template.content.querySelector(".filter__button_container .filter__button");
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
