const moonIcon = document.querySelector(".moon");
const btnDark = document.querySelector("button");
const body = document.querySelector(".body");
const html = document.querySelector("html");
export function darkMode() {
  btnDark.addEventListener("click", function () {
    if (moonIcon.getAttribute("name") == "moon-outline") {
      moonIcon.setAttribute("name", "moon");
      body.classList.add("darkMode");
      body.classList.remove("lightMode");
      html.classList.add("darkMode");
      html.classList.remove("lightMode");
      localStorage.setItem("mode", "darkMode");
      localStorage.setItem("name", "moon");
    } else {
      moonIcon.setAttribute("name", "moon-outline");
      body.classList.remove("darkMode");
      body.classList.add("lightMode");
      html.classList.remove("darkMode");
      html.classList.add("lightMode");
      localStorage.setItem("mode", "lightMode");
      localStorage.setItem("name", "moon-outline");
    }
  });
}
