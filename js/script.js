let rain = window.prompt ("How many inches of rain fell?");

function repeatStringNumTimes (str,){
    return str.repeat(rain)
}
console.log (repeatStringNumTimes("*",rain));

const startBushelYield = 50;
let finalYield = null;

let bushelYield = null;
let premiumFertilizer = ("premium");
let regularFertilizer = ("regular");

if (rain >= 20){
    bushelYield = (startBushelYield * 0.9);
}
else if (rain <10){
    bushelYield = (startBushelYield * 0.8);
}
else{
    bushelYield = startBushelYield;
}

let fertilizer = window.prompt("Did you use fertilizer?");
if (fertilizer == "yes"){
let yes = window.prompt("Did you use premium or regular fertilizer?")
}

if (type === premiumFertilizer) {
    finalYield = bushelYield * 1.15;
}

else if (type === regularFertilizer){
    finalYield = bushelYield * 1.1;
}
else (type === null); {
    finalYield = bushelYield
}

console.log ("This should yield" +finalYield+ "bushels per acre");