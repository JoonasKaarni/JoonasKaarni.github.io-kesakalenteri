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
    let Vko = viikot[0];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Kiasmassa on perjantaina ilmainen sisäänpääsy! <a href="https://www.kiasma.fi" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
        if (document.getElementById("l1").innerHTML === "Vko 1 (1.6 - 7.6) on avattu!<br>" + teksti) {
        document.getElementById("l1").innerHTML = "Vko 1"
    } else if (document.getElementById("l1").innerHTML === "Vko 1 (1.6 - 7.6) on vielä lukittu.") {
        document.getElementById("l1").innerHTML = "Vko 1"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l1").innerHTML = "Vko 1 (1.6 - 7.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l1").innerHTML = "Vko 1 (1.6 - 7.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l1").innerHTML = "Vko 1 (1.6 - 7.6) on vielä lukittu.";
    }
}

function avaaLuukku2 () {
    let Vko = viikot[1];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Luonnontieteellisessä museossa on ilta museossa -tapahtuma. <a href="https://www.helsinki.fi/fi/luomus/yleisokohteet/luonnontieteellinen-museo" target="_blank" class="lisatietoja-linkki"> Lisätietoja</a>';
    if (document.getElementById("l2").innerHTML === "Vko 2 (8.6 - 14.6) on avattu!<br>" + teksti) {
        document.getElementById("l2").innerHTML = "Vko 2"
    } else if (document.getElementById("l2").innerHTML === "Vko 2 (8.6 - 14.6) on vielä lukittu.") {
        document.getElementById("l2").innerHTML = "Vko 2"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l2").innerHTML = "Vko 2 (8.6 - 14.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l2").innerHTML = "Vko 2 (8.6 - 14.6) on avattu!<br>" + teksti; 
    } else {
        document.getElementById("l2").innerHTML = "Vko 2 (8.6 - 14.6) on vielä lukittu.";
    }
}
function avaaLuukku3 () {
    let Vko = viikot[2];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'JuhannusVko. Seurasaaressa on ilmainen tapahtuma kokkoineen! <a href="https://www.juhannusvalkeat.fi/new/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l3").innerHTML === "Vko 3 (15.6 - 21.6) on avattu!<br>" + teksti) {
        document.getElementById("l3").innerHTML = "Vko 3"
    } else if (document.getElementById("l3").innerHTML === "Vko 3 (15.6 - 21.6) on vielä lukittu.") {
        document.getElementById("l3").innerHTML = "Vko 3"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l3").innerHTML = "Vko 3 (15.6 - 21.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l3").innerHTML = "Vko 3 (15.6 - 21.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l3").innerHTML = "Vko 3 (15.6 - 21.6) on vielä lukittu.";
    }
}
function avaaLuukku4 () {
    let Vko = viikot[3];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Helsingin keskustassa juhlitaan Tuska festivaalia, sekä prideä! <a href="https://tuska.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l4").innerHTML === "Vko 4 (22.6 - 28.6) on avattu!<br>" + teksti) {
        document.getElementById("l4").innerHTML = "Vko 4"
    } else if (document.getElementById("l4").innerHTML === "Vko 4 (22.6 - 28.6) on vielä lukittu.") {
        document.getElementById("l4").innerHTML = "Vko 4"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l4").innerHTML = "Vko 4 (22.6 - 28.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l4").innerHTML = "Vko 4 (22.6 - 28.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l4").innerHTML = "Vko 4 (22.6 - 28.6) on vielä lukittu.";
    }
}
function avaaLuukku5 () {
    let Vko = viikot[4];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Heurekassa on jääkauden jättiläiset -näyttely! <a href="https://www.heureka.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l5").innerHTML === "Vko 5 (29.6 - 5.7) on avattu!<br>" + teksti) {
        document.getElementById("l5").innerHTML = "Vko 5"
    } else if (document.getElementById("l5").innerHTML === "Vko 5 (29.6 - 5.7) on vielä lukittu.") {
        document.getElementById("l5").innerHTML = "Vko 5"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l5").innerHTML = "Vko 5 (29.6 - 5.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l5").innerHTML = "Vko 5 (29.6 - 5.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l5").innerHTML = "Vko 5 (29.6 - 5.7) on vielä lukittu.";
    }
}
function avaaLuukku6 () {
    let Vko = viikot[5];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Helsinki Cup, tämä jalkapallo tapahtuma kestää koko viikon! <a href="https://helsinkicup.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l6").innerHTML === "Vko 6 (6.7 - 12.7) on avattu!<br>" + teksti) {
        document.getElementById("l6").innerHTML = "Vko 6"
    } else if (document.getElementById("l6").innerHTML === "Vko 6 (6.7 - 12.7) on vielä lukittu.") {
        document.getElementById("l6").innerHTML = "Vko 6"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l6").innerHTML = "Vko 6 (6.7 - 12.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l6").innerHTML = "Vko 6 (6.7 - 12.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l6").innerHTML = "Vko 6 (6.7 - 12.7) on vielä lukittu.";
    }
}
function avaaLuukku7 () {
    let Vko = viikot[6];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Tikkurila fesivaalia juhlitaan Tikkurilan urheilukentällä! <a href="https://tikkurilafestivaali.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l7").innerHTML === "Vko 7 (13.7 - 19.7) on avattu!<br>" + teksti) {
        document.getElementById("l7").innerHTML = "Vko 7"
    } else if (document.getElementById("l7").innerHTML === "Vko 7 (13.7 - 19.7) on vielä lukittu.") {
        document.getElementById("l7").innerHTML = "Vko 7"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l7").innerHTML = "Vko 7 (13.7 - 19.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l7").innerHTML = "Vko 7 (13.7 - 19.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l7").innerHTML = "Vko 7 (13.7 - 19.7) on vielä lukittu.";
    }
}
function avaaLuukku8 () {
    let Vko = viikot[7];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Suomenlinnan kesäteatterissa on tarjolla runsaasti näytelmiä! <a href="https://www.ryhmateatteri.fi/info/suomenlinnan-kesateatteri/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l8").innerHTML === "Vko 8 (20.7 - 26.7) on avattu!<br>" + teksti) {
        document.getElementById("l8").innerHTML = "Vko 8"
    } else if (document.getElementById("l8").innerHTML === "Vko 8 (20.7 - 26.7) on vielä lukittu.") {
        document.getElementById("l8").innerHTML = "Vko 8"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l8").innerHTML = "Vko 8 (20.7 - 26.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l8").innerHTML = "Vko 8 (20.7 - 26.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l8").innerHTML = "Vko 8 (20.7 - 26.7) on vielä lukittu.";
    }
}
function avaaLuukku9 () {
    let Vko = viikot[8];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Päiväreissu Linnanmäelle, sisäänpääsy on ilmainen <a href="https://www.linnanmaki.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l9").innerHTML === "Vko 9 (27.7 - 2.8) on avattu!<br>" + teksti) {
        document.getElementById("l9").innerHTML = "Vko 9"
    } else if (document.getElementById("l9").innerHTML === "Vko 9 (27.7 - 2.8) on vielä lukittu.") {
        document.getElementById("l9").innerHTML = "Vko 9"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l9").innerHTML = "Vko 9 (27.7 - 2.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l9").innerHTML = "Vko 9 (27.7 - 2.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l9").innerHTML = "Vko 9 (27.7 - 2.8) on vielä lukittu.";
    }
}
function avaaLuukku10 () {
    let Vko = viikot[9];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Helsingissä juhlitaan Flow festivaaleja! <a href="https://www.flowfestival.com/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l10").innerHTML === "Vko 10 (3.8 - 9.8) on avattu!<br>" + teksti) {
        document.getElementById("l10").innerHTML = "Vko 10"
    } else if (document.getElementById("l10").innerHTML === "Vko 10 (3.8 - 9.8) on vielä lukittu.") {
        document.getElementById("l10").innerHTML = "Vko 10"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l10").innerHTML = "Vko 10 (3.8 - 9.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l10").innerHTML = "Vko 10 (3.8 - 9.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l10").innerHTML = "Vko 10 (3.8 - 9.8) on vielä lukittu.";
    }
}
function avaaLuukku11 () {
    let Vko = viikot[10];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Päiväreissu Fallkullan kotieläintilalle! <a href="https://nuorten.hel.fi/nuorisotalot/fallkulla/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l11").innerHTML === "Vko 11 (10.8 - 16.8) on avattu!<br>" + teksti) {
        document.getElementById("l11").innerHTML = "Vko 11"
    } else if (document.getElementById("l11").innerHTML === "Vko 11 (10.8 - 16.8) on vielä lukittu.") {
        document.getElementById("l11").innerHTML = "Vko 11"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l11").innerHTML = "Vko 11 (10.8 - 16.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l11").innerHTML = "Vko 11 (10.8 - 16.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l11").innerHTML = "Vko 11 (10.8 - 16.8) on vielä lukittu.";
    }
}
function avaaLuukku12 () {
    let Vko = viikot[11];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'The Smashing Pumpkins esiintyy Helsingin jäähallissa! <a href="https://www.livenation.fi/event/the-smashing-pumpkins-the-aghori-tour-helsinki-tickets-edp1566939" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l12").innerHTML === "Vko 12 (17.8 - 23.8) on avattu!<br>" + teksti) {
        document.getElementById("l12").innerHTML = "Vko 12"
    } else if (document.getElementById("l12").innerHTML === "Vko 12 (17.8 - 23.8) on vielä lukittu.") {
        document.getElementById("l12").innerHTML = "Vko 12"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l12").innerHTML = "Vko 12 (17.8 - 23.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l12").innerHTML = "Vko 12 (17.8 - 23.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l12").innerHTML = "Vko 12 (17.8 - 23.8) on vielä lukittu.";
    }
}
function avaaLuukku13 () {
    let Vko = viikot[12];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Venetsialaiset, eli mökkikauden päätösjuhlat. Runsaasti ilotulituksia ympäri pääkaupunkiseutua! <a href="https://kaupunginosat.fi/tapahtuma/venetsialaiset-stadissa-la-31-8-eri-kaupunginosissa/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l13").innerHTML === "Vko 13 (24.8 - 30.8) on avattu!<br>" + teksti) {
        document.getElementById("l13").innerHTML = "Vko 13"
    } else if (document.getElementById("l13").innerHTML === "Vko 13 (24.8 - 30.8) on vielä lukittu.") {
        document.getElementById("l13").innerHTML = "Vko 13"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l13").innerHTML = "Vko 13 (24.8 - 30.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l13").innerHTML = "Vko 13 (24.8 - 30.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l13").innerHTML = "Vko 13 (24.8 - 30.8) on vielä lukittu.";
    }
}