import { displaySearched } from "../../../view/displaySearched.js";
import { displayCountry } from "../../../view/displayCountries.js";
const search = document.querySelector("input");

export function countrySearch() {
  search.addEventListener("keyup", function (e) {
    if (search.value == "") {
      displayCountry();
    } else {
      displaySearched(search.value);
    }
  });
}
