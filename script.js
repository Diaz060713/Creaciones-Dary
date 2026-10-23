document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------
    // Control del menú desplegable estilo iOS
    // -----------------------------------------
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const iosMenu = document.getElementById('iosMenu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            iosMenu.classList.add('activo');
            document.body.style.overflow = 'hidden'; 
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            iosMenu.classList.remove('activo');
            document.body.style.overflow = 'auto'; 
        });
    }

    // -----------------------------------------
    // Control del envío a WhatsApp
    // -----------------------------------------
    const formWhatsApp = document.getElementById('formWhatsApp');
    
    if (formWhatsApp) {
        formWhatsApp.addEventListener('submit', function(event) {
            // Evita que la página intente recargarse
            event.preventDefault();

            // Obtenemos los valores que el usuario escribió
            const nombre = document.getElementById('nombre').value;
            const evento = document.getElementById('evento').value;
            const fecha = document.getElementById('fecha').value;
            const producto = document.getElementById('producto').value;

            // Armamos la plantilla del mensaje con saltos de línea (\n)
            const mensaje = `¡Hola! Estoy interesado en realizar un pedido. Aquí están mis datos:

*Nombre:* ${nombre}
*Tipo de Evento:* ${evento}
*Fecha del Evento:* ${fecha}
*Producto de interés:* ${producto}

Quedo en espera de la cotización. ¡Gracias!`;

            // Tu número de teléfono
            const numero = '525520175185';
            
            // Creamos el enlace codificando el texto
            const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            
            // Abrimos WhatsApp
            window.open(urlWhatsApp, '_blank');
        });
    }
});