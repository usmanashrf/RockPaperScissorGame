#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
import Game from "./Game.js";

function banner(){
    console.log(chalk.bgGreen("Rock"))
console.log(chalk.green( 
    ` 
         ____.___
    ---./   ._._\\)
       |   / (_\\_\\)
       |_ '  (___)
     _  |    (___)
    __-|'----'                        
 `));


 console.log(chalk.bgBlue("Paper"))
console.log(chalk.blue(`         
         ___..__
__..--""" ._ __.'
           "-..__
         '"--..__";
___       '--...__"";
 '-..__ '"---..._;"
       """"----'  
        `));

console.log(chalk.bgRed("Scissor"))
console.log(chalk.red(` 
 .-.  _
 | | / )
 | |/ /
_|__ /_
/ __)-' )
\\  '(.-')
> ._>-'
/ \\/`
      ));


console.log(chalk.bgGreen("Created By:"));
console.log(chalk.green("Usman Ashraf"));
    setTimeout(()=>{
        console.log(chalk.green(""));
      },10);
}
banner();
Game();
