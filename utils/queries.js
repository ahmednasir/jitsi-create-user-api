
module.exports.selectRelevantMeeting = (time)=>{
    return `SELECT * FROM ${process.env.MEETINGS_TABLE} WHERE 'startTime'>'${time}' AND 'isDeleted' = 0 AND 'isRoot' = 0`;
}

