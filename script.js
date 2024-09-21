const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.left = `${(i - index) * 100}%`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});

    document.querySelectorAll('.pelicula-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la navegación predeterminada

            const type = this.getAttribute('data-type');
            const title = encodeURIComponent(this.getAttribute('data-title'));
            const desc = encodeURIComponent(this.getAttribute('data-desc'));
            const img = encodeURIComponent(this.getAttribute('data-img'));

            let targetPage = type === "series" ? "Detalle series.html" : "Detalle peliculas.html";
            
            // Construir la URL con los parámetros
            const url = `${targetPage}?img=${img}&title=${title}&desc=${desc}`;

            // Redirigir a la nueva URL
            window.location.href = url;
        });
    });

    // Función para obtener el valor de un parámetro de la URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Obtener los valores de la URL
    const img = decodeURIComponent(getQueryParam('img'));
    const title = decodeURIComponent(getQueryParam('title'));
    const desc = decodeURIComponent(getQueryParam('desc'));

    // Mostrar los datos en la página
    document.getElementById('detalle-imagen').src = img;
    document.getElementById('detalle-titulo').textContent = title;
    document.getElementById('detalle-descripcion').textContent = desc;


  