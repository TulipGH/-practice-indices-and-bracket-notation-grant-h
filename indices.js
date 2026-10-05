let mixedMedia = [
    ["The Mist", "It", "Storm of the Century"],
    ["Hunger Games", "Maze Runner", "Divergent"],
    ["Kitchen Nightmares", "Hell's Kitchen", "Master Chef"]
];

console.log(mixedMedia[0][0]); // "The Mist"
console.log(mixedMedia[0][1]); // "It"
console.log(mixedMedia[0][2]); // "Storm of the Century"

console.log(mixedMedia[1][0]); // "Hunger Games"
console.log(mixedMedia[1][1]); // "Maze Runner"
console.log(mixedMedia[1][2]); // "Divergent"

console.log(mixedMedia[2][0]); // "Kitchen Nightmares"
console.log(mixedMedia[2][1]); // "Hell's Kitchen"
console.log(mixedMedia[2][2]); // "Master Chef"

for (let row = 0; row < mixedMedia.length; row++) {
    for (let item = 0; item < mixedMedia[row].length; item++) {
       console.log(mixedMedia[row][item])
    }
}
// The Mist
// It
// Storm of the Century
// Hunger Games
// Maze Runner
// Divergent
// Kitchen Nightmares
// Hell's Kitchen
// Master Chef

for (let i = 0; i < mixedMedia[1].length; i++) {
    console.log(mixedMedia[1][i]);
}
// Hunger Games
// Maze Runner
// Divergent