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
                        <div class="todas selected">Todas</div>
                        <div class="masculino">Masculino</div>
                        <div class="feminino">Feminino</div>
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
                            <div class="marca">Menina Bela</div>
                            <div class="marca">Vogue</div>
                            <div class="marca">Carolina Herreira</div>
                            <div class="marca">Tiffany CO.</div>
                            <div class="marca">Dulcet</div>
                            <div class="marca">Fridon</div>
                            <div class="marca">Ray-Ban</div>
                            <div class="marca">Dolce & Gabbana</div>
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
        const btnMasc = template.content.querySelector(".masculino");
        const btnFem = template.content.querySelector(".feminino");
        const btnTds = template.content.querySelector(".todas");
        const btnAplicar = template.content.querySelector(".marcas--footer button");

        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
        });

        [btnTds, btnFem, btnMasc].forEach(btn => btn.addEventListener('click', e => {
            [btnTds, btnFem, btnMasc].forEach(RemoveClass => RemoveClass.classList.remove('selected'));

            e.target.classList.add('selected')
            this._handleOptionFilters(e.target, btnMarcas)
        }));

        document.body.appendChild(template.content);

        const btnMarcas = document.querySelectorAll('.marca');
        btnMarcas.forEach(btn => btn.addEventListener('click', e => e.target.classList.toggle('selected')));

        btnAplicar.addEventListener('click', () => {
            this._Filter(windownContainer);
        });

    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close--filters');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer);
            document.body.classList.remove('stop-scrolling');
        })
    },

    _handleOptionFilters(e) {
        if (e.classList.contains('feminino') && e.classList.contains('selected')) {
            document.querySelector('.marcas-content').innerHTML = `
            <div class="marca">Menina Bela</div>
            <div class="marca">Vogue</div>
            <div class="marca">Carolina Herreira</div>
            <div class="marca">Tiffany CO.</div>
            <div class="marca">Dulcet</div>
            <div class="marca">Fridon</div>
            <div class="marca">Ray-Ban</div>
            <div class="marca">Dolce & Gabbana</div>
            `;


        }
        if (e.classList.contains('masculino') && e.classList.contains('selected')) {
            document.querySelector('.marcas-content').innerHTML = `
            <div class="marca">Life Glasses</div>
            <div class="marca">Oakley</div>
            <div class="marca">Nike</div>
            <div class="marca">Lacoste</div>
            <div class="marca">Dulcet</div>
            <div class="marca">Fridon</div>
            <div class="marca">Ray-Ban</div>
            <div class="marca">Puma</div>
            `;
        }
        if (e.classList.contains('todas') && e.classList.contains('selected')) {
            document.querySelector('.marcas-content').innerHTML = `
            <div class="marca">Life Glasses</div>
            <div class="marca">Oakley</div>
            <div class="marca">Nike</div>
            <div class="marca">Lacoste</div>
            <div class="marca">Dulcet</div>
            <div class="marca">Fridon</div>
            <div class="marca">Ray-Ban</div>
            <div class="marca">Puma</div>
            <div class="marca">Menina Bela</div>
            <div class="marca">Vogue</div>
            <div class="marca">Carolina Herreira</div>
            <div class="marca">Tiffany CO.</div>
            <div class="marca">Dulcet</div>
            <div class="marca">Fridon</div>
            <div class="marca">Ray-Ban</div>
            <div class="marca">Dolce & Gabbana</div>
            `;
        }

        const btnMarcas = document.querySelectorAll('.marca');
        btnMarcas.forEach(btn => btn.addEventListener('click', e => e.target.classList.toggle('selected')));
    },

    _Filter(windownContainer) {
        const sex = document.querySelector('.mas_fem div.selected');
        const fotos = document.querySelectorAll('.foto_holder');
        const marcasSelecteds = document.querySelectorAll('.marca.selected');
        const fotoContainer = document.querySelector('.ver_mais_content')

        this._close(windownContainer);
    }
}
