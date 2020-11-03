
const connection = require('./db').connection;
const utils = require('../utils/util');
const query = require('../utils/queries');
// const { connection } = require('./db');

module.exports.getRelevantMeetings = () => {

    return new Promise((resolve, reject) => {
        try {
            connection.query(query.selectRelevantMeeting(utils.getEndTime(process.env.MEETING_BUFFER_TIME)), (error, result) => {
                if (error) reject(error)
                resolve(JSON.parse(JSON.stringify(result)))
            })
        } catch (error) {
            console.log(error)
        }

    })


}




