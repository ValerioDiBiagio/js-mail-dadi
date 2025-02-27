// Creare una lista di email

const listEmail = ["luna@gmail.com", "valerio@gmail.com", "sonia@gmail.com", "matteo@gmail.com", "selene@gmail.com"];
console.log(listEmail);

// Chiedere all'utente la sua email

const askEmail = prompt("Inserisci la tua mail");

// Controllare se l'email è presente nella lista

let mailOk;

for (let i = 0; i < listEmail.length; i++) {
    //se l'email è presente 
    if (askEmail === listEmail[i]) {
        //Stampare "Invitato" sull'esito del controllo
        console.log("Invitato");
        mailOk = true;
        break;
    }
}
 
// Altrimenti stampare "Non invitato"
if (!mailOk) {
    console.log("Non invitato");
}
