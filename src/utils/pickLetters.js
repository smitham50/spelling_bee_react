// export default function pickLetters() {
//     const gameLetters = [];

//     for (let i = 0; i < 2; i++) {
//         pickVowels();
//     }

//     for (let i = 0; i < 5; i++) {
//         pickConsonants();
//     }

//     return gameLetters;
// }

// function pickVowels() {
//     let idx = Math.floor(Math.random() * 5)
//     if (!gameLetters.includes(vowels[idx])) {
//         gameLetters.push(vowels[idx]);
//         gameLettersCopy = [...gameLetters]
//     } else {
//         pickVowels();
//     }
// }

// function pickConsonants() {
//     let idx = Math.floor(Math.random() * 20);
//     let letter = consonants[idx];
//     //if letter isn't already on the board
//     if (!gameLetters.includes(letter)) {
//         //if letter is a hard letter
//         if (hardLetters.includes(letter)) {
//             //if there is already a hard letter on the board, pick again
//             if (anyHard) {
//                 pickConsonants();
//             }
//             //otherwise set anyHard to true and put letter on the board
//             else {
//                 anyHard = true;
//                 gameLetters.push(letter);
//                 gameLettersCopy = [...gameLetters]
//             }
//         }
//         //if letter isn't a hard letter and it isn't already on the board, put it on the board
//         else {
//             gameLetters.push(letter);
//             gameLettersCopy = [...gameLetters]
//         }
//     }
//     //if letter is already on the board, pick again
//     else {
//         pickConsonants();
//     }
// }