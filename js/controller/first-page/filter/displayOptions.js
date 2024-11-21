const filter = document.querySelector(".filter");
const options = document.querySelector(".options");
const body = document.querySelector("body");
export function showOptions() {
  filter.addEventListener("click", function (e) {
    options.style.display = "block";
    body.addEventListener("click", function (f) {
      if (f.target.closest(".filter") == null) {
        options.style.display = "none";
      }
    });
  });
}
