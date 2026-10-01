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

/* CARRUSEL DE LOGOS DE CLIENTES (Continuo, automático y táctil) */
function inicializarCarruselClientes() {
    const track = document.getElementById('clientes-track');
    if (!track) return;

    /* Permite pausar y reanudar en pantallas táctiles al tocar el carrusel */
    track.addEventListener('touchstart', function() {
        track.style.animationPlayState = 'paused';
    }, { passive: true });

    track.addEventListener('touchend', function() {
        track.style.animationPlayState = 'running';
    }, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarCarruselClientes);
} else {
    inicializarCarruselClientes();
}