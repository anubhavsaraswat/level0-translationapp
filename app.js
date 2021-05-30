var btnId = document.querySelector("#btn");
var txt = document.querySelector("#mytext");
var out = document.querySelector(".output");



var serverURL = "https://api.funtranslations.com/translate/doge.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server:try again ");
}

function clickHandler() {
  var inputText = txt.value; //taking input

  fetch(getTranslationURL(inputText)) //processing(input part goes to server ,server process it and shows output)
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;

      out.innerText = translatedText; //giving output
    })

    .catch(errorHandler);
}

btnId.addEventListener("click", clickHandler);
