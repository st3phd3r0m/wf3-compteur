let soutenance = new Date("2020-04-03T10:51:00");
// let soutenance = new Date("2020-08-13T09:00:00"); //2020,7,13,9,0,0

// Durées intervales de temps en millisecondes
let dureeJour = 24 * 60 * 60 * 1000;
let dureeHeure = 60 * 60 * 1000;
let dureeMinute = 60 * 1000;
let dureeSeconde = 1000;

setInterval(function () {
    console.clear();
    let maintenant = new Date();
    let diffMaintenantSoutenance = soutenance - maintenant;
    let jours = Math.floor(diffMaintenantSoutenance / dureeJour);
    let heures = Math.floor(diffMaintenantSoutenance / dureeHeure) - jours * 24;
    let minutes = Math.floor(diffMaintenantSoutenance / dureeMinute) - (jours * 24 + heures) * 60;
    let secondes = Math.floor(diffMaintenantSoutenance / dureeSeconde) - (jours * 24 * 60 + heures * 60 + minutes) * 60;
    console.log(`${jours}:${heures}:${minutes}:${secondes}`);
}, 1000);
