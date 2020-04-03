let soutenance = new Date("2020-04-03T10:45:00");
// let soutenance = new Date("2020-08-13T09:00:00"); //2020,7,13,9,0,0

// Durées intervales de temps en millisecondes
let dureeJour = 24 * 60 * 60 * 1000;
let dureeHeure = 60 * 60 * 1000;
let dureeMinute = 60 * 1000;
let dureeSeconde = 1000;

let maintenant = new Date();
let duree = soutenance - maintenant;
let jours = Math.floor(duree / dureeJour);
duree %= dureeJour;
let heures = Math.floor(duree / dureeHeure);
duree %= dureeHeure;
let minutes = Math.floor(duree / dureeMinute);
duree %= dureeMinute;
let secondes = Math.floor(duree / dureeSeconde);

let monInterval = setInterval(function () {
    console.clear();
    if (secondes > 0) {
        secondes--;
    } else {
        secondes = 59;
        if (minutes > 0) {
            minutes--;
        } else {
            minutes == 59;
            if (heures > 0) {
                heures--;
            } else {
                heures = 23;
                if (jours > 0) {
                    jours--;
                } else {
                    // sortir de setInterval
                    jours = 0;
                    heures = 0;
                    minutes = 0;
                    secondes = 0;
                    clearInterval(monInterval);
                    console.log(`L'heure est arrivée ! Tu vas passer sur le grill !`);
                }
            }
        }
    }
    console.log(`${jours}:${heures}:${minutes}:${secondes}`);
}, 1000);









// Méthodes diverses

//     getTime() : retourne le nombre de millisecondes écoulées depuis le 01/01/1970

//     setTime(x) : modifie la date en précisant le nombre x de millisecondes écoulées depuis le 01/01/1970

//     getTimezoneOffset() : retourne, en minutes, le décalage horaire avec le méridien de Greenwich.

// Récupérer et modifier l'heure

//     getPropriété() pour lire la propriété

//     setPropriété(x) pour modifier la propriété

//     getUTCPropriété() pour lire la propriété (au méridien de Greenwitch)

//     setUTCPropriété(x) pour modifier la propriété (au méridien de Greenwich).

// Les propriétés sont...

//     FullYear : l'année (à 4 chiffres)

//     Month : le mois

//     Date : le jour du mois

//     Day : le jour de la semaine.
//     Il vaut 0 pour dimanche ; 1 pour lundi [...] ; 6 pour samedi.

//     Hours : l'heure (de 0 à 23)

//     Minutes : les minutes

//     Seconds : les secondes

//     Milliseconds : les millisecondes