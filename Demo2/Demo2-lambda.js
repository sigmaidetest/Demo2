let AWS=require('aws-sdk');
const ddb = AWS.DynamoDB();

exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'Table',
        Item: { id: '1', name: 'jhjh' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}