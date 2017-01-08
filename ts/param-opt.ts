function addPoints(currentScore: number, points?: number): number {
    points = points || 1;
    currentScore += points;
    return currentScore
}

console.log(addPoints(10, 5));