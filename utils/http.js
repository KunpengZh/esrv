var request = require("request");
var qs = require('querystring');
var Logger = require("log4js").getLogger('HTTP-Util');

var encodeBase64 = function (strValue) {
    return new Buffer(strValue).toString("base64");
}
var decodeBase64 = function (strValue) {
    return new Buffer(strValue, 'base64').toString()
}
var generalAuthorization = function (userid, password) {
    return 'Basic ' + encodeBase64(userid + ':' + password);
}

exports.httpGet = function (url, userid, password) {
    return new Promise(function (resolve, reject) {
        var headerAuthorization = generalAuthorization(userid, password);
        var GETOPT = {
            url: url,
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                authorization: headerAuthorization,
                'content-type': 'application/json'
            },
            json: true
        };
        request(GETOPT, function (error, response, body) {
            if (error) throw new Error(error);
            resolve(body);
        });
    })
}

exports.httpPost = function (url, userid, password, data) {
    return new Promise(function (resolve, reject) {
        var headerAuthorization = generalAuthorization(userid, password);
        var POSTOPT = {
            method: 'POST',
            url: url,
            headers: {
                'cache-control': 'no-cache',
                authorization: headerAuthorization,
                'content-type': 'application/json'
            },
            body: data,
            json: true
        };
        request(POSTOPT, function (error, response, body) {
            if (error) throw new Error(error);
            resolve(body);
        });
    })
}


