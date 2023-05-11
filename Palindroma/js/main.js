/***********************
    PAROLA PALINDROMA 
************************/

/***********************
CONSEGNA

- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma
************************/

// Input utente
let inputWord = prompt("Inserisci una parola: ");

// Creo una funzione per verificare se una parola è palindroma
function isPalindrome(word) {
    
    // creo un array delle lettere della parola
    const letters = word.split("");
    console.log(letters);

    // creo un array delle lettere in ordine inverso
    const lettersReverse = letters.reverse(); 

    //creo una stringa delle lettere invertite
    const reversedWord = lettersReverse.join("");

    // verifico se l'array creato corrisponde al suo inverso
    if (inputWord === reversedWord) {
        console.log(`La parola ${inputWord} è palindroma!`);
    } else {
        console.log(`La parola ${inputWord} non è palindroma!`);   
    }
}

// Richiamo la funzione
isPalindrome(inputWord);