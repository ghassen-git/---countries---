import { renderCountry } from "../model/countryGenerator.js";
const container = document.querySelector(".counties-container");

export async function displayCountry() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  countries.forEach(function (country) {
    if (country.name.common != "Israel") {
      container.insertAdjacentHTML("afterbegin", renderCountry(country));
    }
  });
}
