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
                <div class="alguma__duvida--container">

                    <span class="alguma__duvida--text">Alguma duvida?</span>
                    <span class="alguma__duvida--text">Nos chame no whatsapp ou instagram</span>

                    <div class="fieldset__container">
                        <fieldset>
                            <legend><span class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></span></legend>
                            <a href="https://www.instagram.com/oticagireh/">@oticagireh</a>
                            <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                        </fieldset>
                        <fieldset>
                            <legend><span class="material-icons-outlined whatsapp">whatsapp</span></legend>
                            <a href="https://api.whatsapp.com/send?phone=5521965657508"class="info_text"><span>Caju:</span> (21)96565-7508</a>
                            <a href="https://api.whatsapp.com/send?phone=5521981950372"><span>Pinheiro:</span> (21)98195-0372</a>
                        </fieldset>
                    </div>
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
                Question.open('Quanto custa um óculos?', this._QuantoCustaOculos());
            }

            if (question.dataset.to === 'ComoExame') {
                Question.open('Como é feito o exame?', this._ComoEFeitoOExame());
            };

            if (question.dataset.to === 'FundoDeOlho') {
                Question.open('Faz fundo de olho?', `
                    <p>
                        O exame de vista é computadorizado, e faz sim fundo de olho.
                    </p>
                `);
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

    _QuantoCustaOculos() {
        return `
        <p>
        O preço dos óculos é a junção do preço da lente com o preço da armação, ou seja, vai depender da armação que você escolher e da lente que você escolher. <br><br>
       Existem muitos tipos de lentes, nos mais variados materiais. Tudo isso, junto com o seu grau, ditam o preço da lente.<br>
       Assim como existem muitos tipos de armações, nos mais variados materiais.
       </p>
       <h1>Materiais e tratamento das lentes</h1> 
        <h2>Materiais</h2>
       <ul>
       <li>Policarbonato</li>
       <li>Resina 1.61</li>
       <li>Resina 1.67</li>
       <li>Resina 1.70</li>
       <li>Resina 1.74</li>
       </ul>
       <h2>Tratamentos</h2>
       <ul>
        <li>Antirreflexo</li>
       <li>Antirreflexo Blue Cut</li>
       <li>Fotossensiveis</li>
       <li>Fotossensiveis com antirreflexo</li>
       <li>Fotossensiveis com antirreflexo Blue cut</li>
       </ul>
       <div class="alguma__duvida--container mt_large">

       <span class="alguma__duvida--text">Alguma duvida?</span>
       <span class="alguma__duvida--text">Nos chame no whatsapp ou instagram</span>

       <div class="fieldset__container">
           <fieldset>
               <legend><span class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></span></legend>
               <a href="https://www.instagram.com/oticagireh/">@oticagireh</a>
               <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
           </fieldset>
           <fieldset>
               <legend><span class="material-icons-outlined whatsapp">whatsapp</span></legend>
               <a href="https://api.whatsapp.com/send?phone=5521965657508"class="info_text"><span>Caju:</span> (21)96565-7508</a>
               <a href="https://api.whatsapp.com/send?phone=5521981950372"><span>Pinheiro:</span> (21)98195-0372</a>
           </fieldset>
       </div>
   </div>
        `;

    },

    _ComoEFeitoOExame() {
        return `
            <p>
                O exame de vista e computadorizado, faz fundo de olho, e mede a pressão ocular se precisar.<br><br>
                O exame feito pelo profissional mais adequado para a aferição de grau, o Optometrista.
            </p>
            <h1>Mas porque o Optometrista e não o oftalmologista?</h1>
            <p>
                O optometrista é um especialista encarregado dos cuidados com a visão que, diferentemente do oftalmologista, 
                não possui treinamento médico, embora faça estudos complexos por 5 anos sobre o olho humano para fornecer um atendimento 
                abrangente à visão que inclui detecção de problemas refrativos visuais.<br> <br> 

                Em outras palavras, o optometrista tem a função de:
                <ul>
                    <li> Detectar distúrbios da visão;</li>
                    <li> Identificar doenças oculares;</li>
                    <li>Determinar problemas de refração (como miopia, astigmatismo, visão cansada/presbiopia); </li>
                    <li>Oferecer a correção desses problemas, através de óculos, lentes de contato ou terapia e reeducação visual. </li>
                </ul>
            </p>
            <div class="alguma__duvida--container mt_large">

                <span class="alguma__duvida--text">Alguma duvida?</span>
                <span class="alguma__duvida--text">Nos chame no whatsapp ou instagram</span>

                <div class="fieldset__container">
                    <fieldset>
                        <legend><span class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></span></legend>
                        <a href="https://www.instagram.com/oticagireh/">@oticagireh</a>
                        <a href="https://www.instagram.com/oticagirehoficial/">@oticagirehoficial</a>
                    </fieldset>
                    <fieldset>
                        <legend><span class="material-icons-outlined whatsapp">whatsapp</span></legend>
                        <a href="https://api.whatsapp.com/send?phone=5521965657508"class="info_text"><span>Caju:</span> (21)96565-7508</a>
                        <a href="https://api.whatsapp.com/send?phone=5521981950372"><span>Pinheiro:</span> (21)98195-0372</a>
                    </fieldset>
                </div>
            </div>
            `
    }
}
