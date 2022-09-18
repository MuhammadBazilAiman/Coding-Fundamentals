// Perimeter of a square: 4 * side
// Perimeter of a circle: 6.28 * radius

function perimeter(letter, num) {

    let calc = (letter == 's') ? (4 * num) : (6.28 * num);
    return calc 
}

console.log(perimeter("s", 7)) //➞ 28

console.log(perimeter("c", 4)) //➞ 25.12

console.log(perimeter("c", 9)) // ➞ 56.52
