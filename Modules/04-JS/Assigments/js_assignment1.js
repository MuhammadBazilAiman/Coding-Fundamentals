function sum(numbersArray) {
    let total = 0
    for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i]
    }

    return total

}

console.log(sum([1, 2, 3, 4]));
console.log(sum([-3, 5, 19, -6]));

// 1. i = 0, 0 < 4 true, 0 + 1 = 1
// 2. i = 1, 1 < 4 true, 1 + 2 = 3
// 3. i = 2, 2 < 4 true, 3 + 3 = 6
// 4. i = 3, 3 < 4 true, 6 + 4 = 10
// 5. i = 4, false