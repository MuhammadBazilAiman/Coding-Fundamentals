// User can run the app.
// User can view their todo list.
// User can add a new todo.
// User can edit an existing todo item.
// User can toggle a todo completed status.
// User can delete a todo.
// User can quit the app.

const ps = require("prompt-sync")
const prompt = ps()

class todoApp{
    constructor(){
        this.todo = [],
        this.isAppRunning = true,
        this.crossSymbol = '\u274C', 
        this.tickSymbol = '\u2705'
    }

    displayMenu() {
        console.log(`
        -------- TODO APP --------
        1   View my todo list
        2   Add new todo
        3   Edit a todo item
        4   Toggle complete a todo
        5   Delete a todo
        6   Quit app
        `)
    }

    view() {
        this.todo.length === 0  ? console.log("None")
        : (this.todo.forEach((element,index) => {console.log(`
        ${index+1}: ${element}`)}))
        return this
    }

    add() {
        let newTodo = prompt("Enter your task: ")
        this.todo.push([newTodo, this.crossSymbol])
        return this
    }

    edit() {
        let whichTask = prompt("Select task to change: ")
        this.view()
        console.log(this.todo[whichTask-1])
        let changeTask = prompt("Change task to: ")
        this.todo[whichTask-1] = [changeTask, this.crossSymbol]
        return this
    }

    status() {
        let changeStatus = prompt ("Select task to toggle to completed: ")
        this.todo[changeStatus-1] = [this.todo[changeStatus-1][0], this.tickSymbol]
        return this
    }

    delete() {
        let deleteTask = prompt ("Select which task to delete: ")
        this.todo.splice(deleteTask-1, 1)
        return this
    }

    exit() {
        console.log("Exiting this program. Thank you =)")
        this.isAppRunning = false
    }

    start(){

        while(this.isAppRunning) {
            this.displayMenu()
            let userInput = prompt("Enter 1/2/3/4/5/6: ")
    
            if (userInput === "1") {
                this.view()
            } else if (userInput === "2") {
                this.add()
            } else if (userInput === "3") {
                this.edit()
            } else if (userInput === "4") {
                this.status() 
            } else if (userInput === "5") {
                this.delete()
            } else if (userInput === "6") {
                this.exit()
            } else {
                console.log ("Invalid input, please choose from 1-6")
            }
        }
    }
}




const startTodo = new todoApp()
startTodo.start()

// todoApp1.view()
// todoApp1.add().add().add().view().edit().view()
// todoApp1.add().add().add().view().status().view().status().view().status().view().delete().view()
// todoApp1.exit()

