/*let paiva = new Date();


function avaaLuukku (){
    if (paiva > Date(22/4/2024))
        console.log("Luukku auki!")

}
  Sori aleksi laitoin tän jäihin siks aikaa kun kokeilen jotain */

function avaaLuukku () {
    let Viikko = {
        start: "2024-04-20", end: "2024-04-26", message: "Tähän tulee ensimmäisen viikon tapahtumat"};
    let tanaan = new Date();
    let start = new Date(Viikko.start);
    let end = new Date(Viikko.end);
    let teksti = "";
    if (tanaan >= start && tanaan <= end) {
        document.getElementById("l1").innerHTML = "Viikko " + 1 + " on avattu!";
    } else if (tanaan > end) {
        document.getElementById("l1").innerHTML = "Viikko " + 1 + " on avattu!";
    } else {
        document.getElementById("l1").innerHTML = "Viikko " + 1 + " on vielä lukittu.";
    }
}

      /*{ start: "2024-06-08", end: "2024-06-14", message: "Tähän tulee toisen viikon tapahtumat" },
        { start: "2024-06-15", end: "2024-06-21", message: "Tähän tulee kolmannen viikon tapahtumat" },
        { start: "2024-06-22", end: "2024-06-28", message: "Tähän tulee neljännen viikon tapahtumat" },
        { start: "2024-06-29", end: "2024-07-05", message: "Tähän tulee viidennen viikon tapahtumat" },
        { start: "2024-07-06", end: "2024-07-12", message: "Tähän tulee kuudennen viikon tapahtumat" },
        { start: "2024-07-13", end: "2024-07-19", message: "Tähän tulee seitsemännen viikon tapahtumat" },
        { start: "2024-07-20", end: "2024-07-26", message: "Tähän tulee kahdeksannen viikon tapahtumat" },
        { start: "2024-07-27", end: "2024-08-02", message: "Tähän tulee yhdeksännen viikon tapahtumat" },
        { start: "2024-08-03", end: "2024-08-09", message: "Tähän tulee kymmenennen viikon tapahtumat" },
        { start: "2024-08-10", end: "2024-08-16", message: "Tähän tulee yhdennentoista viikon tapahtumat" },
        { start: "2024-08-17", end: "2024-08-23", message: "Tähän tulee kahdennentoista viikon tapahtumat" },
        { start: "2024-08-24", end: "2024-08-30", message: "Tähän tulee kolmannentoista viikon tapahtumat" }*/