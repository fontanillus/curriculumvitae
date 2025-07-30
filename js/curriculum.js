// Función reutilizable para manejar los toggles de Bootstrap con cambio de texto
function toggleSection(buttonId, collapseId, showText, hideText) {
    const button = document.getElementById(buttonId);
    const collapseElement = document.getElementById(collapseId);
    const bsCollapse = new bootstrap.Collapse(collapseElement, { toggle: false });

    button.addEventListener("click", () => {
        const isVisible = collapseElement.classList.contains("show");

        if (isVisible) {
            bsCollapse.hide();
            button.textContent = showText;
            button.setAttribute("aria-expanded", "false");
        } else {
            bsCollapse.show();
            button.textContent = hideText;
            button.setAttribute("aria-expanded", "true");
        }
    });
}

// Inicialización de los toggles con los textos deseados
toggleSection("btn-toggle-estudios", "lista-estudios", "Mostrar Estudios", "Ocultar Estudios");
toggleSection("btn-toggle-trayectoria", "lista-trayectoria", "Mostrar Trayectoria Profesional", "Ocultar Trayectoria Profesional");

// Objeto de proyectos (resumen de tus trabajos)
const proyectos = {
    encuesta: {
        titulo: "Encuesta perfumería",
        descripcion: "Formulario de encuesta para una tienda de perfumes.",
        tecnologias: "HTML, CSS, BOOTSTRAP, EMAILJS",
        link: "https://fontanillus.github.io/encuestaperfumeria/",
    },
    juego: {
        titulo: "Juego: Adivinar número",
        descripcion: "Juego interactivo donde debes adivinar el número secreto.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/adivinarnumero/",
    },
    horoscopo: {
        titulo: "Calculadora horóscopo Chino",
        descripcion: "Ingresa tu año de nacimiento y descubre tu signo del zodiaco chino.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/chino/",
    },
    menu: {
        titulo: "Menú bebida seleccionada",
        descripcion: "Selecciona una bebida y muestra el resultado.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/bebidas/",
    },
    isbn: {
        titulo: "Dígito de control ISBN",
        descripcion: "Valida el dígito de control de un ISBN.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/isbn/",
    },
    carrusel: {
        titulo: "Carrusel de fotos (array)",
        descripcion: "Carrusel interactivo de imágenes usando arrays.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/carruselautomtico/",
    },
    tarjeta: {
        titulo: "Verificar tarjeta de crédito",
        descripcion: "Validador de números de tarjeta de crédito.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/verificartarjeta/",
    },
    tamagotchi: {
        titulo: "Cuida de tu Tamagotchi",
        descripcion: "Disfruta viendo crecer a tu propio Tamagotchi.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/tamagotchi/",
    },
    pueblos: {
        titulo: "Pueblos más bonitos de Cataluña",
        descripcion: "Listado y descripción de pueblos con fotos.",
        tecnologias: "HTML, CSS",
        link: "https://fontanillus.github.io/catlocalstore/",
    },
    cat: {
        titulo: "Pueblos más bonitos de Cataluña",
        descripcion: "Listado, descripción y eventos de pueblos con fotos.",
        tecnologias: "WORDPRESS",
        link: "https://fontanillus.es/blog/blog/",
    },
    corazon: {
        titulo: "El corazón Coreano",
        descripcion: "Proyecto sobre símbolos coreanos con interactividad.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.github.io/corazoncoreano/",
    },
    restaurante: {
        titulo: "Restaurante Montblanc",
        descripcion: "Proyecto menú Restaurante Montblanc.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://www.fontanillus.es/restaurantemontblanc/",
    },
    numerologia: {
        titulo: "Numerología",
        descripcion: "La numerología estudia la vibración energética de los números y su impacto.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.es/numerologialocalstorage/",
    },
    ecobarrio: {
        titulo: "Ecobarrio",
        descripcion: "Guía de Proyecto: EcoBarrio - Comunidad Verde.",
        tecnologias: "WORDPRESS",
        link: "https://fontanillus.es/blog/ecobarrio/",
    },
    cartas: {
        titulo: "Cartas",
        descripcion: "Juego memoria con cartas.",
        tecnologias: "HTML, CSS, JavaScript",
        link: "https://fontanillus.es/juegomemorycartas/",
    },
};

// Mostrar detalles del proyecto seleccionado
const selector = document.getElementById("selector-proyectos");
const detalle = document.getElementById("detalle-proyecto");

selector.addEventListener("change", () => {
    const valor = selector.value;

    if (valor && proyectos[valor]) {
        const proyecto = proyectos[valor];

        detalle.innerHTML = `
    <div class="card p-4 shadow-sm">
        <h3 class="card-title">${proyecto.titulo}</h3>
        <p class="card-text">${proyecto.descripcion}</p>
        <p class="card-text"><strong>Tecnologías:</strong> ${proyecto.tecnologias}</p>
        <a href="${proyecto.link}" target="_blank" rel="noopener noreferrer" class="link-discreto">Ver proyecto</a>
    </div>
`;
        detalle.classList.remove("d-none");
    } else {
        detalle.innerHTML = "";
        detalle.classList.add("d-none");
    }
});

