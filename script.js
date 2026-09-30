const boton = document.getElementById('menu-toggle');   /*BUSCA EN TODA LA PAGINA EL ELEMENTO QUE SEA EL BOTON 
HAMBURGUESA Y LO GUARDA EN UNA VARIABLE LLAMADA BOTON, PARA PODER REFERIRNOS A EL DESPUES */
const menu = document.querySelector('nav');   /*BUSCA EL PRIMER ELEMENTO NAV DE LA PAGINA Y 
LO GUARDA EN UNA VARIABLE MENU */

if (boton && menu) {
    boton.addEventListener('click', function() {   /*CORAZON DE LA INTERACTIVIDAD, LE DICE AL NAVEGADOR
    QUE ESCUCHE A ESE BOTON Y CUANDO ALGUIEN HAGA CLIC SOBRE EL EJECUTA EL CODIGO QUE ESTA DENTRO DE ESTA FUNCION */
        menu.classList.toggle('abierto');  /*DA ACCESO A LAS CLASES CSS DE UN ELEMENTO Y .TOGGLE SIGNIFICA -SI ESTA CLASE
        NO ESTA PUESTA, PONLA, SI YA ESTA PUESTA, QUITALA- POR ESO UN SOLO CLICK ABRE EL MENU Y EL SIGUIENTE LO CIERRA, SIN NECESITAR DOS 
        FUNCIONES DIFERENTES */
    });
}

const enlaces = document.querySelectorAll('nav a');  /*BUSCA LOS ITEMS <a QUE ESTAN EN EL MENU DEL HEADER*/
enlaces.forEach(function(enlace) {   /*COMO SON VARIOS ENLACES SE LES PONE PARA CADA UNO*/
    enlace.addEventListener('click', function() {   /*A CADA ENLACE SE LE AGREGA SU PROPIO ESCUCHADOR DE CLIC*/
    /*ES COMO UNA LLAMADA A JAVAS PARA QUE SEPA QUE SI PASA ESTE EVENTO, EJECUTE ESTE CODIGO*/
        if (menu) {
            menu.classList.remove('abierto');
        }
    });
});

/* TARJETAS INTERACTIVAS DE SERVICIOS (EXPANDIR / COLAPSAR) */
function inicializarTarjetasServicios() {
    const tarjetasServicio = document.querySelectorAll('.servicios-grid article');
    tarjetasServicio.forEach(function(tarjeta) {
        tarjeta.addEventListener('click', function() {
            tarjeta.classList.toggle('abierto');
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarTarjetasServicios);
} else {
    inicializarTarjetasServicios();
}

/* TARJETAS DE CIFRAS (EXPANDIR / COLAPSAR CON BOTÓN +/−) */
function inicializarTarjetasCifras() {
    const tarjetasCifras = document.querySelectorAll('.cifra-card');
    tarjetasCifras.forEach(function(tarjeta) {
        const btnToggle = tarjeta.querySelector('.btn-cifra-toggle');
        if (!btnToggle) return;
        btnToggle.addEventListener('click', function(e) {
            e.stopPropagation();  /* Evita que el clic burbujee al card */
            const estaAbierto = tarjeta.classList.toggle('abierto');
            btnToggle.textContent = estaAbierto ? '−' : '+';
            btnToggle.setAttribute('aria-expanded', estaAbierto ? 'true' : 'false');
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarTarjetasCifras);
} else {
    inicializarTarjetasCifras();
}

/* CARRUSEL DE LOGOS DE CLIENTES (un logo por clic, smooth CSS transition) */
function inicializarCarruselClientes() {
    const track      = document.getElementById('clientes-track');
    const btnPrev    = document.getElementById('carousel-prev');
    const btnNext    = document.getElementById('carousel-next');

    if (!track || !btnPrev || !btnNext) return;

    const items      = track.querySelectorAll('.cliente-item');
    const total      = items.length;
    let indiceActual = 0;

    /* Calcula el ancho de un ítem incluyendo el gap lateral que hay entre items.
       Usamos getBoundingClientRect para mayor precisión. */
    function anchoItem() {
        if (items.length === 0) return 0;
        return items[0].getBoundingClientRect().width;
    }

    function actualizarCarrusel() {
        const desplazamiento = indiceActual * anchoItem();
        track.style.transform = 'translateX(-' + desplazamiento + 'px)';

        /* Deshabilitar/habilitar flechas en los extremos */
        btnPrev.disabled = (indiceActual === 0);
        btnNext.disabled = (indiceActual >= total - 1);
    }

    btnPrev.addEventListener('click', function() {
        if (indiceActual > 0) {
            indiceActual--;
            actualizarCarrusel();
        }
    });

    btnNext.addEventListener('click', function() {
        if (indiceActual < total - 1) {
            indiceActual++;
            actualizarCarrusel();
        }
    });

    /* Estado inicial */
    actualizarCarrusel();

    /* Recalcular si la ventana cambia de tamaño */
    window.addEventListener('resize', actualizarCarrusel);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarCarruselClientes);
} else {
    inicializarCarruselClientes();
}