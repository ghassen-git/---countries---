export function renderCountry(country) {
  const ch = `  <a target='_self' class='country'  href="countryDetails.html?${
    country.name.common
  }"  >
          <div class="flag">
            <img
              class="flag-img"
              src="${country.flags.png}"
              alt=""
            />
          </div>
          <div class="country-details">
            <h2 class="country-name">${country.name.common}</h2>
            <ul>
              <li>Population: <span class="population">${(
                country.population / 1000000
              ).toFixed(2)}</span></li>
              <li>Region: <span class="region">${country.region}</span></li>
              <li>Capital: <span class="capital">${country.capital}</span></li>
            </ul>
          
        </div></a>`;
  return ch;
}
