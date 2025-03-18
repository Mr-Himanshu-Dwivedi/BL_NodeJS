const args = process.argv.slice(2);
const num = parseInt(args[0]);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(num >= 1 && num <= 7 ? days[num - 1] : "Invalid input");
