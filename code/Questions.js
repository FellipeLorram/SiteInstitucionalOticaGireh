export const Question = {
    open(titulo, content) {
        const html = `
        <section class="ver_mais_container">
            <div class="ver_mais_container--header">
                <span id="btn_close" class="material-icons-outlined">close</span>
                <div class="header--text min">
                    <span>${titulo}</span>
                </div>
            </div>
            <div class="container questionContent">
                ${content}
            </div>
        </section>

        `;

        const template = document.createElement("template");
        template.innerHTML = html;


        const windownContainer = template.content.querySelector(".ver_mais_container");
        const btnClose = template.content.querySelector("#btn_close");

        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
            document.querySelector('#lentes').classList.remove('animation_section_produtos');
            document.querySelector('#lentes').classList.add('animation_section_produtos--backwards');
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