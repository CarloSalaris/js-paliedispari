/***********************
    PARI O DISPARI 
************************/

/***********************
CONSEGNA

- L’utente sceglie pari o dispari
- inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri E stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
************************/

let even = true;
let userChoice, sumResult;

// L’utente sceglie pari o dispari
let userChoiceInput = prompt ("'pari' o 'dispari'?");
if (userChoiceInput == "pari") {
    userChoice = even;
}else {
    userChoice = !even;
}
console.log("L'utente ha scelto " + userChoice);

// inserisce un numero da 1 a 5
let userNumber = parseInt(prompt ("Inserisci un numero tra 1 e 5: "));
console.log("Il numero scelto dall'utente è: " + userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
let compNumber = randomNumInRange(1, 5);
console.log("Il numero scelto dal computer è: " + compNumber);

// Sommiamo i due numeri E stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let numSum = sumOddOrEven(userNumber, compNumber)

// Dichiariamo chi ha vinto
if (userChoice == sumResult) {
    alert("Hai vinto!")
    console.log("Hai vinto!");
} else {
    alert("Hai perso!")
    console.log("Hai perso!");
}

/* FUNCTIONS */
function randomNumInRange(numMin, numMax) {
    let num = Math.floor(Math.random() * (numMax - numMin)) + numMin;
    return (num);
}
function sumOddOrEven(num1, num2) {
    let sum = num1 + num2;
    if (sum % 2 === 0) {
        sumResult = even;
        console.log(`la somma è ${sum}: PARI`);
        console.log(sumResult);
    }else {
        sumResult == !even;
        console.log(`la somma è ${sum}: DISPARI`);
    }
    return (sumResult);
}

