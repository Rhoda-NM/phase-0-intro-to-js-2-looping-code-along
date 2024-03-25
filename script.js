	
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
    console.log(script(parseInt(mark)));
    rl.close();
});

/*for (let age = 30; age < 40; age++)  {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}*/