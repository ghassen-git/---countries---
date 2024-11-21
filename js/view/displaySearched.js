import { renderCountry } from "../model/countryGenerator.js";
const container = document.querySelector(".counties-container");

export async function displaySearched(search) {
  try {
    container.innerHTML = "";
    const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);
    if (!res.ok) {
      throw new Error(`Error Undefined Country !! ${res.status}`);
    }
    const country = await res.json();
    country.forEach((c) => {
      console.log(c);

      if (c.name.common != "Israel") {
        container.insertAdjacentHTML("afterbegin", renderCountry(c));
      }
    });
  } catch (error) {
    container.innerHTML = "";

    container.insertAdjacentHTML("afterbegin", error);
  }
}
