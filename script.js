document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       CONFIGURACIÓN
    ========================================== */

    const numeroWhatsApp = "528672135836";


    /* =========================================
       ELEMENTOS PRINCIPALES
    ========================================== */

    const botonContacto =
        document.getElementById("botonContacto");

    const botonAyuda =
        document.getElementById("botonAyuda");

    const formulario =
        document.getElementById("formularioWedo");

    const botonMenu =
        document.getElementById("botonMenu");

    const menuPrincipal =
        document.getElementById("menuPrincipal");

    const selectorServicio =
        document.getElementById("servicio");

    const seccionContacto =
        document.getElementById("contacto");


    /* =========================================
       FUNCIÓN WHATSAPP
    ========================================== */

    function abrirWhatsApp(mensaje) {

        const mensajeCodificado =
            encodeURIComponent(mensaje);

        const url =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            mensajeCodificado;

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =========================================
       BOTÓN PRINCIPAL
    ========================================== */

    if (botonContacto) {

        botonContacto.addEventListener(
            "click",
            function () {

                abrirWhatsApp(
                    "Hola WEDO! Quisiera información sobre sus servicios."
                );

            }
        );

    }


    /* =========================================
       BOTÓN ¿NO ENCUENTRAS LO QUE NECESITAS?
    ========================================== */

    if (botonAyuda) {

        botonAyuda.addEventListener(
            "click",
            function () {

                abrirWhatsApp(
                    "Hola WEDO! Necesito ayuda con un servicio y quisiera orientación."
                );

            }
        );

    }


    /* =========================================
       BOTONES DE CADA CATEGORÍA
       SELECCIÓN AUTOMÁTICA DEL FORMULARIO
    ========================================== */

    const botonesServicio =
        document.querySelectorAll(
            "[data-servicio]"
        );

    botonesServicio.forEach(
        function (boton) {

            boton.addEventListener(
                "click",
                function (evento) {

                    evento.preventDefault();

                    const servicioSeleccionado =
                        boton.getAttribute(
                            "data-servicio"
                        );

                    if (
                        selectorServicio &&
                        servicioSeleccionado
                    ) {

                        selectorServicio.value =
                            servicioSeleccionado;

                    }

                    if (seccionContacto) {

                        seccionContacto.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                    setTimeout(
                        function () {

                            if (selectorServicio) {

                                selectorServicio.focus();

                            }

                        },
                        650
                    );

                }
            );

        }
    );


    /* =========================================
       FORMULARIO A WHATSAPP
    ========================================== */

    if (formulario) {

        formulario.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();

                const nombre =
                    document
                        .getElementById("nombre")
                        .value
                        .trim();

                const telefono =
                    document
                        .getElementById("telefono")
                        .value
                        .trim();

                const servicio =
                    document
                        .getElementById("servicio")
                        .value;

                const mensaje =
                    document
                        .getElementById("mensaje")
                        .value
                        .trim();


                const textoWhatsApp =
                    "Hola WEDO!" +
                    "\n\n" +
                    "Mi nombre es: " +
                    nombre +
                    "\n" +
                    "Mi teléfono es: " +
                    telefono +
                    "\n" +
                    "Servicio: " +
                    servicio +
                    "\n\n" +
                    "Necesito lo siguiente:" +
                    "\n" +
                    mensaje;


                abrirWhatsApp(
                    textoWhatsApp
                );

            }
        );

    }


    /* =========================================
       MENÚ MÓVIL
    ========================================== */

    if (
        botonMenu &&
        menuPrincipal
    ) {

        botonMenu.addEventListener(
            "click",
            function (evento) {

                evento.stopPropagation();

                const menuAbierto =
                    menuPrincipal.classList.toggle(
                        "menu-abierto"
                    );

                botonMenu.classList.toggle(
                    "activo",
                    menuAbierto
                );

                botonMenu.setAttribute(
                    "aria-expanded",
                    menuAbierto
                        ? "true"
                        : "false"
                );

            }
        );


        /* =====================================
           CERRAR AL TOCAR UN ENLACE
        ====================================== */

        const enlacesMenu =
            menuPrincipal.querySelectorAll("a");

        enlacesMenu.forEach(
            function (enlace) {

                enlace.addEventListener(
                    "click",
                    function () {

                        menuPrincipal.classList.remove(
                            "menu-abierto"
                        );

                        botonMenu.classList.remove(
                            "activo"
                        );

                        botonMenu.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );


        /* =====================================
           CERRAR AL TOCAR FUERA
        ====================================== */

        document.addEventListener(
            "click",
            function (evento) {

                const clicDentroDelMenu =
                    menuPrincipal.contains(
                        evento.target
                    );

                const clicEnBoton =
                    botonMenu.contains(
                        evento.target
                    );

                if (
                    !clicDentroDelMenu &&
                    !clicEnBoton
                ) {

                    menuPrincipal.classList.remove(
                        "menu-abierto"
                    );

                    botonMenu.classList.remove(
                        "activo"
                    );

                    botonMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }

});