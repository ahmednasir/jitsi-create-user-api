const exec = require('child_process').exec;
module.exports.getEndTime = (minutes) => {
    let currentTime = new Date()
    return new Date(currentTime.getTime() + minutes * 60000).toISOString()
}

module.exports.execShellCommand = (cmd) => { 
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}