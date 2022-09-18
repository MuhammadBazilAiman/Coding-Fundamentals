// takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

function possibleBonus(position_A, position_B) {
    var myPosition = position_A;
    var friendPosition = position_B;

    for (let i = 1; i <= 6; i++) {
        myPosition += 1;

        if (myPosition === friendPosition) {
            return true;
        }
    } return false
}

console.log(possibleBonus(3, 7))
// console.log(possibleBonus(1, 9))
// console.log(possibleBonus(5, 3))

