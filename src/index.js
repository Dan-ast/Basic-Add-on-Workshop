function changeTheme(event) {
    let body = document.querySelector("body");

    body.classList.toggle("dark");
}

let themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", changeTheme);