import { displayBorder } from "../controller/second-page/bordersDisplay.js";

export async function countryDetails(countyName) {
  if (countyName.indexOf("/") == -1) {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countyName}`
    );

    const [country] = await res.json();

    const ch = `
        <div class="img-box">
          <img src="${country.flags.png}"  />
        </div>
        <div class="text-box">
          <h2 class="country-name">${country.name.common}</h2>
          <div class="list-details">
            <ul>
              <li>
                <span>Native Name:</span>
                <p class="name">${
                  Object.values(country.name.nativeName)[0].official
                }</p>
              </li>
              <li>
                <span>Population:</span>
                <p class="Population">${country.population}</p>
              </li>
              <li>
                <span>Region:</span>
                <p class="region">${country.region}</p>
              </li>
              <li>
                <span>Sub Region:</span>
                <p class="Sub">${country.subregion}</p>
              </li>
              <li>
                <span>Capital:</span>
                <p class="Capital">${country.capital[0]}</p>
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain:</span>
                <p class="Domain">${country.tld[0]}</p>
              </li>
              <li>
                <span>Currencies:</span>
                <p class="Currencies">${
                  Object.values(country.currencies)[0].name
                }</p>
              </li>
              <li>
                <span>Languages:</span>
                <p class="Languages">${Object.values(country.languages).join(
                  ","
                )}</p>
              </li>
            </ul>
          </div>
          <div class="borders-container">
            <span>Border Countries:</span>
            <ul class="Borders">
            
               
            </ul>
          </div>
        </div>
        
      `;

    const detailsContainer = document.querySelector(".details");
    detailsContainer.innerHTML = "";
    detailsContainer.insertAdjacentHTML("afterbegin", ch);

    country.borders?.forEach(async function (c) {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${c}`);
      const [country] = await res.json();

      document
        .querySelector(".Borders")
        .insertAdjacentHTML(
          "afterbegin",
          `<li class='border-country'>${country.name.common}</li>`
        );
    });

    displayBorder(document.querySelector(".Borders"));
  }
}
