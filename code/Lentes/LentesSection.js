import { Question } from "../Questions.js";

export const VerMaisLentes = {
    open() {
        const html = `
        <section id="lentes" class="ver_mais_container lentes">
            <div class="ver_mais_container--header">
                <span id="btn_close" class="material-icons-outlined">arrow_back_ios</span>
                <div class="header--text">
                    <span>Lentes</span>
                </div>
            </div>
            <div class="container">
                <div data-to="boaLente" class="question">
                    <span>Como escolher uma boa lente?</span>
                    <span class="material-icons-outlined">arrow_forward_ios</span>
                </div>
                <div data-to="MateriaisLente" class="question">
                    <span>Quais os materiais disponíveis?</span>
                    <span class="material-icons-outlined">arrow_forward_ios</span>
                </div>
                <div data-to="TratamentosLentes" class="question">
                    <span>Quais os tratamentos disponíveis?</span>
                    <span class="material-icons-outlined">arrow_forward_ios</span>
                </div>
                <div data-to="LenteArmacao" class="question">
                    <span>A lente para minha armação</span>
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

            if (question.dataset.to === 'boaLente') {
                Question.open('Como escolher uma boa lente?', `
                    <p>
                        Um material adequado, tratamentos que combinem com seu dia a dia e com estilo da sua armação, são umas das características de uma boa lente.
                    </p>
                    
                    <h1>O Material Adequado</h1>
                    <p>Cada armação pede um tipo de material de lente.</p>
                    <p> 
                        <b>Armações Abertas (Aquelas em que as lentes não ficam totalmente involtas pela armação) e Armações balgriff:</b><br><br>
                        Por esse tipo de armação não proteger totalmente a lente, o material adequado seria o mais resistente possível, como o policarbonato,
                        resina 1.61, resina 1.67.<br><br>
                        
                        Armações abertas geralmente seguram as lentes com a ajuda de um fio de nylon. Um friso é feito involta de toda a lente, onde passa o 
                        nylon. Para aguentar esse friso, a lente precisa ser bastante resistente, pois se não, corre-se o risco de quebrar na hora da montagem.<br><br>
                        Já as Armações balgriff, seguram a lente através de parafusos furados na lentes...
                    </p>
                    <p>
                        <b>Armações fechadas:</b><br>
                        Esse tipo de armação suporta todos os materiais de lente. Por serem totalmente fechadas, essas armações oferecem toda a proteção para as lentes.
                    </p>
                    
                    
                    <h1>O Tratamento para você</h1>
                `);
            }

            if (question.dataset.to === 'MateriaisLente') {
                Question.open('Quais os materiais disponíveis?');
            };

            if (question.dataset.to === 'TratamentosLentes') {
                Question.open('Quais os tratamentos disponíveis?');
            };

            if (question.dataset.to === 'LenteArmacao') {
                Question.open('A lente para minha armação');
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