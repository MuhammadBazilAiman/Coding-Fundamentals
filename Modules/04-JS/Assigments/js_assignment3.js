
function factorial(n) {
  let result = 1

  if (n >= 0) {
    for(let i = n ; i>0 ; i--) {
        result = result * i;
    }
    } else {
        console.log("n must be a positive integer")
        result = "result is undefined"

    } return result
}

console.log(factorial(5))