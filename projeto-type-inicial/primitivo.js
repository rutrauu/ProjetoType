"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isActive = true;
let age = 19;
let price = 13.90;
let product = "pastel";
let phrase = `Olá, o valor do produto ${product} é R$ ${price}`;
console.log(phrase);
function greeting(name) {
    return `Olá ${name}!`;
}
console.log(greeting("Ana"));
function currencyFormatter(value, prefix = "R$") {
    return `${prefix} ${value}`;
}
console.log(currencyFormatter(199));
console.log(currencyFormatter(199, "$"));
function updateStatus(status) {
    console.log(`New status: ${status}`);
}
updateStatus("paid");
function calcLength(input) {
    if (typeof input === "string") {
        return input.length;
    }
    return input.toString().length;
}
console.log(calcLength(55694));
console.log(calcLength("Hello World!"));
const languages = ["C#", "Java", "JavaScript"];
languages.push("PHP");
let hpptResponse;
hpptResponse = [200, "ok"];
let flexData = 10;
flexData = "information";
//# sourceMappingURL=primitivo.js.map