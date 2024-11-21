import { countryDetails } from "../../model/countryDetails.js";

export function displayBorder(borders) {
  console.log(borders);
  borders.addEventListener("click", function (e) {
    if (e.target.classList.contains("border-country")) {
      countryDetails(e.target.textContent);
    }
  });
}
