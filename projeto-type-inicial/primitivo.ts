let isActive: boolean = true;
let age: number = 19;
let price: number = 13.90;
let product: string = "pastel";

let phrase: string =
    `Olá, o valor do produto ${product} é R$ ${price}`;

console.log(phrase);

function greeting(name: string): string{
    return `Olá ${name}!`;    
}

console.log(greeting("Ana"));

function currencyFormatter(value: number, prefix: string = "R$"):
    string {
    return `${prefix} ${value}`;
}

console.log(currencyFormatter(199));
console.log(currencyFormatter(199, "$"));

type StatusOrder = "billed" | "paid" | "canceled";

function updateStatus(status: StatusOrder): void{
    console.log(`New status: ${status}`);
}

updateStatus("paid");

function calcLength(input: string | number): number{
    if(typeof input === "string"){
        return input.length;
    }
    return input.toString().length;
}

console.log(calcLength(55694));
 console.log(calcLength("Hello World!"));

const languages: string[] = ["C#", "Java", "JavaScript"];
languages.push("PHP");

let hpptResponse: [number, string];
hpptResponse = [200, "ok"]

let flexData: any = 10;
flexData = "information";