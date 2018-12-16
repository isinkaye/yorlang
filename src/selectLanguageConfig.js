const readlineSync = require("readline-sync");
const fs = require("fs");

var lang = [
    "english",
    "yoruba",
];

let defaultLang = "english";

const input = readlineSync.question("Please choose your prefered error/warning messages language. English / Yoruba: ");
const inputLowerCase = input.toLowerCase();

(lang.includes(inputLowerCase)) ? defaultLang = inputLowerCase : console.warn("Inputed Language not available yet!");

fs.writeFile("src/language.js", 'export default { Language: { defaultLang: "' + defaultLang + '" } };', (err) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log(defaultLang + " has been successfully set as default error/warning language");
    }
});
