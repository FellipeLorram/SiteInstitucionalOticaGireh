export const FilterOptions = {
    open() {
        const html = `
        <div class="filters_windown_container">
            <div class="filters">
                <div class="filters_header">
                    <span class="material-icons-outlined">close</span>
                </div>
                <div class="filters_body">
                    <div class="mas_fem">
                        <div class="masculino">Masculino</div>
                        <div class="Feminino">Feminino</div>
                    </div>
                    <div class="marcas__container">
                        <div class="marcas--header">
                            Marcas
                        </div>
                        <div class="marcas-content">
                            <div class="marca">Life Glasses</div>
                            <div class="marca">Oakley</div>
                            <div class="marca">Nike</div>
                            <div class="marca">Lacoste</div>
                            <div class="marca">Dulcet</div>
                            <div class="marca">Fridon</div>
                            <div class="marca">Ray-Ban</div>
                            <div class="marca">Puma</div>
                        </div>
                        <div class="marcas--footer">
                            <button>Aplicar</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        `;

        const template = document.createElement("template");
        template.innerHTML = html;


        const windownContainer = template.content.querySelector(".filters_windown_container");
        const btnClose = template.content.querySelector(".filters_header span");

        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
        });

        document.body.appendChild(template.content);
    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close--filters');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer);
            document.body.classList.remove('stop-scrolling');
        })
    },

}