var menuButton = document.getElementById("menu");
var sidebar = document.querySelector(".sidebar");

var sidebarOpen = false;

function toggleNav() {
    if (sidebarOpen === false) {
        sidebar.style.width = "250px";
        menuButton.style.left = "270px";

        sidebarOpen = true;
    } else {
        sidebar.style.width = "0";
        menuButton.style.left = "10px";

        sidebarOpen = false;
    }
}

menuButton.addEventListener('click', toggleNav)
