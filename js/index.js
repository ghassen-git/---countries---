import { displayCountry } from "./view/displayCountries.js";
import { darkMode } from "./controller/darkMode/switchLightDark.js";
import { showOptions } from "./controller/first-page/filter/displayOptions.js";
import { countrySearch } from "./controller/first-page/search/searchCountry.js";
import { filter } from "./controller/first-page/filter/filterBy.js";

displayCountry();
filter();
countrySearch();
darkMode();
showOptions();

/////////////////////////////////////////////////
//darkMode active
const html = document.querySelector("html");
const body = document.querySelector(".body");
const moonIcon = document.querySelector(".moon");
body.classList.remove("lightMode");
body.classList.remove("darkMode");
const mode = localStorage.getItem("mode");
const n = localStorage.getItem("name");
moonIcon.setAttribute("name", n);
body.classList.add(mode);
html.classList.add(mode);
//////////////////////////////////////////////////
