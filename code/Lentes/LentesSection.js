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
                Question.open('Como escolher uma boa lente?', this._BoaLente());
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

    _BoaLente() {
        return `
        <p >Um material adequado,
        tratamentos que combinem com seu dia a dia e com estilo da sua armação,
        são características de uma boa lente.</p>

    <h1>O Material Adequado</h1>
    <p>Cada armação pede um tipo de material de lente.</p>
    <p>
        <b>Armações Abertas e Armações balgriff:</b><br><br>
        Por esse tipo de armação não proteger totalmente a lente, o material adequado seria o mais resistente
        possível, como o policarbonato,
        resina 1.61, resina 1.67.<br><br>

        Armações abertas geralmente seguram as lentes com a ajuda de um fio de nylon. Um friso é feito em volta
        de toda a lente, onde passa o
        nylon. Para aguentar esse friso, a lente precisa ser bastante resistente, pois se não, corre-se o risco
        de quebrar na hora da montagem.<br><br>
    </p>

    <div class="img_container_lentes_section b">
        <div class="img">
            <img class="img_lentes_section" src="./code/Armacoes/images/oakleyPretaAberta.jpeg" alt="armacao">
            <p>Armação aberta</p>
        </div>
        <div class="img">
            <img class="img_lentes_section" src="./code/Armacoes/images/oakleyPretaAberta.jpeg" alt="armacao">
            <p>Armação balgriff</p>
        </div>
    </div>

    <p>
        Já as Armações balgriff,
        seguram a lente através de parafusos fixados na própia lente,
        causando assim a necessidade da sua resistência.
    </p>

    <p><b>Armações fechadas:</b><br><br>
        Esse tipo de armação suporta todos os materiais de lente.
        Por serem totalmente fechadas, essas armações oferecem uma proteção a mais para a lente, já que as
        mesmas não correm o risco de
        acabarem batendo, ou esbarrando suas bordas. <br><br>

        Lentes em resina comum (1.56) são as mais utilizadas nos casos de armações fechadas. <br><br>

    </p>
    <div class="img_container_lentes_section b">
        <div class="img">
            <img class="img_lentes_section" src="./code/Armacoes/images/oakleyPretaAberta.jpeg" alt="armacao">
            <p>Fechada em metal</p>
        </div>
        <div class="img">
            <img class="img_lentes_section" src="./code/Armacoes/images/DulcetRedondaAzul.jpeg" alt="armacao">
            <p>Fechada em acetato</p>
        </div>
    </div>

    <p>
        Existem outros fatores, como o seu grau em relação ao tamanho de sua armação, que alterariam o tipo de sua lente.
        Caso você tenha um grau alto de miopia, por exemplo, já não é aconselhavel a escolha de armações grandes.
    </p>

    <h1>O Tratamento para você</h1>
    <p>
        Tratamentos são como adicionais que colocamos na lente, camadas a mais de proteção, ou, que ajudam na estética do seu óculos.
        <b class="minor_text">(Para mais detalhes olhe a seção de tratamentos disponiveis.)</b><br>
    </p>

    <p>A primeira pergunta que você deve se fazer é, "como é o meu dia a dia?".<br> Você fica muito no celular, computador, ou aparelhos que geram luz artificial?
        Você fica muito tempo exposto a luz do sol?<br>
        Tudo isso dita como deve ser sua lente. Se você fica muito exposto a luz artificial, tratamentos antirreflexo seriam o ideal para você, tanto o comum quanto o
        Blue Cut. Agora, se você fica muito exposto ao sol, ou a luz do sol te incomoda, tratamentos fotosensíveis seriam o ideal para você.<br><br>
        
        <b>O sol não me incomoda, porém, fico muito tempo no celular. Qual antirreflexo escolher?</b><br><br>
        
        O antirreflexo Blue cut é ideal para aqueles que ficam muito tempo expostos a luz artificial. Esse tipo de lente bloqueia a luz azul nociva que sai de tais aparelhos,
        além de proporcionarem um conforto a mais para a sua visão.<br>
        Essas lentes foram desenvolvidas especialmente para bloquear a luz UV nociva, tanto a que sai do sol quanto as artificiais. São famosas por serem uma espécie de óculos de sol,
        porém, sem a necessidade de escurecer.<br><br>

        <b>O sol não me incomoda, não fico muito tempo no celular, porém, não acho legal todo aquele brilho na lente. Qual antirreflexo escolher?</b><br><br>

        Nesse caso, o antirreflexo comum já supriria sua necessidade. O papel do antirreflexo é eliminar os reflexos presente nas lentes sem tratamento (ou lentes brancas).
        </p>
        <div class="img_container_lentes_section b">
            <div class="img">
                <img class="img_lentes_section" src="./code/Lentes/images/lente_sem_ar.jpeg" alt="armacao">
                <p>Sem antirreflexo</p>
            </div>
            <div class="img">
                <img class="img_lentes_section" src="./code/Lentes/images/lente_com_ar.jpeg" alt="armacao">
                <p>Com antirreflexo</p>
            </div>
        </div>
        <p>
        <b>O sol me incomoda, e passo muito tempo no celular. Qual lente escolher?</b><br><br>
        Lentes fotossensiveis, são as famosas lentes que escurecem no sol. Esse tipo de lente tem a habilidade de escurecer em ambientes com alta 
        incidência de luz UV, a luz prejudicial que sai do sol, e de clarear em ambientes com pouca incidência de UV. 
        Essas lentes são essenciais para quem tem sensibilidade a luz do sol, além de proporcionarem uma 
        experiência 2 em 1, onde você tem um óculos de sol e um óculos comum na mesma lente.
    </p>
    <p>
        A lente ideal para todos seria aquela que mais protege, no caso lentes fotossensiveis com o tratamento blue cut, porém,
        se no seu dia a dia, você não sente a necessidade de toda a proteção, você pode escolher aquela que melhor se adapta as suas necessidades.
    </p>

        `;
    }
}
