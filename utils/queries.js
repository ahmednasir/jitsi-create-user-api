
module.exports.selectRelevantMeeting = (time)=>{
    return `SELECT * FROM ${process.env.MEETINGS_TABLE} WHERE 'endTime'>'${time}' AND 'isDeleted' = 0 AND 'isRoot' = 0`;
}

