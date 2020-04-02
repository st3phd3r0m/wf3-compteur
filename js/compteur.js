let soutenance = new Date("2020-08-13T09:00:00");


setInterval(function () {
    console.clear();
    let maintenant = new Date();
    let jours = Math.floor((soutenance - maintenant) / 1000 / 60 / 60 / 24);
    let heures = Math.floor((soutenance - maintenant) / 1000 / 60 / 60 - jours * 24);
    let minutes = Math.floor((soutenance - maintenant) / 1000 / 60 - (jours * 24 + heures) * 60);
    let secondes = Math.floor((soutenance - maintenant) / 1000 - (jours * 24 * 60 + heures * 60 + minutes) * 60);
    console.log(jours + ":" + heures + ":" + minutes + ":" + secondes);
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