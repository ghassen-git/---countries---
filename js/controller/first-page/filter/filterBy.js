import { displayRegion } from "../../../view/displayRegion.js";

const options = document.querySelector(".options");
export async function filter() {
  options.addEventListener("click", async function (e) {
    const res = await fetch(
      `https://restcountries.com/v3.1/region/${e.target.textContent}`
    );
    const region = await res.json();
    displayRegion(region);
  });
}
