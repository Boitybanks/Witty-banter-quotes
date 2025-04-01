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

let getnewquote = document.querySelector("#new-quote");
console.log(getnewquote);
getnewquote.addEventListener("click", generateNewQuote);

function generateNewQuote(event) {
  event.preventDefault();

  let getnewquote = document.querySelector("#new-quote");
  getnewquote.innerHTML = "Generating a new qoute on the same topic.";
  getnewquote.style.color = "black";

  new Typewriter("#quote", {
    strings: "Generating a new quote on the same topic.",
    autoStart: true,
    DelayNode: 1,
    cursor: " ",
  });
}
