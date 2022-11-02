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
