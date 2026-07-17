async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) {

        console.error(`No existe el elemento #${id}`);

        return;

    }

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(
                `No se pudo cargar ${file}. Error: ${response.status}`
            );

        }

        const html = await response.text();

        element.innerHTML = html;

        console.log(`${file} cargado correctamente`);

    } catch (error) {

        console.error(error);

    }

}


/*
|--------------------------------------------------------------------------
| Cargar componentes
|--------------------------------------------------------------------------
*/

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