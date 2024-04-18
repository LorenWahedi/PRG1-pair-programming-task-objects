// function isPalindrome(word) {
//     return word.split("").reverse().join("") === word;
// }

// console.log(isPalindrome("college"));
// console.log(isPalindrome("racecar"));


// function isPalindrome(word) {
//     let wordBackwards = word.split('').reverse().join("");
//     if (wordBackwards === word) {
//         console.log(`Yes, '${wordBackwards}' is a Palindrome`) 
//     }
//         else {
//         console.log(`No this word is not a Palindrome.\nReversed it says '${wordBackwards}'`)
//         }
// }

// isPalindrome("college");
// isPalindrome("racecar");

// console.log(isPalindrome("college"));



// function capitaliseFirstChar(input) {
//     input.split(" ").toUppercase[0].join(toString).(" ");
// }
// console.log(capitaliseFirstChar("I came, I saw, I conquered"));



// function capitaliseFirstChar(input) {
//     let stringAsArray = input.split(" ");
//     return stringAsArray.forEach().toUppercase().join(toString).(" ");
// }

// console.log(capitaliseFirstChar("I came, I saw, I conquered"));



function capistaliseFirstChar(input) {
    let newArray = [];
    let wordArray =input.trim().split("");
    wordArray.forEach((word) ]> {
        let uppercase = word[0].toUpperCase();
        let newSentence = uppercase + word.slice(1);
        newArray.push(newSentence);
        console.log(newSentence);
    });
    return newArray.join(" ");
}

console.log(capitaliseFirstChar("   I came, I saw, I conquered   "));