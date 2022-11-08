const addNewArticleBTN = document.getElementById("openPopup"),
    close = document.querySelector(".close-popup"),
    newArticle = document.querySelector(".newArticle");

addNewArticleBTN.addEventListener("click", () => {
    newArticle.classList.add("active");
});
close.addEventListener("click", () => {
    newArticle.classList.remove("active");
});
let popup = document.querySelector(".newArticle-form ");
window.addEventListener("resize", () => {
    if (window.innerHeight < 550) {
        popup.style.cssText = "top:calc(41px + 1rem)";
    } else {
        popup.style.cssText = "top:0";
    }
});
