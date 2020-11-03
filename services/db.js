const mysql = require('mysql');
const AWS = require('aws-sdk');

const awsConfig = {
    "region": process.env.REGION,
    "endpoint": process.env.DB_ENDPOINT,
    "accessKeyId": process.env.ACCESS_KEY_ID,
    "secretAccessKey": process.env.SECRET_KEY_ID
}


module.exports.dynamoDB = new AWS.DynamoDB.DocumentClient(awsConfig);

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

module.exports.connection = connection