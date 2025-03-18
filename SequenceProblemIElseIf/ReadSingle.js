const args = process.argv.slice(2);
const num = parseInt(args[0]);
const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
console.log(num >= 0 && num <= 9 ? words[num] : "Invalid input");
