import {createPlayer} from "./utils/fun.js"
import {addSolvingTime} from "./utils/fun.js"
import {showStats} from "./utils/fun.js"
import {askRiddle} from "./utils/fun.js"
import {measureSolveTime} from "./utils/fun.js"
import allRiddles from "./riddles/allRiddles.js"
import cl from "./cl.js"


cl("welcome")
const name = readline.question("What is your name?");
cl(`Hello, ${name}!`);

const player = createPlayer(name)