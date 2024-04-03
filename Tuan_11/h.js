const { readFile, writeFile } = require('fs');
const path = require('path');

console.log('start');

const firstFilePath = './content/first.txt';
const secondFilePath = './content/second.txt';
const resultFilePath = './content/result-async.txt';

// Kiểm tra xem các tệp cần đọc có tồn tại không
const fileExists = (filePath) => {
    try {
        return fs.existsSync(filePath);
    } catch (err) {
        console.error(`Error checking existence of ${filePath}: ${err}`);
        return false;
    }
};

if (!fileExists(firstFilePath) || !fileExists(secondFilePath)) {
    console.error('One or more files do not exist.');
    return;
}

readFile(firstFilePath, 'utf8', (err, first) => {
    if (err) {
        console.error(`Error reading ${firstFilePath}: ${err}`);
        return;
    }

    readFile(secondFilePath, 'utf8', (err, second) => {
        if (err) {
            console.error(`Error reading ${secondFilePath}: ${err}`);
            return;
        }

        writeFile(resultFilePath, `here is the result : ${first} , ${second}`, (err) => {
            if (err) {
                console.error(`Error writing ${resultFilePath}: ${err}`);
                return;
            }
            console.log('done with this task');
        });
    });
});

console.log('starting next task');
