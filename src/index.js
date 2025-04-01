let searchFormElement = document.querySelector("#search-form");
let searchInputElement = document.querySelector("#search-input");
console.log(searchFormElement, searchInputElement);
searchFormElement.addEventListener("submit", generateWittyQuote);

function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer + " - ",
    autoStart: true,
    DelayNode: 1,
    cursor: " ",
  });
}


function generateWittyQuote(event) {
  event.preventDefault();
  let quoteElement = document.querySelector("#quote");
   quoteElement.classList.add("loading");
   quoteElement.innerHTML = " 📚Loading a witty quote...";

  let apikey = "0fcte29ba005o3984f3f24530ff18441";
  let prompt = "generate a funny philosphical witty quote";
  let searchInputElement = document.querySelector("#search-input");
  let context =
    "Generate a witty quote on the topic of " + searchInputElement.value + " and sign it with <br/>'SheCodes AI'.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  axios.get(apiUrl).then(displayQuote).catch((error) => {
    console.error("Error fetching the quote:", error);
    quoteElement.innerHTML = "❌ Sorry, I couldn't generate a witty quote. Please try again.";
  });
}


  