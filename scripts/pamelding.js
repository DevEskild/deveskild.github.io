const landstreffListe = []
const lanPartyListe = []
const jugendFestListe = []

function isNum(string) {
    console.log("1")
    if (isNaN(string) === false) {
        var age = Number(string)
        console.log(age)
    } else {
        alert("Hver venligst å angi et valid nummer for din alder!");
        throw new Error("Invalid number")
    };
}

function listeUt() {
    document.getElementById("landtreffDeltakere").innerHTML = " "
    for (let i = 0; i < landstreffListe.length; i++) {
        document.getElementById("landtreffDeltakere").innerHTML += `${landstreffListe[i].navn} ${landstreffListe[i].etternavn}, ${landstreffListe[i].alder} <br>`;
    }
    document.getElementById("lanPartyDeltakere").innerHTML = " "
    for (let i = 0; i < lanPartyListe.length; i++) {
        document.getElementById("lanPartyDeltakere").innerHTML += `${lanPartyListe[i].navn} ${lanPartyListe[i].etternavn}, ${lanPartyListe[i].alder} <br>`;
    }
    document.getElementById("jugendFestDeltakere").innerHTML = " "
    for (let i = 0; i < jugendFestListe.length; i++) {
        document.getElementById("jugendFestDeltakere").innerHTML += `${jugendFestListe[i].navn} ${jugendFestListe[i].etternavn}, ${jugendFestListe[i].alder} <br>`;
    }
}

function leggTil(navn, etternavn, alder) {

    if (document.getElementById('landstreff').checked) {
        landstreffListe.push({
            navn: navn,
            etternavn: etternavn,
            alder: alder
        })
    };
    if (document.getElementById('lanparty').checked) {
        lanPartyListe.push({
            navn: navn,
            etternavn: etternavn,
            alder: alder
        })
    };
    if (document.getElementById('jugnedfest').checked) {
        jugendFestListe.push({
            navn: navn,
            etternavn: etternavn,
            alder: alder
        })
    }
    listeUt();
}

function pamelding() {

    var firstname = document.getElementById("myfrm").elements[0].value;
    var surname = document.getElementById("myfrm").elements[1].value;
    var age = document.getElementById("myfrm").elements[3].value;

    isNum(age);

    leggTil(firstname, surname, age)

    alert("Din påmelding har blitt registert!")

}