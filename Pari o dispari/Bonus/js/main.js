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
let userChoice, userNumber, sumResult, result;

const evenButton = document.getElementById("evenButton");
const oddButton = document.getElementById("oddButton");
const playButton = document.getElementById("playButton");
const outputUser = document.getElementById("outputUser");
const outputResult = document.getElementById("outputResult");

// L’utente sceglie pari o dispari
evenButton.addEventListener("click", function() {userChoice = even; console.log("L'utente ha scelto " + userChoice);})
oddButton.addEventListener("click", function() {userChoice = !even; console.log("L'utente ha scelto " + userChoice);})

// L'utente sceglie il numero e avvia il gioco
playButton.addEventListener("click",
    function () {
        // inserisce un numero da 1 a 5
        userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
        console.log("Il numero scelto dall'utente è: " + userNumber);outputUser.innerHTML = `Il numero scelto dall'utente è: ${userNumber}`

        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
        let compNumber = randomNumInRange(1, 5);
        console.log("Il numero scelto dal computer è: " + compNumber);
        outputPc.innerHTML = `Il numero scelto dal PC è: ${compNumber}`;

        // Sommiamo i due numeri E stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        let numSum = sumOddOrEven(userNumber, compNumber)

        // Dichiariamo chi ha vinto
        if (userChoice == numSum) {
            result = "Hai vinto!"            
        } else {
            result = "Hai perso..."
        }
        outputResult.innerHTML = `Risultato: ${result}`;
        console.log(result);
    }
)

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
        sumResult = !even;
        console.log(`la somma è ${sum}: DISPARI`);
        console.log(sumResult);
    }
    return (sumResult);
}