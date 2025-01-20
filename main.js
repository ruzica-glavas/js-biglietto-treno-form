let scontoPercentuale= 0.80;
let scontoPercentuale2= 0.60;
let chilometriPrezzo= 0.21;



let chilometri= parseInt (prompt ("scrivimi i numeri di chilometri che vuoi percorrere"))
let età= parseInt (prompt ("scrivimi la tua età"))

const priceChilometri= 0.21*chilometri;

if(età<18){
    console.log(`Il totale del biglietto del treno è: ${(priceChilometri*scontoPercentuale).toFixed(2)}`)
} else if (età>=65){
    console.log(`Il totale del biglietto del treno è: ${(priceChilometri*scontoPercentuale2).toFixed(2)}`)
} else{
    console.log(`Il totale del biglietto del treno é: ${(priceChilometri).toFixed(2)}`)
}