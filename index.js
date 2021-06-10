const chalk = require('chalk');

async function sleep(ms) { return new Promise((re) => setTimeout(ms, re)); };

(async () => {
    // Begin main code section
    
    //

    // End main code section
})().then(()   => process.exit())
    .catch((e) => {
        console.clear();
        console.error(chalk` {bgRed  UNCAUGHT INTERNAL ERROR }`);
        console.error(chalk`{red An internal error occurred, so we has to stop the process.}`);
        console.error(chalk`{red This error was} {red.bold not handled automatically}{red , which is a} {blue.bold BUG!}`);
        console.error(chalk`{blue Error message:} ${e}`);
        console.error('Exiting: exit code 1');
        process.exit(1);
    });
