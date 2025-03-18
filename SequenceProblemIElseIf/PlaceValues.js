const args = process.argv.slice(2);
const num = parseInt(args[0]);

const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore"
};
console.log(placeValues[num] || "Invalid input");
