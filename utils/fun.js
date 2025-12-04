import cl from "../cl.js"
import readline from "readline-sync";

export function createPlayer(name) {

    const player = {
        name,
        times: []
    }

    return player
}

export function addSolvingTime(player, seconds) {

    player.times.push(seconds)
}

export function showStats(player) {

    const total = 0
    
    for (const element of player.times) {
        total += element
    }
    const avg = total / player.times.length

    cl(`total time for all riddles is ${total} seconds. average time for riddle is ${avg} seconds`)
}

export function askRiddle(riddleObj) {

    cl(riddleObj.name)

    cl(riddleObj.taskDescription)

    if (!riddleObj.choices) {

        const ans = readline.question("what is your answer")

        while (ans != riddleObj.correctAnswer) {

            const ans = readline.question("wrong try again")
        }

    } else if (riddleObj.choices) {

        cl(`these are the options:`)

        cl(`1.${riddleObj.choices[0]}`)
        cl(`2.${riddleObj.choices[1]}`)
        cl(`3.${riddleObj.choices[2]}`)

        const ans = readline.question("what is your answer")

        while (ans - 1 != correctAnswer) {

            cl("wrong")
            cl(`these are the options:`)
            cl(`1.${riddleObj.choices[0]}`)
            cl(`2.${riddleObj.choices[1]}`)
            cl(`3.${riddleObj.choices[2]}`)

            const ans = readline.question("try again")
        }
    }
}

export function measureSolveTime(fn) {

    const start = Date.now();
    fn
    const end = Date.now()

    const ms = end - start

    return Math.floor(ms / 1000)
}