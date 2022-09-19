// 1. Reverse A String Using Loops.

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("abcde"));

// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.

function sameBackAndForth (str) {
    if (str === str.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}

console.log(sameBackAndForth("abcdefg"))

// 3. Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(num) {
    return (
        parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
    )
}
console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

// 4. SumArr - Find the sum of all items in an array, using loops.

function sumArr(num) {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    } 
    return sum
}

console.log(sumArr([1,2,3,4,5]))
console.log(sumArr([1000,2000,44,55,22]))
console.log(sumArr([123,456,789]))

// 5. Angry Grandma

function deafGrandma(str) {
    let newStr = str.toUpperCase().split(" ")
    let newSentence = `${newStr[0]}!! ${newStr[1]}!! ${newStr[2]}!! ${newStr[3]}!! ${newStr[4]}!! ${newStr[5]}!! ${newStr[6]}!! `
    return newSentence
}

console.log(deafGrandma("I have a bad feeling about this"))

// 6. What Is Missing

function whatIsMissing(str) {

        for (let i = 0; i < str.length; i++) {
         const charCode = str.charCodeAt(i);
     
          if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1);
          }
        }
        return undefined;
      }

console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz"))
console.log(whatIsMissing("bcdf"))
console.log(whatIsMissing("abcdefghjklmno"))

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

function swap(sentence, before, after) {
    let newArr = sentence.split(" ")
    console.log(newArr)
    
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == before) {
            sentence = sentence.replace(before, after)
        } else if (before[0] === before[0].toUpperCase()) {
            var swap = after[0].toUpperCase() + after.slice(1);
            sentence = sentence.replace(before, swap)
          }
    } return sentence
}

console.log(swap("His name is Tom", "Tom", "john"))
console.log(swap("Let us get back to more Coding", "Coding", "algorithms"))
console.log(swap("This has a spellngi error", "spellngi", "spelling"))