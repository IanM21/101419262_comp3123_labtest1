const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, 'Logs');
const logFiles = ['log1.txt', 'log2.txt', 'log3.txt', 'log4.txt', 'log5.txt', 'log6.txt', 'log7.txt', 'log8.txt', 'log9.txt', 'log10.txt'];

function removeLogs() {
    if (fs.existsSync(logsPath)) {
        logFiles.forEach((file) => {
            console.log(`delete files... ${file}`);
            fs.unlinkSync(path.join(logsPath, file));
        }
        );
        fs.rmdirSync(logsDir);
    }
}
removeLogs();