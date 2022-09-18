const hierarchy = {
    "-3": {
        "m": "great grandfather",
        "f": "great grandmother"
    },
    "-2": {
        "m": "grandfather",
        "f": "grandmother"
    },
    "-1": {
        "m": "father",
        "f": "mother"
    },
    "0": {
        "m": "me!",
        "f": "me!"
    },
    "1": {
        "m": "son",
        "f": "daughter"
    },
    "2": {
        "m": "grandson",
        "f": "granddaughter"
    },
    "3": {
        "m": "great grandson",
        "f": "great granddaughter"
    },
}


function generation(num, char) {
    return hierarchy[num][char]
}

console.log(generation(2, "f")) // ➞ "granddaughter"
console.log(generation(-3, "m")) // ➞ "great grandfather"
console.log(generation(1, "f")) // ➞ "daughter"

// cannot use switch case for this assignment ?

// function generation(num, char) {
// switch ([num, char]) {
//     case [-3, "m"]: return "great grandfather";
//     case [-3, "f"]: return "great grandmother";
//     case [-2, "m"]: return "grandfather";
//     case [-2, "f"]: return "grandmother";
//     case [-1, "m"]: return "father";
//     case [-1, "f"]: return "mother";
//     case [0, "m"]: return "me!";
//     case [0, "f"]: return "me!";
//     case [1, "m"]: return "son";
//     case [1, "f"]: return "daughter";
//     case [2, "m"]: return "grandson";
//     case [2, "f"]: return "granddaughter";
//     case [3, "m"]: return "great grandson";
//     case [3, "f"]: return "great granddaughter";
// }
// }

// console.log(generation(-3, "f"))
