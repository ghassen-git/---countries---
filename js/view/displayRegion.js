import { renderCountry } from "../model/countryGenerator.js";
const container = document.querySelector(".counties-container");

export function displayRegion(region) {
  container.innerHTML = "";
  region.forEach((country) => {
    if (country.name.common != "Israel") {
      container.insertAdjacentHTML("afterbegin", renderCountry(country));
    }
  });
}
