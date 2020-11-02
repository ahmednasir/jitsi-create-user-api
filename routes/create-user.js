const express = require("express");
const router = express.Router();
const uuid = require('uuid');
const { exec } = require("child_process");

const getPassword = () => {
    return uuid.v4().split("-")[0]
}

router.use('/', (req, res) => {
    try {
        let password = getPassword();

        let userName = req.body.username;
        if (!userName) throw "nullUsername"
        let command = `sudo prosodyctl register ${userName} live.apnashareapp.com ${password}`
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                throw error;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                throw error;
            }
            console.log(`stdout: ${stdout}`);
            res.send({
                "Status": 200,
                "Message": {
                    username: userName,
                    password: password
                }
            })
        });

    } catch (error) {
        console.log(error)
        res.send({
            "Status": 500,
            "Message": "InternalServerError"
        })
    }
})

module.exports = router;