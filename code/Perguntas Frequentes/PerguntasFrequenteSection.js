import { Question } from "../Questions.js";
export const VerMaisPerguntasFrequentes = {
    open() {
        const html = `
        <section class="ver_mais_container lentes">
            <div class="ver_mais_container--header">
                <span id="btn_close" class="material-icons-outlined">arrow_back_ios</span>
                <div class="header--text">
                    <span>Perguntas frequentes</span>
                </div>
            </div>
            <div class="container">
                <div data-to="QuantoCusta" class="question">
                    <span>Quanto custa um óculos?</span>
                    <span class="material-icons-outlined">arrow_forward_ios</span>
                </div>
                <div data-to="ComoExame" class="question">
                    <span>Como é feito o exame?</span>
                    <span class="material-icons-outlined">arrow_forward_ios</span>
                </div>
                <div data-to="FundoDeOlho" class="question">
                    <span>Faz fundo de olho?</span>
                    <span class="material-icons-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </section>
        `;

        const template = document.createElement("template");
        template.innerHTML = html;


        const windownContainer = template.content.querySelector(".ver_mais_container");
        const btnClose = template.content.querySelector("#btn_close");
        const questions = template.content.querySelectorAll(".question");

        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
            document.querySelector('#produtos').classList.remove('animation_section_produtos');
            document.querySelector('#produtos').classList.add('animation_section_produtos--backwards');
        });

        document.body.appendChild(template.content);
        document.body.classList.add('stop-scrolling');

        questions.forEach(question => question.addEventListener('click', () => {

            if (question.dataset.to === 'QuantoCusta') {
                Question.open('Quanto custa um óculos?');
            }

            if (question.dataset.to === 'ComoExame') {
                Question.open('Como é feito o exame?');
            };

            if (question.dataset.to === 'FundoDeOlho') {
                Question.open('Faz fundo de olho?');
            };
        }));

    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer);
            document.body.classList.remove('stop-scrolling');
        })
    },
}