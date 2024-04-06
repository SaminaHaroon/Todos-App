#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = ["Coding", "prectice"];
console.log(
  chalk.magentaBright.bold("\n \t Wellcome to my Todo-list Application\n")
);
let condition = true;

async function createTodo(todos: string[]) {
  do {
    let ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.yellowBright("select an operation"),
      default: "true",
      choices: ["add", "update", "view", "delet", "Exit"],
    });
    if (ans.select == "Exit") {
      condition = false;
      console.log(todos);
    } else {
      condition = true;
      console.log(todos);
    }
    if (ans.select == "add") {
      let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: chalk.blueBright("add item.."),
      });
      todos.push(addTodo.todo);
      console.log(todos);
    }
    if (ans.select == "update") {
      let updateTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: chalk.blue("Select item for update"),
        choices: todos.map((item) => item),
      });
      let addTodo = await inquirer.prompt({
        name: "todo",
        type: "input",
        message: "add item.. ",
      });
      let newTodos = todos.filter((val) => val !== updateTodo.todo);
      todos = [...newTodos, addTodo.todo];
      console.log(todos);
    }
    if (ans.select == "view") {
      console.log(todos);
    }
    if (ans.select == "delet") {
      let deletTodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: chalk.red("Select item for delet"),
        choices: todos.map((item) => item),
      });
      let newTodos = todos.filter((val) => val !== deletTodo.todo);
      todos = [...newTodos];
      console.log(todos);
    }
  } while (condition);
}
createTodo(todos);
