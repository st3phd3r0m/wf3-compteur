let soutenance = new Date("2020-08-13T09:00:00"); //2020,7,13,9,0,0

// Durées intervales de temps en millisecondes
let dureeJour = 24 * 60 * 60 * 1000;
let dureeHeure = 60 * 60 * 1000;
let dureeMinute = 60 * 1000;
let dureeSeconde = 1000;

setInterval(function () {
    console.clear();
    let maintenant = new Date();
    let duree = soutenance - maintenant;
    let jours = Math.floor(duree / dureeJour);
    let heures = Math.floor((duree % dureeJour) / dureeHeure);
    let minutes = Math.floor((duree % dureeHeure) / dureeMinute);
    let secondes = Math.floor((duree % dureeMinute) / dureeSeconde);
    console.log(`${jours}:${heures}:${minutes}:${secondes}`);
}, 1000);