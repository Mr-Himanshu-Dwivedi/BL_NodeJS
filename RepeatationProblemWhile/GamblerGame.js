function gamble() {
    let money = 100;
    const goal = 200;
    let bets = 0;
    let wins = 0;

    while (money > 0 && money < goal) {
        bets++;
        if (Math.random() < 0.5) {
            money++;  // Win: Gain Re. 1
            wins++;
        } else {
            money--;  // Lose: Lose Re. 1
        }
    }

    console.log(`Game Over! Final Money: Rs. ${money}`);
    console.log(`Total Bets Made: ${bets}`);
    console.log(`Total Wins: ${wins}`);
}

gamble();

