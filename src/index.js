let searchFormElement = document.querySelector("#search-form");
let searchInputElement = document.querySelector("#search-input");
console.log(searchFormElement, searchInputElement);
searchFormElement.addEventListener("submit", generateWittyQuote);

function generateWittyQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#quote");

  new Typewriter("#quote", {
    strings:
      "The only limit to our realization of tomorrow is our doubts of today.",
    autoStart: true,
    DelayNode: 1,
    cursor: " ",
  });
}
