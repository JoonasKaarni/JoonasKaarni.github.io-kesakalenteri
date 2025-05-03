let tanaan = new Date();

let viikot25 = [
    { start: "2025-06-01", end: "2025-06-07"},
    { start: "2025-06-08", end: "2025-06-14"},
    { start: "2025-06-15", end: "2025-06-21"},
    { start: "2025-06-22", end: "2025-06-28"},
    { start: "2025-06-29", end: "2025-07-05"},
    { start: "2025-07-06", end: "2025-07-12"},
    { start: "2025-07-13", end: "2025-07-19"},
    { start: "2025-07-20", end: "2025-07-26"},
    { start: "2025-07-27", end: "2025-08-02"},
    { start: "2025-08-03", end: "2025-08-09"},
    { start: "2025-08-10", end: "2025-08-16"},
    { start: "2025-08-17", end: "2025-08-23"},
    { start: "2025-08-24", end: "2025-08-30"}
]
let viikot24 = [
    { start: "2024-06-01", end: "2024-06-07"},
    { start: "2024-06-08", end: "2024-06-14"},
    { start: "2024-06-15", end: "2024-06-21"},
    { start: "2024-06-22", end: "2024-06-28"},
    { start: "2024-06-29", end: "2024-07-05"},
    { start: "2024-07-06", end: "2024-07-12"},
    { start: "2024-07-13", end: "2024-07-19"},
    { start: "2024-07-20", end: "2024-07-26"},
    { start: "2024-07-27", end: "2024-08-02"},
    { start: "2024-08-03", end: "2024-08-09"},
    { start: "2024-08-10", end: "2024-08-16"},
    { start: "2024-08-17", end: "2024-08-23"},
    { start: "2024-08-24", end: "2024-08-30"}
]
let viikot = [...viikot25]
function enterCheatmode() {
    if (viikot[0].start === "2025-06-01") {
        viikot = [...viikot24]
        cheatmode.style.backgroundColor = "#1ef901";
    } else if (viikot[0].start === "2024-06-01") {
        viikot = [...viikot25]
        cheatmode.style.backgroundColor = "#ff0404";
    }
}

function avaaLuukku1 () {
    let viikko = viikot[0];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Kiasmassa on perjantaina ilmainen sisäänpääsy!";
    if (document.getElementById("l1").innerHTML === "Viikko 1 on avattu!<br>" + teksti) {
        document.getElementById("l1").innerHTML = "Viikko 1"
    } else if (document.getElementById("l1").innerHTML === "Viikko 1 on vielä lukittu.") {
        document.getElementById("l1").innerHTML = "Viikko 1"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l1").innerHTML = "Viikko 1 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l1").innerHTML = "Viikko 1 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l1").innerHTML = "Viikko 1 on vielä lukittu.";
    }
}

function avaaLuukku2 () {
    let viikko = viikot[1];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Luonnontieteellisessä museossa on ilta museossa -tapahtuma!";
    if (document.getElementById("l2").innerHTML === "Viikko 2 on avattu!<br>" + teksti) {
        document.getElementById("l2").innerHTML = "Viikko 2"
    } else if (document.getElementById("l2").innerHTML === "Viikko 2 on vielä lukittu.") {
        document.getElementById("l2").innerHTML = "Viikko 2"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l2").innerHTML = "Viikko 2 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l2").innerHTML = "Viikko 2 on avattu!<br>" + teksti; 
    } else {
        document.getElementById("l2").innerHTML = "Viikko 2 on vielä lukittu.";
    }
}
function avaaLuukku3 () {
    let viikko = viikot[2];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Juhannusviikko. Seurasaaressa on ilmainen tapahtuma kokkoineen!";
    if (document.getElementById("l3").innerHTML === "Viikko 3 on avattu!<br>" + teksti) {
        document.getElementById("l3").innerHTML = "Viikko 3"
    } else if (document.getElementById("l3").innerHTML === "Viikko 3 on vielä lukittu.") {
        document.getElementById("l3").innerHTML = "Viikko 3"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l3").innerHTML = "Viikko 3 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l3").innerHTML = "Viikko 3 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l3").innerHTML = "Viikko 3 on vielä lukittu.";
    }
}
function avaaLuukku4 () {
    let viikko = viikot[3];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Helsingin keskustassa juhlitaan Tuska festivaalia, sekä prideä!";
    if (document.getElementById("l4").innerHTML === "Viikko 4 on avattu!<br>" + teksti) {
        document.getElementById("l4").innerHTML = "Viikko 4"
    } else if (document.getElementById("l4").innerHTML === "Viikko 4 on vielä lukittu.") {
        document.getElementById("l4").innerHTML = "Viikko 4"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l4").innerHTML = "Viikko 4 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l4").innerHTML = "Viikko 4 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l4").innerHTML = "Viikko 4 on vielä lukittu.";
    }
}
function avaaLuukku5 () {
    let viikko = viikot[4];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Heurekassa on jääkauden jättiläiset -näyttely!";
    if (document.getElementById("l5").innerHTML === "Viikko 5 on avattu!<br>" + teksti) {
        document.getElementById("l5").innerHTML = "Viikko 5"
    } else if (document.getElementById("l5").innerHTML === "Viikko 5 on vielä lukittu.") {
        document.getElementById("l5").innerHTML = "Viikko 5"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l5").innerHTML = "Viikko 5 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l5").innerHTML = "Viikko 5 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l5").innerHTML = "Viikko 5 on vielä lukittu.";
    }
}
function avaaLuukku6 () {
    let viikko = viikot[5];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Helsinki Cup, tämä jalkapallo tapahtuma kestää koko viikon!";
    if (document.getElementById("l6").innerHTML === "Viikko 6 on avattu!<br>" + teksti) {
        document.getElementById("l6").innerHTML = "Viikko 6"
    } else if (document.getElementById("l6").innerHTML === "Viikko 6 on vielä lukittu.") {
        document.getElementById("l6").innerHTML = "Viikko 6"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l6").innerHTML = "Viikko 6 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l6").innerHTML = "Viikko 6 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l6").innerHTML = "Viikko 6 on vielä lukittu.";
    }
}
function avaaLuukku7 () {
    let viikko = viikot[6];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Olympiapäivä Helsingin olympiastadionilla, tapahtuma on ilmainen!";
    if (document.getElementById("l7").innerHTML === "Viikko 7 on avattu!<br>" + teksti) {
        document.getElementById("l7").innerHTML = "Viikko 7"
    } else if (document.getElementById("l7").innerHTML === "Viikko 7 on vielä lukittu.") {
        document.getElementById("l7").innerHTML = "Viikko 7"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l7").innerHTML = "Viikko 7 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l7").innerHTML = "Viikko 7 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l7").innerHTML = "Viikko 7 on vielä lukittu.";
    }
}
function avaaLuukku8 () {
    let viikko = viikot[7];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Suomenlinnan kesäteatterissa on tarjolla runsaasti näytelmiä!";
    if (document.getElementById("l8").innerHTML === "Viikko 8 on avattu!<br>" + teksti) {
        document.getElementById("l8").innerHTML = "Viikko 8"
    } else if (document.getElementById("l8").innerHTML === "Viikko 8 on vielä lukittu.") {
        document.getElementById("l8").innerHTML = "Viikko 8"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l8").innerHTML = "Viikko 8 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l8").innerHTML = "Viikko 8 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l8").innerHTML = "Viikko 8 on vielä lukittu.";
    }
}
function avaaLuukku9 () {
    let viikko = viikot[8];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Päiväreissu Linnanmäelle, sisäänpääsy on ilmainen!";
    if (document.getElementById("l9").innerHTML === "Viikko 9 on avattu!<br>" + teksti) {
        document.getElementById("l9").innerHTML = "Viikko 9"
    } else if (document.getElementById("l9").innerHTML === "Viikko 9 on vielä lukittu.") {
        document.getElementById("l9").innerHTML = "Viikko 9"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l9").innerHTML = "Viikko 9 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l9").innerHTML = "Viikko 9 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l9").innerHTML = "Viikko 9 on vielä lukittu.";
    }
}
function avaaLuukku10 () {
    let viikko = viikot[9];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Helsingissä juhlitaan Flow festivaaleja!";
    if (document.getElementById("l10").innerHTML === "Viikko 10 on avattu!<br>" + teksti) {
        document.getElementById("l10").innerHTML = "Viikko 10"
    } else if (document.getElementById("l10").innerHTML === "Viikko 10 on vielä lukittu.") {
        document.getElementById("l10").innerHTML = "Viikko 10"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l10").innerHTML = "Viikko 10 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l10").innerHTML = "Viikko 10 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l10").innerHTML = "Viikko 10 on vielä lukittu.";
    }
}
function avaaLuukku11 () {
    let viikko = viikot[10];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Päiväreissu Fallkullan kotieläintilalle!";
    if (document.getElementById("l11").innerHTML === "Viikko 11 on avattu!<br>" + teksti) {
        document.getElementById("l11").innerHTML = "Viikko 11"
    } else if (document.getElementById("l11").innerHTML === "Viikko 11 on vielä lukittu.") {
        document.getElementById("l11").innerHTML = "Viikko 11"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l11").innerHTML = "Viikko 11 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l11").innerHTML = "Viikko 11 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l11").innerHTML = "Viikko 11 on vielä lukittu.";
    }
}
function avaaLuukku12 () {
    let viikko = viikot[11];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Smashing Pumpkins esiintyy Helsingin jäähallissa!";
    if (document.getElementById("l12").innerHTML === "Viikko 12 on avattu!<br>" + teksti) {
        document.getElementById("l12").innerHTML = "Viikko 12"
    } else if (document.getElementById("l12").innerHTML === "Viikko 12 on vielä lukittu.") {
        document.getElementById("l12").innerHTML = "Viikko 12"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l12").innerHTML = "Viikko 12 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l12").innerHTML = "Viikko 12 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l12").innerHTML = "Viikko 12 on vielä lukittu.";
    }
}
function avaaLuukku13 () {
    let viikko = viikot[12];
    let start = new Date(viikko.start);
    let end = new Date(viikko.end);
    let teksti = "Venetsialaiset, eli mökkikauden päätösjuhlat. Runsaasti ilotulituksia ympäri pääkaupunkiseutua!";
    if (document.getElementById("l13").innerHTML === "Viikko 13 on avattu!<br>" + teksti) {
        document.getElementById("l13").innerHTML = "Viikko 13"
    } else if (document.getElementById("l13").innerHTML === "Viikko 13 on vielä lukittu.") {
        document.getElementById("l13").innerHTML = "Viikko 13"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l13").innerHTML = "Viikko 13 on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l13").innerHTML = "Viikko 13 on avattu!<br>" + teksti;
    } else {
        document.getElementById("l13").innerHTML = "Viikko 13 on vielä lukittu.";
    }
}