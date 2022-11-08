// toggle dashbord
let toggleDashbord = document.querySelector(".openDashbord"),
    container = document.querySelector(".sideBarParent");
toggleDashbord.addEventListener("click", () => {
    container.classList.toggle("active");
});
// favorite article button

let favoriteButton = document.querySelectorAll(".addToFavorite"),
    favoriteIcon = localStorage.getItem("favorite");
Cookies.set("favorite", "false");
const addToFavourite = (icon) => {
    Cookies.set("favorite", "true");
    localStorage.setItem("favoriteIcon", "enable");
    icon.classList.remove("fal");
    icon.classList.add("fas", "fa-heart", "red_heart");
};
const removeFavorite = (icon) => {
    Cookies.set("favorite", "false");
    localStorage.setItem("favoriteIcon", null);
    icon.classList.remove("fas", "fa-heart", "red_heart");
    icon.classList.add("fal", "fa-heart");
};
favoriteButton.forEach((icon) => {
    icon.addEventListener("click", (clickedIcon) => {
        if (clickedIcon.target.classList.contains("fas")) {
            removeFavorite(clickedIcon.target);
        } else {
            addToFavourite(clickedIcon.target);
        }
    });
});
// Dark theme
const themeButton = document.querySelector(".change-theme"),
    darkMode = localStorage.getItem("darkMode"),
    changeIcone = localStorage.getItem("change-icon");
const enableDarkMode = () => {
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "enabled");
    //toggle icon
    themeButton.classList.remove("fa-toggle-off");
    themeButton.classList.add("fa-toggle-on");
    localStorage.setItem("changeIcone", "fa-toggle-on");
};
const disableDarkMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
    //toggle icon
    themeButton.classList.remove("fa-toggle-on");
    themeButton.classList.add("fa-toggle-off");
    localStorage.setItem("changeIcone", "fa-toggle-off");
};
if (darkMode == "enabled") {
    enableDarkMode();
}
themeButton.addEventListener("click", () => {
    if (!document.body.classList.contains("dark-theme")) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
