function getDays(date1, date2) {
    let newDate1 = date1
    let newDate2 = date2

    // convert from miliseconds(default) to days
    let daysBetween = (newDate2 - newDate1) / 86400000;
    
    console.log(daysBetween)
}

getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))
getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
getDays(new Date("July 20, 2019"), new Date("July 30, 2019"))