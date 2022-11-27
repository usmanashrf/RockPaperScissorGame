import inquirer from "inquirer";
import chalk from "chalk";
const options = ['Rock', 'Paper', 'Scissor'];
let playAgain = true;
let scores = 0;
async function Game() {
    while (playAgain) {
        let computerPick = options[Math.floor(Math.random() * options.length)];
        let answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: '',
                choices: [
                    'Rock',
                    'Paper',
                    'Scissor'
                ]
            }
        ]);
        console.log(chalk.magenta(`Computer Picks ${computerPick}`));
        if (options.indexOf(answers.option) === 0 && options.indexOf(computerPick) === 2) {
            console.log(chalk.green("Congrats !!  +10 points"));
            console.log(chalk.bgGreen(`${scores += 10}`));
        }
        else if (options.indexOf(answers.option) === 2 && options.indexOf(computerPick) === 0) {
            console.log(chalk.red("You Lose"));
            playAgain = await Repeat();
        }
        else if (options.indexOf(answers.option) > options.indexOf(computerPick)) {
            console.log(chalk.green("Congrats !!  +10 points"));
            console.log(chalk.bgGreen(`${scores += 10}`));
        }
        else if (options.indexOf(answers.option) == options.indexOf(computerPick)) {
            console.log(chalk.yellow("Draw !!"));
        }
        else {
            console.log(chalk.red("You Lose"));
            playAgain = await Repeat();
        }
    }
}
async function Repeat() {
    let Repeat = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Play Again ???',
            choices: [
                'Yes',
                'No'
            ]
        }
    ]);
    return Repeat.option === 'Yes' ? true : false;
}
export default Game;
