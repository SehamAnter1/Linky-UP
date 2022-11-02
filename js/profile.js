let sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
    console.log("cl");
    sidebar.classList.toggle("close");
}
let list = document.querySelectorAll(".sidebar__list li"),
    profile = document.querySelectorAll(".profile__content");
list.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.dataset.toggle != "disabled") {
            document.querySelectorAll(".profile .active").forEach((element) => {
                element.classList.remove("active");
            });
            document
                .querySelectorAll(".sidebar__list li.active")
                .forEach((li) => {
                    li.classList.remove("active");
                });
        }
        profile.forEach((content) => {
            if (e.dataset.toggle != "disabled") {
                if (content.classList.contains(e.dataset.toggle)) {
                    content.classList.add("active");
                    e.classList.add("active");
                }
            }
        });
    });
});

// file upload 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
// 