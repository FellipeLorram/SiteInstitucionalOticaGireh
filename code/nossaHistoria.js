export const NossaHistoria = {
    open() {
        const html = `
        <section class="ver_mais_container">
            <div class="ver_mais_container--header">
                <span id="btn_close" class="material-icons-outlined">arrow_back_ios</span>
                <div class="header--text min">
                    <span>Nossa História</span>
                </div>
            </div>
            <div class="container">
                
            </div>
        </section>

        `;

        const template = document.createElement("template");
        template.innerHTML = html;


        const windownContainer = template.content.querySelector(".ver_mais_container");
        const btnClose = template.content.querySelector("#btn_close");

        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
            document.querySelector('#nossaHistoria').classList.remove('animation_section_produtos');
            document.querySelector('#nossaHistoria').classList.add('animation_section_produtos--backwards');
        });

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