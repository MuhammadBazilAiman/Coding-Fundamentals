
class Calculator {
    constructor(number) {
        this.number = number,
        this.result = 0,
        this.recentOperation = []
    }

    add(newNumber) {
        this.result = this.number + newNumber
        this.recentOperation.push(`${this.number} + ${newNumber} = ${this.result}`)
        this.number = this.result
        return this
    }

    subtract(newNumber) {
        this.result = this.number - newNumber
        this.recentOperation.push(`${this.number} - ${newNumber} = ${this.result}`)
        this.number = this.result
        return this
    }

    multiply(newNumber) {
        this.result = this.number * newNumber
        this.recentOperation.push(`${this.number} * ${newNumber} = ${this.result}`)
        this.number = this.result
        return this
    }

    divide(newNumber) {
        this.result = this.number / newNumber
        this.recentOperation.push(`${this.number} / ${newNumber} = ${this.result}`)
        this.number = this.result
        return this
    }

    value() {
        // Show the calculation

        this.recentOperation.forEach((element, index) => {
            console.log(element)
            console.log(index)
            // console.log(this)
        })

        // first option: for (let i = 0; i < this.recentOperation.length; i++) {
        //     console.log(this.recentOperation[i])
        // }

        // second option: for (let x in this.recentOperation) {
        //     console.log(this.recentOperation[x])
        // }

        // third option: for (let x of this.recentOperation) {
        //     console.log(x)
        // }

    }
}

const number1 = new Calculator(0)
number1.add(10).subtract(2).multiply(5).divide(2).value()
// number2.subtract()
// console.log(number3)
// number1.subtract()
// number1.multiply()
// number1.divide()
