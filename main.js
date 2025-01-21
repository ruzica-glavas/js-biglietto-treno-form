let scontoPercentuale = 0.80;
let scontoPercentuale2 = 0.60;
let chilometriPrezzo = 0.21;

let chilometri = document.getElementById("chilometri");
let età = document.getElementById("età");
let button = document.getElementById("genera");
let nomeCognome = document.getElementById("nome-cognome");

// Elementi della seconda parte

let risultati = document.getElementById("risultati");
let nomeRisultato = document.getElementById("nome-risultato");

//let nomePasseggero= document.getElementById(`nome-passeggero`)//

let offerta = document.getElementById("offerta");
let carrozza = document.getElementById("carrozza");
let codiceCp = document.getElementById("codice-cp");
let costoBiglietto = document.getElementById("costo-biglietto");

// Aggiungi l'evento click

button.addEventListener("click", function (event) {
  event.preventDefault();

  let chilometriValue = parseInt(chilometri.value);
  let etàValue = età.value;
  let nomeValue = nomeCognome.value.trim();
  const priceChilometri = chilometriPrezzo * chilometriValue;

  // Genera numeri casuali per la carrozza e il codice CP

  let numeroCarrozza = Math.floor(Math.random() * 10) + 1; 
  let codice = Math.floor(Math.random() * 100000) + 1; 

  // Determina l'offerta e il costo del biglietto

  let offertaTipo = "";
  let costoFinale = "";

  if (etàValue === "minorenne") {
    costoFinale = (priceChilometri * scontoPercentuale).toFixed(2);
    offertaTipo = "Sconto per minorenni";
  } else if (etàValue === "over65") {
    costoFinale = (priceChilometri * scontoPercentuale2).toFixed(2);
    offertaTipo = "Sconto per gli over 65";
  } else if (etàValue === "maggiorenne") {
    costoFinale = priceChilometri.toFixed(2);
    offertaTipo = "Biglietto Standard";
  } else {
    alert("Seleziona una fascia di età.");
    return; // Esci se la fascia di età non è selezionata
  }

  // Aggiorna i contenuti nella seconda parte

  nomeRisultato.textContent = nomeValue || "N/D"; // Mostra "N/D" se il nome non è inserito
  codiceCp.textContent = codice;
  carrozza.textContent = numeroCarrozza;
  offerta.textContent = offertaTipo;
  costoBiglietto.textContent = `${costoFinale}€`;

  // Mostra la seconda parte
  risultati.classList.remove("nascosta");
});




  






