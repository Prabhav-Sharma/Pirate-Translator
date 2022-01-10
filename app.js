//ES6 Code Version
const button= document.querySelector("#button");
const txtInput= document.querySelector("#txt-input");
const outputBox= document.querySelector("#output-box");


const serverUrl="https://api.funtranslations.com/translate/pirate.json";

const getTranslationUrl=text=> `${serverUrl}?text=${text}`;

const errorHandler=error=> console.log("error occured", error);

const fetchData= _=>{
    let userInput= txtInput.value;
fetch(getTranslationUrl(userInput)).then(response=> response.json()).then(json=>outputBox.innerText = json.contents.translated).catch(errorHandler);
};

button.addEventListener("click", fetchData);
