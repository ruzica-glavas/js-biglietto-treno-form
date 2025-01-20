let scontoPercentuale= 0.80;
let scontoPercentuale2= 0.60;
let chilometriPrezzo= 0.21;



let chilometri= document.getElementById(`chilometri`)
let età= document.getElementById(`età`)
let button= document.getElementById(`genera`)

/*let chilometriValue= Number(chilometri.value)
let etàValue= Number (età.value)

const priceChilometri= 0.21*chilometriValue;*/


button.addEventListener('click', function(event){

event.preventDefault();

let chilometriValue= Number (chilometri.value)
let etàValue= Number (età.value)
const priceChilometri= 0.21*chilometriValue;

if(età<18){
    console.log(`Il totale del biglietto del treno è: ${(priceChilometri*scontoPercentuale).toFixed(2)}`)
} else if (età>=65){
    console.log(`Il totale del biglietto del treno è: ${(priceChilometri*scontoPercentuale2).toFixed(2)}`)
} else{
    console.log(`Il totale del biglietto del treno é: ${(priceChilometri).toFixed(2)}`)
}
})

