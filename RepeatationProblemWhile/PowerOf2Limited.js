const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    console.log(`Powers of 2 up to 2^${n} (Max 256):`);
    
    for (let i = 0; i <= n; i++) {
        let power = Math.pow(2, i);
        
        if (power > 256) break; // Stop if power exceeds 256

        console.log(`2^${i} = ${power}`);
    }
}
