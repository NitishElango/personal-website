document.addEventListener("DOMContentLoaded", function () {
    let stylesheet = document.getElementById("themeStylesheet");
    
    let savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        stylesheet.setAttribute("href", savedTheme);
    }

    window.changeStyle = function () {
        let currentTheme = stylesheet.getAttribute("href");

        if (currentTheme === "style.css") {
            stylesheet.setAttribute("href", "style2.css");
            localStorage.setItem("selectedTheme", "style2.css");
        } else {
            stylesheet.setAttribute("href", "style.css");
            localStorage.setItem("selectedTheme", "style.css");
        }
    };
});
