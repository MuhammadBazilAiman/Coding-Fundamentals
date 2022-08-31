// User can run the app.
// User can view their schedules.
// User can add a new event.
// User can edit an existing event title and time.
// User can cancel an event.
// User can quit the app.

const ps = require("prompt-sync")
const prompt = ps()

class Calendar{
    constructor(){
        this.schedule = [],
        this.isAppRunning = true,
        this.calendar2022 = {
            1:{
                month:"Jan",
                lastDate:31
            },
            2:{
                month:"Feb",
                lastDate:28
            },
            3:{
                month:"Mar",
                lastDate:31
            },
            4:{
                month:"Apr",
                lastDate:30
            },
            5:{
                month:"May",
                lastDate:31
            },
            6:{
                month:"Jun",
                lastDate:30
            },
            7:{
                month:"Jul",
                lastDate:31
            },
            8:{
                month:"Aug",
                lastDate:31
            },
            9:{
                month:"Sep",
                lastDate:30
            },
            10:{
                month:"Oct",
                lastDate:31
            },
            11:{
                month:"Nov",
                lastDate:30
            },
            12:{
                month:"Dec",
                lastDate:31
            }
        }
    }

    displayMenu() {
        console.log(`
        -------- Calendar App 2022 --------
        1   View my schedules
        2   Add a new event
        3   Edit an existing event title and time.
        4   Cancel an event
        5   Quit app
        `)
    }

    view() {
        this.schedule.length === 0  ? console.log("No events scheduled")
        : (this.schedule.forEach((element,index) => {console.log(`
        ${index+1}: ${element[0]}, ${element[1]}`)}))
        return this
    }

    add() {
        let newEvent = prompt("Enter your event: ")
        let [month, inputDate] = this.getMonthDate()
        this.schedule.push([newEvent, `${month}/${inputDate}`])
    }

    edit() {
        this.view()
        let whichEvent = prompt("Select event to change: ")
        let changeTask = prompt("Change event to: ")
        this.schedule[whichEvent-1][0] = changeTask
        let [month, inputDate] = this.getMonthDate()
        this.schedule[whichEvent-1][1] = `${month}/${inputDate}` 
    }

    cancel() {
        this.view()
        let cancelTask = prompt ("Select which event to cancel: ")
        this.schedule.splice(cancelTask-1, 1)
    }

    exit() {
        console.log("Exiting this program. Thank you =)")
        this.isAppRunning = false
    }

    getMonthDate() {
        let isLoopForMonth = true, isLoopForDate = true
        let inputMonth, inputDate

        while(isLoopForMonth) {
            inputMonth = prompt ("Please input month for the event (1-12): ")
            inputMonth >= 1 && inputMonth <= 12 ? isLoopForMonth = false
            : (isLoopForMonth = true, console.log("Please input valid month between 1-12: "))
        }

        let month = this.calendar2022[inputMonth].month
        let currentMonthLastDate = this.calendar2022[inputMonth].lastDate

        while(isLoopForDate) {
            inputDate = prompt (`Please select date for the event from 1 - ${currentMonthLastDate}: `)
            inputDate >= 1 && inputDate <= currentMonthLastDate  ? isLoopForDate = false
            : (isLoopForDate = true, console.log(`Accepted date for ${month} is between 1-${currentMonthLastDate}. Please try again: `))
        } return [month, inputDate]
    }

    start(){

        while(this.isAppRunning) {
            this.displayMenu()
            let userInput = prompt("Enter 1/2/3/4/5: ")
    
            if (userInput === "1") {
                this.view()
            } else if (userInput === "2") {
                this.add()
            } else if (userInput === "3") {
                this.edit()
            } else if (userInput === "4") {
                this.cancel() 
            } else if (userInput === "5") {
                this.exit()
            } else {
                console.log ("Invalid input, please choose from 1-5")
            }
        }
    }
}




const startCalendar = new Calendar()
startCalendar.start()


