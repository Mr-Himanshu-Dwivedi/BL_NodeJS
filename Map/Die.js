function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDiceUntilMaxCount(maxCount) {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    
    while (Math.max(...Object.values(rollCounts)) < maxCount) {
        let roll = rollDie();
        rollCounts[roll]++;
    }

    return rollCounts;
}

function findMinMax(rollCounts) {
    let maxRoll = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minRoll = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    return { maxRoll, minRoll };
}

let rollCounts = rollDiceUntilMaxCount(10);
console.log("Die Roll Counts:", rollCounts);

let { maxRoll, minRoll } = findMinMax(rollCounts);
console.log(`Number that reached maximum times: ${maxRoll} (${rollCounts[maxRoll]} times)`);
console.log(`Number that reached minimum times: ${minRoll} (${rollCounts[minRoll]} times)`);
