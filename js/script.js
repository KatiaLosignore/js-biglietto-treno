console.log('JS OK');


// 1 - Prendere l'elemento dal DOM
// 2 - Chiedere all’utente il numero km che vuole percorrere
// 3 - Chiedere l'età del passeggero
// 4 - Variabile prezzo del biglietto al km
// 4 - Calcolare il prezzo totale del viaggio
// 5 - Variabile minorenne
// 6 - Variabile over65
// 7 - Calcolare lo sconto del 20% per i minorenni
// 8 - Calcolare lo sconto del 40% per gli over 65
// 9 - Inserire l'output del prezzo finale 



// Prendere l'elemento dal DOM
const targetElement = document.getElementById('target');
console.log(targetElement);

// Chiedere all’utente il numero km che vuole percorrere
const journey = prompt('Dimmi quanti km vuoi percorrere', 50).trim();

// Chiedere l'età del passeggero
const newAge = prompt('Dimmi quanti anni hai', 16).trim();


console.log(journey, newAge);


// prezzo del biglietto al km
const ticketKilometer = 0.21;


// Calcolare il prezzo totale del viaggio
const ticketPrice = ticketKilometer * journey;
console.log(ticketPrice);



// VALIDAZIONE

let isValid = true;

if (isNaN(journey) || journey < 1) {
    isValid = false;
}
if (isNaN(newAge) || newAge < 1) {
    isValid = false;
}


// minorenne
const underAge = 18;

// over65
const overAge = 65;


if (isValid) {
    let finalPrice = ticketPrice;
    let roundedfinalPrice;

    if (newAge < underAge) {
        finalPrice = ((ticketPrice / 100) * 80);
        roundedfinalPrice = Math.round(finalPrice * 100) / 100;
        console.log('sconto minorennni applicato, prezzo finale = ' + roundedfinalPrice);
    } else if (newAge >= overAge) {
        finalPrice = ((ticketPrice / 100) * 60);
        roundedfinalPrice = Math.round(finalPrice * 100) / 100;
        console.log('sconto minorennni applicato, prezzo finale = ' + roundedfinalPrice);
    } else {
        roundedfinalPrice = Math.round(finalPrice * 100) / 100;
        console.log('nessuno sconto applicato, prezzo finale = ' + roundedfinalPrice);
    }

    targetElement.innerText = "Il prezzo del viaggio è " + roundedfinalPrice;

} else {
    alert('Devi inserire un parametro valido');
}






