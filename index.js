// const axios = require("axios");

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4ba1dcd83bmshd20aad2080a7830p1dd9cejsnfd7a4fc785bd",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchApi = (ip) => {
  console.log("[****]OUTPUT[*****]");
  return fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    OPTIONS
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

// const $ = (selector) => document.querySelector(selector);

const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $submit = document.querySelector("#submit");
const $results = document.querySelector("#results");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = $input.value;
  console.log(`[****]${value}[*****]`);

  if (!value) return;
  console.log(`[****]ipcolocada[*****]`);

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");
  console.log(`[****]setcolocado[*****]`);

  const ipInfo = await fetchApi(value);
  console.log(`[****]esperadno repuesta[*****]`);

  if (ipInfo) {
    console.log("valores" + ipInfo);
    $results.innerHTML = JSON.stringify(ipInfo);
  }
  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
