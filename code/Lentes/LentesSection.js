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

            if (question.dataset.to === 'boaLente') {
                Question.open('Como escolher uma boa lente?', this._BoaLente());
            }

            if (question.dataset.to === 'MateriaisLente') {
                Question.open('Quais os materiais disponíveis?', this._MateriaisDisponiveis());
            };

            if (question.dataset.to === 'TratamentosLentes') {
                Question.open('Quais os tratamentos disponíveis?', this._TratamentosDisponiveis());
            };

            if (question.dataset.to === 'LenteArmacao') {
                Question.open('A lente para minha armação', this._LenteParaMinhaArmção());
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
            <img class="img_lentes_section" src="./code/Lentes/images/ArmaçãoAberta.jpeg" alt="armacao">
            <p>Armação aberta</p>
        </div>
        <div class="img">
            <img class="img_lentes_section" src="./code/Lentes/images/ArmaçãoBalgriff.jpeg" alt="armacao">
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
        <br><br>
        <p>
        <b>O sol me incomoda, e passo muito tempo no celular. Qual lente escolher?</b><br><br>
        Lentes fotossensiveis, são as famosas lentes que escurecem no sol. Esse tipo de lente tem a habilidade de escurecer em ambientes com alta 
        incidência de luz UV, a luz prejudicial que o sol emiti, e de clarear em ambientes com pouca incidência de UV. 
        Essas lentes são essenciais para quem tem sensibilidade a luz do sol, além de proporcionarem uma 
        experiência 2 em 1, onde você tem um óculos de sol e um óculos comum na mesma lente.
        <br>Para quem tem sensibilidade a luz do sol, e fica muito tempo no celular e aparelhos que emitem luz UV, o ideal seriam lentes Fotossensiveis
        com o antirreflexo Blue Cut.
    </p>
    <div class="last_info">
        <p>
            A lente ideal para todos seria aquela que mais protege, no caso lentes fotossensiveis com o tratamento blue cut, porém,
            se no seu dia a dia, você não sente a necessidade de toda a proteção, você pode escolher aquela que melhor se adapta as suas necessidades.
        </p>
    </div>
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
                <a href="https://api.whatsapp.com/send?phone=5521965657508"class="info_text">Caju: <u>(21)96565-7508</u></a>
                <a href="https://api.whatsapp.com/send?phone=5521981950372">Pinheiro: <u>(21)98195-0372</u></a>
            </fieldset>
        </div>
    </div>

        `;
    },

    _MateriaisDisponiveis() {
        return `
            <p>
                A escolha do material adequado é muito importante para o resultado final do seus óculos. É o material que dita se sua lente vai ficar
                grossa ou fina, resistente ou frágil, se vai arranhar com facilidade ou não.
                <br><br>
                Existem muitos tipos de materias, de forma básica, são alguns deles: Resina Comum, Policarbonato, 
                Resina 1.61, Resina 1.67, Resina 1.70, etc... 

            </p>

            <h1>O indice de refração</h1>
            <p>
               O indice de refração é esse numerozinho que vem logo após a lente. mas o que isso significa? Esse número diz respeito a espessura da lente, quanto 
               maior esse número mais fina é a lente, quanto menor, mais grossa. 
            </p>

            <h1 class="mt_large">Resina Comum</h1>
            <div class="card_info_lentes">
                <div class="card_info_lentes--body">
                    <div class="atributo">
                        <span class="card_info_lentes--body--text">Resistência</span>
                        <div class="card_info_lentes--body--atributo">
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                        </div>
                    </div>
                    <div class="atributo">
                        <span class="card_info_lentes--body--text">Transparência</span>
                        <div class="card_info_lentes--body--atributo">
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                        </div>
                    </div>
                    <div class="atributo">
                        <span class="card_info_lentes--body--text">Espessura</span>
                        <div class="card_info_lentes--body--atributo">
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                            <span class="fill not"></span>
                        </div>
                    </div>
                </div>
                <div class="card_info_lentes--footer">
                    <span>Indice de refração</span>
                    <span>1.49 ou 1.50 ou 1.56</span>
                </div>
            </div>
            <p>
                A resina comum ou resina 1.56 é muito utilizada em armações fechadas e em graus não muito altos (Acima de 3 de miopia). 
                O material de resina é um dos materiais mais transparntes para a lente, porém, a resina comum não é tão resistente
                quanto as outras, o que impede de ser afinada ao máximo. <br><br>
                Por ser mais frágil, esse material não é recomendado para armações abertas ou armações furadas, pois corre-se o risco de quebrar com facilidade 
            </p>
            
            <h1 class="mt_large">Policarbonato</h1>
            <div class="card_info_lentes">
            <div class="card_info_lentes--body">
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Resistência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Transparência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Espessura</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
            </div>
            <div class="card_info_lentes--footer">
                <span>Indice de refração</span>
                <span>1.59</span>
            </div>
        </div>
            <p>
                O Policarbonato é um dos materiais mais resistente, porém perde em transparência. Pode ser usado em qualquer tipo de armação, desde as furadas até as fechadas.
                Por ser mais resistente que a resina comum, ela permite chegar a um melhor resultado final no quesito espessura, sendo recomendada para graus entre 2 e 4.
                Seu indice de refração é 1.59.
            </p>

            <h1 class="mt_large">Resina 1.61</h1>
            <div class="card_info_lentes">
            <div class="card_info_lentes--body">
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Resistência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Transparência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Espessura</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
            </div>
            <div class="card_info_lentes--footer">
                <span>Indice de refração</span>
                <span>1.61</span>
            </div>
        </div>
            <p>
                Com um indice de refração maior do que a do policarbonato, e da "familia" das resinas, a resina 1.61 é resistente, transparente e também pode ir em qualquer 
                armação. Recomendado para graus entre 3 e 5.
            </p>
            <h1 class="mt_large">Resina 1.67</h1>
            <div class="card_info_lentes">
            <div class="card_info_lentes--body">
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Resistência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Transparência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Espessura</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
            </div>
            <div class="card_info_lentes--footer">
                <span>Indice de refração</span>
                <span>1.67</span>
            </div>
        </div>
            <p>
                Igual a resina 1.61, porem, com indice de refração maior, a possibilidade de afinar aumenta. Recomendado para graus entre 5 e 7.
            </p>
            <h1 class="mt_large">Resina 1.70</h1>
            <div class="card_info_lentes">
            <div class="card_info_lentes--body">
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Resistência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Transparência</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill not"></span>
                        <span class="fill not"></span>
                    </div>
                </div>
                <div class="atributo">
                    <span class="card_info_lentes--body--text">Espessura</span>
                    <div class="card_info_lentes--body--atributo">
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                        <span class="fill"></span>
                    </div>
                </div>
            </div>
            <div class="card_info_lentes--footer">
                <span>Indice de refração</span>
                <span>1.70</span>
            </div>
        </div>
            <p>
                A resina 1.70 é uma das lentes mais finas no mercado, e a sua vantagem é que ja vem com o tratamento Blue cut de fábrica. Recomendado para graus acima de 7.
            </p>

            <div class="last_info">
                <p>
                    Existem outros materiais, porém, as informações passadas ja lhe darão uma boa base sobre como escolher seus óculos.
                </p>
            </div>
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

    _TratamentosDisponiveis() {
        return `
            <p>
                O que são os tratamentos? tratamento são camadas a mais que você pode adicionar na sua lente, de proteção, ou que ajudam na estética
                da sua lente. O famoso "Seus óculos possuem antirreflexo?, Sua lente é uma lente branca?, Seus óculos escurecem no sol?" <br><br>
                Existe diversos tipos de tratamentos, mas geralmente derivam do Antirreflexo e do Fotossensivel.

            </p>
            <h1>O que é o antirreflexo?<h1>
            <p>
                O antirreflexo e um tratamento que serve para eliminar os reflexos aparentes na lentes,
                aquele brilho feio que fica na frente da lente, que além de atrapalhar na estética, atrapalha também na visão.
            </p>
            <h1>O antirreflexo Blue Cut<h1>
            <p>
                Assim como o antirreflexo comum o Blue cut também filtra a luz gerada artificialmente, porém, além de filtrar,
                bloqueia totalmente esse tipo de luz, tem a mesma proteção que um óculos de sol sem a necessidade de escurecer.
                Essa e a lente mais recomendada para quem passa muito tempo no celular, ou computador, ou ambientes com luzes artificiais.
                Assim como o comum, não é recomendada para quem passa muito tempo em ambientes com muita quentura
            </p>
            <h1>As lentes fotossensiveis<h1>
            <p>
                As lentes fotossensiveis são as famosas lentes que escurecem no sol. 
                Essas lentes tem a habilidade de escurecer no sol e clarear em ambientes fechados, proporcionando uma experiência 2 em 1, 
                onde você tem tanto um óculos comum, quando um óculos de sol. Muito recomendado para quem tem sensibilidade a luz solar.
            </p>
            <div class="last_info">
                <p>
                    Os tratamentos pode ser sobrepostos uns nos outros, ou seja, 
                    você pode ter uma lente fotossensível com antirreflexo, tanto o antirreflexo comum, como o antirreflexo Blue cut
                </p>
            </div>
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
    _LenteParaMinhaArmção() {
        return `
        
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


}
