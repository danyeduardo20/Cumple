const inicio = document.getElementById("inicio");
const confirmacion = document.getElementById("confirmacion");
const invitacion = document.getElementById("invitacion");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

const botones = document.querySelector(".botones");
const petalsContainer = document.querySelector(".petals");


// ==========================================
// 🌸 FLORES QUE CAEN
// ==========================================

function crearPetalo() {
    const petalo = document.createElement("div");

    petalo.classList.add("petal");

    const tipos = ["🌸", "🌷", "✿", "♡"];

    petalo.textContent =
        tipos[Math.floor(Math.random() * tipos.length)];

    // Posición horizontal aleatoria
    petalo.style.left = Math.random() * 100 + "vw";

    // Tamaño pequeño
    petalo.style.fontSize =
        (Math.random() * 10 + 11) + "px";

    // Caída lenta
    petalo.style.animationDuration =
        (Math.random() * 5 + 7) + "s";

    // Poca opacidad para que se vean suaves
    petalo.style.opacity =
        (Math.random() * 0.18 + 0.18).toFixed(2);

    // Desenfoque
    petalo.style.filter =
        `blur(${(Math.random() * 1.5 + 1).toFixed(1)}px)`;

    petalsContainer.appendChild(petalo);

    // Eliminar cuando termina la animación
    setTimeout(() => {
        petalo.remove();
    }, 13000);
}


// Una flor aproximadamente cada 1.8 segundos
setInterval(crearPetalo, 1800);


// Crear unas pocas al cargar la página
setTimeout(crearPetalo, 500);
setTimeout(crearPetalo, 1300);
setTimeout(crearPetalo, 2500);


// ==========================================
// 😈 BOTÓN "NO"
// ==========================================

function moverBotonNo() {

    const anchoZona = botones.offsetWidth;
    const altoZona = botones.offsetHeight;

    const anchoBoton = btnNo.offsetWidth;
    const altoBoton = btnNo.offsetHeight;

    const margen = 10;

    const maxX = anchoZona - anchoBoton - margen;
    const maxY = altoZona - altoBoton - margen;

    const x =
        Math.random() * (maxX - margen) + margen;

    const y =
        Math.random() * (maxY - margen) + margen;

    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

    // Quitamos cualquier transformación anterior
    btnNo.style.transform = "none";
}


// Cuando intenta pasar el mouse
btnNo.addEventListener("mouseenter", moverBotonNo);


// Cuando lo toca desde el celular
btnNo.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moverBotonNo();

    },
    { passive: false }
);


// Si logra hacer click
btnNo.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        moverBotonNo();

    }
);


// ==========================================
// 💗 BOTÓN "SÍ"
// ==========================================

btnSi.addEventListener("click", function () {

    // Ocultar primera pantalla
    inicio.classList.remove("activa");

    // Mostrar confirmación
    confirmacion.classList.add("activa");

    // Explosión de flores y corazones
    crearExplosion();


    // Después de 2.8 segundos
    // mostrar la invitación
    setTimeout(function () {

        confirmacion.classList.remove("activa");

        invitacion.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2800);

});


// ==========================================
// 🌸 EXPLOSIÓN AL PRESIONAR "SÍ"
// ==========================================

function crearExplosion() {

    const elementos = [
        "🌸",
        "🌷",
        "💗",
        "♡",
        "✿",
        "🍃"
    ];

    for (let i = 0; i < 35; i++) {

        const elemento = document.createElement("div");

        elemento.classList.add("petal");

        elemento.textContent =
            elementos[
            Math.floor(
                Math.random() * elementos.length
            )
            ];

        elemento.style.left =
            Math.random() * 100 + "vw";

        elemento.style.top =
            Math.random() * 30 + "vh";

        elemento.style.fontSize =
            (Math.random() * 18 + 15) + "px";

        elemento.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        // Un poco transparentes también
        elemento.style.opacity =
            (Math.random() * 0.25 + 0.45).toFixed(2);

        petalsContainer.appendChild(elemento);

        setTimeout(() => {

            elemento.remove();

        }, 7000);
    }
}


// ==========================================
// 🌿 ANIMACIÓN DEL ITINERARIO
// ==========================================

window.addEventListener("scroll", function () {

    const eventos =
        document.querySelectorAll(".evento-info");

    eventos.forEach(function (evento) {

        const posicion =
            evento.getBoundingClientRect();

        if (
            posicion.top <
            window.innerHeight * 0.9
        ) {

            evento.style.opacity = "1";

            evento.style.transform =
                "translateX(0)";
        }

    });

});


// ==========================================
// ✨ PREPARAR EVENTOS PARA ANIMACIÓN
// ==========================================

document
    .querySelectorAll(".evento-info")
    .forEach(function (evento) {

        evento.style.opacity = "0";

        evento.style.transform =
            "translateX(-15px)";

        evento.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    });