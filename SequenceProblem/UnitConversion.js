let inches = 42;
let feet = inches / 12;
console.log(`42 inches = ${feet.toFixed(2)} feet`);

let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft = ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

let singlePlotAreaMeters = lengthMeters * widthMeters;
let totalPlotsAreaMeters = singlePlotAreaMeters * 25;
let totalPlotsAreaAcres = totalPlotsAreaMeters / 4046.86;
console.log(`Total area of 25 plots: ${totalPlotsAreaMeters.toFixed(2)} square meters`);
console.log(`Total area in acres: ${totalPlotsAreaAcres.toFixed(2)} acres`);
