
//Chiedere all'utente di inserire un numero da 1 a 6

const userNumbers = parseInt(prompt("Inserisci un numero da 1 a 6"));

let randomNumbers = userNumbers >= 1 && userNumbers <= 6;

//Generare un numero random tra l'1 e il 6 per il computer

const pcNumbers = Math.floor((Math.random() * 6) + 1);
console.log(pcNumbers);

//Stabilire il vincitore

//L'utente può inserire solo numeri dall'1 al 6

   if (randomNumbers) {
    console.log(userNumbers);

//se  esce il numero più alto al giocatore
//vince il giocatore

    if (pcNumbers > userNumbers) {
    console.log (pcNumbers,"Computer sei il vincitore!");
    
//altrimenti se esce il numero più alto al computer
//vince il computer

   } else if (userNumbers > pcNumbers) {
    console.log(userNumbers, "Utente sei il vincitore!");

//altrimenti se esce lo stesso numero
//hanno pareggiato
   
   } else if (pcNumbers === userNumbers) {
    console.log(pcNumbers, userNumbers, "Avete pareggiato");
}

//il dato non è valido

} else { 
    console.log(userNumbers, "Dato non valido");
}