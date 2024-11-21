import { darkMode } from "./controller/darkMode/switchLightDark.js";
import { displayBorder } from "./controller/second-page/bordersDisplay.js";
import { countryDetails } from "./model/countryDetails.js";

const countyName = window.location.href.slice(
  window.location.href.indexOf("?") + 1
);
countryDetails(countyName);
darkMode();

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
