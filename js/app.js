//Variablen und Konstanten
const EUR = "eur";
const CHF = "chf";
const USD = "usd";

// aus https://www1.oanda.com/currency/converter/
//Vorschlag Umrechnungswerte evtl. hier hinzufügen
let CHF_EUR = 0.92901;
let CHF_USD = 1.13667;

let EUR_CHF = 1.07997;
let USD_CHF = 0.87959;

//Formular-Werte z.B. mit document.getElementById auslesen
let locAm=document.getElementById("localAmount");
let locEx=document.getElementById("localExchange");
let forAm=document.getElementById("foreignAmount");
let forEx=document.getElementById("foreignExchange");

/* Multipliziert den Betrag mit dem Umwandlungskurs resp. Währungskurs */
function convert(betrag, kurs) {
    return Math.fround(betrag * kurs).toFixed(4);
}

/*
Erklärung:
Math.fround() = https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
.toFixed() = https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/

/**
 *  von CHF nach Fremdwährung
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === CHF) {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === EUR) {
            /* ... rufe die Funktion auf zur Berechnung des CHF->EUR-Kurses  */
            forAm.value = convert(locAm.value, CHF_EUR);
        }
        /* ... und die Zielwährung USD dann ... */
        if (forEx.value === USD) {
            /* ... rufe die Funktion auf zur Berechnung des CHF->USD-Kurses  */
            forAm.value = convert(locAm.value, CHF_USD);
        }
    }
}

/**
 *  von Fremdwährung nach CHF
 */

function foreignToLocal() {
    /* Ist Zielwährung CHF dann ... */
    if (locEx.value === CHF) {
        /* ... und die Ausgangswährung EUR dann ... */
        if (forEx.value === EUR) {
            /* ... rufe die Funktion auf zur Berechnung des EUR->CHF-Kurses  */
            locAm.value = convert(forAm.value, EUR_CHF);
        }
        /* ... und die Zielwährung USD dann ... */
        if (forEx.value === USD) {
            /* ... rufe die Funktion auf zur Berechnung des USD->CHF-Kurses  */
            locAm.value = convert(forAm.value, USD_CHF);
        }
    }
}