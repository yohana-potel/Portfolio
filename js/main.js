// ===========================
// CAMBIO DE TEMA
// ===========================

const themeToggle = document.getElementById("theme-toggle");

const html = document.documentElement;


// ===========================
// CARGAR TEMA GUARDADO
// ===========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    html.setAttribute("data-theme", savedTheme);

    updateThemeIcon(savedTheme);

}


// ===========================
// CAMBIAR TEMA
// ===========================

themeToggle.addEventListener("click", () => {

    const currentTheme =
        html.getAttribute("data-theme") || "light";

    const newTheme =
        currentTheme === "light"
            ? "dark"
            : "light";

    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    updateThemeIcon(newTheme);

});


// ===========================
// CAMBIAR ICONO
// ===========================

function updateThemeIcon(theme) {

    if (theme === "dark") {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Cambiar a modo claro"
        );

    } else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Cambiar a modo oscuro"
        );

    }

}