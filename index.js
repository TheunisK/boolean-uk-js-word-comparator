const firstUserEntry = prompt("User 1, what is your word?");
const secondUserEntry = prompt("User 2, what is your word?");

if (firstUserEntry.length > secondUserEntry.length) {
    alert('"' + firstUserEntry + '"' + " is the longer word! And it is " + 
    firstUserEntry.length + " characters long!");
}   else if (firstUserEntry.length < secondUserEntry.length) {
        alert('"' + secondUserEntry + '"' + " is the longer word! And it is " + 
        secondUserEntry.length + " characters long!");
}   else if (firstUserEntry.length === secondUserEntry.length) {
        alert("The words are the same length!");
}
// const count = 1;
// for (let i = 0; i < firstUserEntry.length; i++) {
//     if (firstUserEntry[i] === " ") {
//         count++;
//     }
//    alert("User1's sentence is " + count + " words long.");
// }
