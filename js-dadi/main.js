//Generare un numero random tra l'1 e il 6 sia per il giocatore che per il computer

const pcNumbers = Math.floor((Math.random() * 6) + 1);
console.log(pcNumbers);

const userNumbers = Math.floor((Math.random() * 6) + 1);
console.log(userNumbers);

//Stabilire il vincitore

//se esce il numero più alto al computer
//vince il computer

if (pcNumbers > userNumbers) {
    console.log(pcNumbers, "Computer sei il vincitore!");

//altrimenti se esce il numero più alto al computer
//vince il computer

} else if (userNumbers > pcNumbers) {
    console.log(userNumbers, "Utente sei il vincitore!");

//altrimenti se esce lo stesso numero
//hanno pareggiato

} else if (pcNumbers === userNumbers) {
    console.log(pcNumbers, userNumbers, "Avete pareggiato");
}
    