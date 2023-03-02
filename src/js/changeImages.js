(function (window, document, undefined) {
    window.onload = init;
    function init() {
        const animation = [
            { opacity: 0 },
            { opacity: 1 },
        ];
        const timing = {
            duration: 1000,
            iterations: 1,
        };
        const imgs = ['cepillo', 'cepillo2', 'cepillo3'];
        let index = 0;
        const elementImg = document.getElementById('cepillo');

        const change = () => {
            elementImg.src = `../src/img/${imgs[index]}.png`;
            elementImg.animate(animation, timing);
            index > 1 ? index = 0 : index++;
            setTimeout(change, 3000);
        }
        change();

        const IMAGENES = [
            '../src/img/cepillo.png',
            '../src/img/cepillo2.png',
            '../src/img/cepillo3.png'
        ];
        let posicionActual = 0;
        let $botonRetroceder = document.querySelector('#retroceder');
        let $botonAvanzar = document.querySelector('#avanzar');
        let $imagen = document.querySelector('#imagen');

        pasarFoto = () => {
            posicionActual >= IMAGENES.length - 1 ? posicionActual = 0 : posicionActual++;
            $imagen.animate(animation, timing)
            renderizarImagen();
        }

        retrocederFoto = () => {
            posicionActual <= 0 ? posicionActual = IMAGENES.length - 1 : posicionActual--;
            $imagen.animate(animation, timing)
            renderizarImagen();
        }

        renderizarImagen = () => {
            $imagen.src = IMAGENES[posicionActual];
        }

        $botonAvanzar.addEventListener('click', pasarFoto);
        $botonRetroceder.addEventListener('click', retrocederFoto);
        renderizarImagen();

        // Validación
        (function () {
            const modalError = new bootstrap.Modal(document.getElementById('modalError'));
            const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));
            const form = document.forms['form-contact'];
            form.addEventListener('submit', (ev) => {
                if (!form.checkValidity()) {
                    console.log('ola')
                    ev.preventDefault();
                    ev.stopPropagation();
                    modalError.show();
                } else {
                    ev.preventDefault();
                    ev.stopPropagation();
                    modalSuccess.show();
                    form.classList.add('was-validated');
                }
            }, false);
        })();
    }
})(window, document, undefined);