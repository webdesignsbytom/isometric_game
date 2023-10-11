export const PlayerLevelsArray = [];

let initialXpRequired = 100;
const growthRate = 1.25; // 25% increase

for (let level = 1; level <= 100; level++) {
    PlayerLevelsArray.push({
        id: level,
        level: level,
        xpRequired: Math.round(initialXpRequired),
    });

    initialXpRequired *= growthRate;
}
