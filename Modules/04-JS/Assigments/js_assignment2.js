function calculateAge(date) {
const today = new Date();
// console.log(today)

const[day , month, year] = date.split("/");
// console.log(day, month, year)


let age = today.getFullYear() - year;
// console.log(age);

const m = today.getMonth() - month;
// console.log(m)

if (m < 0 || (m === 0 && today.getDate() < day)) {
    age--;
} return age;
}

console.log(calculateAge("01/01/1979"))
console.log(calculateAge("20/07/2002"))

