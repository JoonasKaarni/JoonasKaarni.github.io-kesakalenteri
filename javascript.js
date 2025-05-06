let tanaan = new Date();

let viikot25 = [
    { start: "2025-05-19", end: "2025-05-25"},
    { start: "2025-05-26", end: "2025-06-01"},
    { start: "2025-06-02", end: "2025-06-08"},
    { start: "2025-06-09", end: "2025-06-15"},
    { start: "2025-06-16", end: "2025-06-22"},
    { start: "2025-06-23", end: "2025-06-29"},
    { start: "2025-06-30", end: "2025-07-06"},
    { start: "2025-07-07", end: "2025-07-13"},
    { start: "2025-07-14", end: "2025-07-20"},
    { start: "2025-07-21", end: "2025-07-27"},
    { start: "2025-07-28", end: "2025-08-03"},
    { start: "2025-08-04", end: "2025-08-10"},
    { start: "2025-08-11", end: "2025-08-17"}
]
let viikot24 = [
    { start: "2024-05-19", end: "2024-05-25"},
    { start: "2024-05-26", end: "2024-06-01"},
    { start: "2024-06-02", end: "2024-06-08"},
    { start: "2024-06-09", end: "2024-06-15"},
    { start: "2024-06-16", end: "2024-06-22"},
    { start: "2024-06-23", end: "2024-06-29"},
    { start: "2024-06-30", end: "2024-07-06"},
    { start: "2024-07-07", end: "2024-07-13"},
    { start: "2024-07-14", end: "2024-07-20"},
    { start: "2024-07-21", end: "2024-07-27"},
    { start: "2024-07-28", end: "2024-08-03"},
    { start: "2024-08-04", end: "2024-08-10"},
    { start: "2024-08-11", end: "2024-08-17"}
]
let viikot = [...viikot25]
function enterCheatmode() {
    if (viikot[0].start === "2025-05-19") {
        viikot = [...viikot24]
        cheatmode.style.backgroundColor = "#1ef901";
    } else if (viikot[0].start === "2024-05-19") {
        viikot = [...viikot25]
        cheatmode.style.backgroundColor = "#ff0404";
    }
}

function avaaLuukku1 () {
    let Vko = viikot[0];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = ' <a href="" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
        if (document.getElementById("l1").innerHTML === "Vko 1 (19.5 - 25.5) on avattu!<br>" + teksti) {
        document.getElementById("l1").innerHTML = "Vko 1"
    } else if (document.getElementById("l1").innerHTML === "Vko 1 (19.5 - 25.5) on vielä lukittu.") {
        document.getElementById("l1").innerHTML = "Vko 1"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l1").innerHTML = "Vko 1 (19.5 - 25.5) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l1").innerHTML = "Vko 1 (19.5 - 25.5) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l1").innerHTML = "Vko 1 (19.5 - 25.5) on vielä lukittu.";
    }
}

function avaaLuukku2 () {
    let Vko = viikot[1];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = '<a href="" target="_blank" class="lisatietoja-linkki"> Lisätietoja</a>';
    if (document.getElementById("l2").innerHTML === "Vko 2 (26.5 - 1.6) on avattu!<br>" + teksti) {
        document.getElementById("l2").innerHTML = "Vko 2"
    } else if (document.getElementById("l2").innerHTML === "Vko 2 (26.5 - 1.6) on vielä lukittu.") {
        document.getElementById("l2").innerHTML = "Vko 2"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l2").innerHTML = "Vko 2 (26.5 - 1.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l2").innerHTML = "Vko 2 (26.5 - 1.6) on avattu!<br>" + teksti; 
    } else {
        document.getElementById("l2").innerHTML = "Vko 2 (26.5 - 1.6) on vielä lukittu.";
    }
}
function avaaLuukku3 () {
    let Vko = viikot[2];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Kiasmassa on perjantaina ilmainen sisäänpääsy! <a href="https://www.kiasma.fi" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l3").innerHTML === "Vko 3 (2.6 - 8.6) on avattu!<br>" + teksti) {
        document.getElementById("l3").innerHTML = "Vko 3"
    } else if (document.getElementById("l3").innerHTML === "Vko 3 (2.6 - 8.6) on vielä lukittu.") {
        document.getElementById("l3").innerHTML = "Vko 3"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l3").innerHTML = "Vko 3 (2.6 - 8.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l3").innerHTML = "Vko 3 (2.6 - 8.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l3").innerHTML = "Vko 3 (2.6 - 8.6) on vielä lukittu.";
    }
}
function avaaLuukku4 () {
    let Vko = viikot[3];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Luonnontieteellisessä museossa on ilta museossa -tapahtuma. <a href="https://www.helsinki.fi/fi/luomus/yleisokohteet/luonnontieteellinen-museo" target="_blank" class="lisatietoja-linkki"> Lisätietoja</a>';
    if (document.getElementById("l4").innerHTML === "Vko 4 (9.6 - 15.6) on avattu!<br>" + teksti) {
        document.getElementById("l4").innerHTML = "Vko 4"
    } else if (document.getElementById("l4").innerHTML === "Vko 4 (9.6 - 15.6) on vielä lukittu.") {
        document.getElementById("l4").innerHTML = "Vko 4"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l4").innerHTML = "Vko 4 (9.6 - 15.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l4").innerHTML = "Vko 4 (9.6 - 15.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l4").innerHTML = "Vko 4 (9.6 - 15.6) on vielä lukittu.";
    }
}
function avaaLuukku5 () {
    let Vko = viikot[4];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'JuhannusVko. Seurasaaressa on ilmainen tapahtuma kokkoineen! <a href="https://www.juhannusvalkeat.fi/new/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l5").innerHTML === "Vko 5 (16.6 - 22.6) on avattu!<br>" + teksti) {
        document.getElementById("l5").innerHTML = "Vko 5"
    } else if (document.getElementById("l5").innerHTML === "Vko 5 (16.6 - 22.6) on vielä lukittu.") {
        document.getElementById("l5").innerHTML = "Vko 5"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l5").innerHTML = "Vko 5 (16.6 - 22.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l5").innerHTML = "Vko 5 (16.6 - 22.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l5").innerHTML = "Vko 5 (16.6 - 22.6) on vielä lukittu.";
    }
}
function avaaLuukku6 () {
    let Vko = viikot[5];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Helsingin keskustassa juhlitaan Tuska festivaalia, sekä prideä! <a href="https://tuska.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l6").innerHTML === "Vko 6 (23.6 - 29.6) on avattu!<br>" + teksti) {
        document.getElementById("l6").innerHTML = "Vko 6"
    } else if (document.getElementById("l6").innerHTML === "Vko 6 (23.6 - 29.6) on vielä lukittu.") {
        document.getElementById("l6").innerHTML = "Vko 6"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l6").innerHTML = "Vko 6 (23.6 - 29.6) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l6").innerHTML = "Vko 6 (23.6 - 29.6) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l6").innerHTML = "Vko 6 (23.6 - 29.6) on vielä lukittu.";
    }
}
function avaaLuukku7 () {
    let Vko = viikot[6];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Heurekassa on jääkauden jättiläiset -näyttely! <a href="https://www.heureka.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l7").innerHTML === "Vko 7 (30.6 - 6.7) on avattu!<br>" + teksti) {
        document.getElementById("l7").innerHTML = "Vko 7"
    } else if (document.getElementById("l7").innerHTML === "Vko 7 (30.6 - 6.7) on vielä lukittu.") {
        document.getElementById("l7").innerHTML = "Vko 7"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l7").innerHTML = "Vko 7 (30.6 - 6.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l7").innerHTML = "Vko 7 (30.6 - 6.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l7").innerHTML = "Vko 7 (30.6 - 6.7) on vielä lukittu.";
    }
}
function avaaLuukku8 () {
    let Vko = viikot[7];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Helsinki Cup, tämä jalkapallo tapahtuma kestää koko viikon! <a href="https://helsinkicup.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l8").innerHTML === "Vko 8 (7.7 - 13.7) on avattu!<br>" + teksti) {
        document.getElementById("l8").innerHTML = "Vko 8"
    } else if (document.getElementById("l8").innerHTML === "Vko 8 (7.7 - 13.7) on vielä lukittu.") {
        document.getElementById("l8").innerHTML = "Vko 8"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l8").innerHTML = "Vko 8 (7.7 - 13.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l8").innerHTML = "Vko 8 (7.7 - 13.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l8").innerHTML = "Vko 8 (7.7 - 13.7) on vielä lukittu.";
    }
}
function avaaLuukku9 () {
    let Vko = viikot[8];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Tikkurila fesivaalia juhlitaan Tikkurilan urheilukentällä! <a href="https://tikkurilafestivaali.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l9").innerHTML === "Vko 9 (14.7 - 20.7) on avattu!<br>" + teksti) {
        document.getElementById("l9").innerHTML = "Vko 9"
    } else if (document.getElementById("l9").innerHTML === "Vko 9 (14.7 - 20.7) on vielä lukittu.") {
        document.getElementById("l9").innerHTML = "Vko 9"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l9").innerHTML = "Vko 9 (14.7 - 20.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l9").innerHTML = "Vko 9 (14.7 - 20.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l9").innerHTML = "Vko 9 (14.7 - 20.7) on vielä lukittu.";
    }
}
function avaaLuukku10 () {
    let Vko = viikot[9];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Suomenlinnan kesäteatterissa on tarjolla runsaasti näytelmiä! <a href="https://www.ryhmateatteri.fi/info/suomenlinnan-kesateatteri/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l10").innerHTML === "Vko 10 (21.7 - 27.7) on avattu!<br>" + teksti) {
        document.getElementById("l10").innerHTML = "Vko 10"
    } else if (document.getElementById("l10").innerHTML === "Vko 10 (21.7 - 27.7) on vielä lukittu.") {
        document.getElementById("l10").innerHTML = "Vko 10"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l10").innerHTML = "Vko 10 (21.7 - 27.7) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l10").innerHTML = "Vko 10 (21.7 - 27.7) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l10").innerHTML = "Vko 10 (21.7 - 27.7) on vielä lukittu.";
    }
}
function avaaLuukku11 () {
    let Vko = viikot[10];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Päiväreissu Linnanmäelle, sisäänpääsy on ilmainen <a href="https://www.linnanmaki.fi/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l11").innerHTML === "Vko 11 (28.7 - 3.8) on avattu!<br>" + teksti) {
        document.getElementById("l11").innerHTML = "Vko 11"
    } else if (document.getElementById("l11").innerHTML === "Vko 11 (28.7 - 3.8) on vielä lukittu.") {
        document.getElementById("l11").innerHTML = "Vko 11"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l11").innerHTML = "Vko 11 (28.7 - 3.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l11").innerHTML = "Vko 11 (28.7 - 3.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l11").innerHTML = "Vko 11 (28.7 - 3.8) on vielä lukittu.";
    }
}
function avaaLuukku12 () {
    let Vko = viikot[11];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Helsingissä juhlitaan Flow festivaaleja! <a href="https://www.flowfestival.com/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l12").innerHTML === "Vko 12 (4.8 - 10.8) on avattu!<br>" + teksti) {
        document.getElementById("l12").innerHTML = "Vko 12"
    } else if (document.getElementById("l12").innerHTML === "Vko 12 (4.8 - 10.8) on vielä lukittu.") {
        document.getElementById("l12").innerHTML = "Vko 12"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l12").innerHTML = "Vko 12 (4.8 - 10.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l12").innerHTML = "Vko 12 (4.8 - 10.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l12").innerHTML = "Vko 12 (4.8 - 10.8) on vielä lukittu.";
    }
}
function avaaLuukku13 () {
    let Vko = viikot[12];
    let start = new Date(Vko.start);
    let end = new Date(Vko.end);
    let teksti = 'Päiväreissu Fallkullan kotieläintilalle! <a href="https://nuorten.hel.fi/nuorisotalot/fallkulla/" target="_blank" class="lisatietoja-linkki">Lisätietoja</a>';
    if (document.getElementById("l13").innerHTML === "Vko 13 (11.8 - 17.8) on avattu!<br>" + teksti) {
        document.getElementById("l13").innerHTML = "Vko 13"
    } else if (document.getElementById("l13").innerHTML === "Vko 13 (11.8 - 17.8) on vielä lukittu.") {
        document.getElementById("l13").innerHTML = "Vko 13"
    } else if (tanaan >= start && tanaan <= end) {
        document.getElementById("l13").innerHTML = "Vko 13 (11.8 - 17.8) on avattu!<br>" + teksti;
    } else if (tanaan > end) {
        document.getElementById("l13").innerHTML = "Vko 13 (11.8 - 17.8) on avattu!<br>" + teksti;
    } else {
        document.getElementById("l13").innerHTML = "Vko 13 (11.8 - 17.8) on vielä lukittu.";
    }
}