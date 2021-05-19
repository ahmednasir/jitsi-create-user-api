const express = require("express");
const router = express.Router();
const uuid = require('uuid');
const { exec } = require("child_process");

const DOMAIN_NAME = "live.apnashareapp.com"

const getPassword = () => {
    return uuid.v4().split("-")[0]
}

router.post('/', (req, res) => {
    try {
        let password = getPassword();

        let userName = req.body.username;
        if (!userName) throw "nullUsername"
        let command = `sudo prosodyctl register ${userName} ${DOMAIN_NAME} ${password}`
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
            userName = `${userName}@${DOMAIN_NAME}`
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

router.post('/with-password', (req, res) => {
    try {
        let password = req.body.password;

        let userName = req.body.username;
        if (!userName || !password) throw "nullUsername"
        let command = `sudo prosodyctl register ${userName} ${DOMAIN_NAME} ${password}`
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
            userName = `${userName}@${DOMAIN_NAME}`
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

router.delete('/', (req, res) => {
    try {
        let userName = req.body.username;
        if (!userName) throw "nullUsername"
        let command = `sudo prosodyctl deluser ${userName}`;
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
            userName = `${userName}${DOMAIN_NAME}`
            res.send({
                "Status": 200,
                "Message": "Deleted"
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
