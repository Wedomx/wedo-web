document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =========================================
           CONFIGURACIÓN WEDO
        ========================================== */

        const numeroWhatsApp =
            "528672135836";


        /* =========================================
           ELEMENTOS
        ========================================== */

        const botonContacto =
            document.getElementById(
                "botonContacto"
            );

        const botonAyuda =
            document.getElementById(
                "botonAyuda"
            );

        const formularioWedo =
            document.getElementById(
                "formularioWedo"
            );

        const botonMenu =
            document.getElementById(
                "botonMenu"
            );

        const menuPrincipal =
            document.getElementById(
                "menuPrincipal"
            );


        /* =========================================
           WHATSAPP
        ========================================== */

        function abrirWhatsApp(mensaje) {

            const mensajeCodificado =
                encodeURIComponent(
                    mensaje
                );

            const enlace =
                `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

            window.open(
                enlace,
                "_blank"
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
           BOTÓN AYUDA
        ========================================== */

        if (botonAyuda) {

            botonAyuda.addEventListener(
                "click",
                function () {

                    abrirWhatsApp(
                        "Hola WEDO! No encontré exactamente el servicio que necesito. ¿Me pueden orientar?"
                    );

                }
            );

        }


        /* =========================================
           FORMULARIO
        ========================================== */

        if (formularioWedo) {

            formularioWedo.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const nombre =
                        document
                            .getElementById(
                                "nombre"
                            )
                            .value
                            .trim();


                    const telefono =
                        document
                            .getElementById(
                                "telefono"
                            )
                            .value
                            .trim();


                    const servicio =
                        document
                            .getElementById(
                                "servicio"
                            )
                            .value;


                    const mensaje =
                        document
                            .getElementById(
                                "mensaje"
                            )
                            .value
                            .trim();


                    const mensajeWhatsApp =
`Hola WEDO!

Mi nombre es ${nombre}.

Teléfono / WhatsApp:
${telefono}

Servicio de interés:
${servicio}

Lo que necesito:
${mensaje}

Quisiera recibir información y orientación sobre este servicio.`;


                    abrirWhatsApp(
                        mensajeWhatsApp
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
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();


                    const estaAbierto =
                        menuPrincipal
                            .classList
                            .contains(
                                "menu-abierto"
                            );


                    if (estaAbierto) {

                        menuPrincipal
                            .classList
                            .remove(
                                "menu-abierto"
                            );

                        botonMenu
                            .classList
                            .remove(
                                "activo"
                            );

                        botonMenu.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    } else {

                        menuPrincipal
                            .classList
                            .add(
                                "menu-abierto"
                            );

                        botonMenu
                            .classList
                            .add(
                                "activo"
                            );

                        botonMenu.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );


            /* =====================================
               ENLACES DEL MENÚ
            ====================================== */

            const enlacesMenu =
                menuPrincipal
                    .querySelectorAll(
                        "a"
                    );


            enlacesMenu.forEach(
                function (enlace) {

                    enlace.addEventListener(
                        "click",
                        function () {

                            menuPrincipal
                                .classList
                                .remove(
                                    "menu-abierto"
                                );

                            botonMenu
                                .classList
                                .remove(
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
                function (event) {

                    const clickEnMenu =
                        menuPrincipal
                            .contains(
                                event.target
                            );

                    const clickEnBoton =
                        botonMenu
                            .contains(
                                event.target
                            );


                    if (
                        !clickEnMenu &&
                        !clickEnBoton
                    ) {

                        menuPrincipal
                            .classList
                            .remove(
                                "menu-abierto"
                            );

                        botonMenu
                            .classList
                            .remove(
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

    }
);