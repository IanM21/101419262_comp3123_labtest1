/*
Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delete
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current
working directory to build directory path. It is acceptable, to have a
remove.js script and separate add.js script.
*/

const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, 'Logs');
const logFiles = ['log1.txt', 'log2.txt', 'log3.txt', 'log4.txt', 'log5.txt', 'log6.txt', 'log7.txt', 'log8.txt', 'log9.txt', 'log10.txt'];

function createLogs() {
    if (!fs.existsSync(logsPath)) {
        fs.mkdirSync(logsPath);
    }
    process.chdir(logsPath);
    logFiles.forEach((file) => {
        fs.writeFileSync(file, 'Some text');
        console.log(file);
    });
}
createLogs();