const express = require("express");
const router = express.Router();

const utils = require('../utils/util')
const service = require('../services/dbService');


router.delete('/', (req, res) => {
    try {
        service.getRelevantMeetings().then(resp => {
            console.log(resp)
            let promises = []
            for (let val of resp) {
                let command = `sudo prosodyctl deluser ${val.trainerUsername}`
                promises.push(utils.execShellCommand(command))
            }
            return Promise.all(promises)
        }).then(resp => {
            console.log(resp)
            res.send({
                "Status": 200,
                "Message": "Deleted"
            })
        }).catch(err => {
            console.log(err)
            res.send({
                "Status": 500,
                "Message": "InternalServerError"
            })
        })
    } catch (error) {
        console.log(error)
        res.send({
            "Status": 500,
            "Message": "InternalServerError"
        })
    }
})

module.exports = router;