// chiedere all'utente il numero di chilometri che vuole percorrere.
const distance = prompt("numero di chilometri che vuole percorrere");
console.log("distance" , distance , typeof distance);
//prezzo per Km
let price = (distance * 0.21);
console.log("price", price, typeof price);

// l'età del passeggero
const age = prompt("l'età del passeggero");
console.log("age", age, typeof age);


// va applicato uno sconto del 20% per i minorenni
if(age < 18) {
    let priceDiscount = (price / 100 * 20);
    price = price - priceDiscount;
    console.log ("price" , price , typeof price);  
}

// va applicato uno sconto del 40% per gli over 65.
else if(age >= 65) {
    let priceDiscount = (price / 100 * 40);
    price = price - priceDiscount;
    console.log ("price" , price, typeof price);
}

//prezzo non scontato
else  {
    console.log("price" + "€", price , typeof price);
}

//stampa prezzo finale
document.getElementById("mio_id").innerHTML = ("€" + price.toFixed(2));
