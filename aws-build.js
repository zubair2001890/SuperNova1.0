const fs = require("fs");
const { execSync, exec } = require('child_process');

if (!(fs.existsSync('./backend/.env') && fs.existsSync('./frontend/.env'))) {
    throw new Error('ENV files for frontend, backend or both are missing.');
}

console.time("Build Time Frontend");
console.time("Build Time Backend");
const date = new Date();

execSync('rm -rf aws-build && mkdir aws-build && cd aws-build && mkdir website');

exec('cd frontend && rm -rf node_modules && npm ci && npm run build && mv build/* ../aws-build/website/', (error, stdout) => {
    if (error) {
        console.log('\x1b[1m');
        console.log('Build Frontend:', '\x1b[31m', 'Failed', '\x1b[37m', '\x1b[0m');
        console.log('Date: ', date.toLocaleDateString(), `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        console.log(error);
        return;
    }

    console.log(stdout);

    console.log('\x1b[1m')
    console.log('Build Frontend:', '\x1b[32m', 'Successful', '\x1b[37m', '\x1b[0m');
    console.log('Date: ', date.toLocaleDateString(), `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.timeEnd("Build Time Frontend");
});

execSync('cd backend && rm -rf node_modules && npm ci && npm run build && mv dist/* ../aws-build/ && cp -a node_modules ../aws-build/node_modules', (stdout) => {
    if (error) {
        console.log('\x1b[1m');
        console.log('Build Backend:', '\x1b[31m', 'Failed', '\x1b[37m', '\x1b[0m');
        console.log('Date: ', date.toLocaleDateString(), `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        console.log(error);
        return;
    }

    console.log(stdout);

    console.log('\x1b[1m')
    console.log('Build Backend:', '\x1b[32m', 'Successful', '\x1b[37m', '\x1b[0m');
    console.log('Date: ', date.toLocaleDateString(), `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.timeEnd("Build Time Backend");
});
