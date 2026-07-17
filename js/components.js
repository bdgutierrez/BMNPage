async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        const html = await response.text();

        element.innerHTML = html;

        // Inicializar el menú móvil después de cargarlo
        if (id === "menu") {

            initMobileMenu();

        }

    } catch (error) {

        console.error(`Error cargando ${file}:`, error);

    }

}


function initMobileMenu() {

    const button = document.getElementById("mobile-menu-button");

    const menu = document.getElementById("mobile-menu");

    if (!button || !menu) return;


    button.addEventListener("click", function () {

        menu.classList.toggle("hidden");

    });


    // Cerrar el menú al hacer clic en un enlace
    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.add("hidden");

        });

    });

}


loadComponent("menu", "layouts/Menu.html");

loadComponent("footer", "layouts/Footer.html");


/*
|--------------------------------------------------------------------------
| Navbar transparente → negra al hacer scroll
|--------------------------------------------------------------------------
*/

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    const currentScroll = window.scrollY;

    const maxScroll = 300;

    let opacity = currentScroll / maxScroll;

    opacity = Math.max(0, Math.min(1, opacity));

    navbar.style.setProperty("--nav-opacity", opacity);

});