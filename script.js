const menu = document.querySelector("#menu");
const menuClose = document.querySelector("#menu-close");
const tabs = document.querySelector("#tabs");

if (window.innerWidth <= 542) {
    tabs.classList.remove("active");
    tabs.classList.add("hidden");
    menu.style = "display: block;"

    menu.addEventListener("click", () => {
        tabs.classList.toggle("active");        
        tabs.classList.toggle("hidden");
    });
}


