#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let scenerio = true;
while (scenerio) {
    let task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to be added in the list"
        },
        {
            name: "addanother",
            type: "confirm",
            message: "Do you want to add something else",
            default: "false"
        }
    ]);
    todos.push(task.todo);
    scenerio = task.addanother;
    console.log(todos);
}
