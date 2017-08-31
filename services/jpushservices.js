var express = require('express');
var router = express.Router();
var log4js = require("log4js");
var log4js_config = require("../log4js.json");
log4js.configure(log4js_config);
var Logger = log4js.getLogger('log_file');
var AppKey = 'aa111e6de4492c1162d784f0';
var MasterSecret = 'b63d9dcf824a6f075fe4e758';
var http = require('../utils/http');
var mongodb = require('../utils/mongo-utils');
var DEVICEAPIURL = 'https://device.jpush.cn';
var PUSHAPIURL = 'https://api.jpush.cn/v3/push';

const offlineMessageTable = 'offlineMessage';

var JPush = {};

var getOfflineMessageByAlias = function (alias) {
    return new Promise(function (resolve, reject) {
        
        mongodb.find(offlineMessageTable, { 'username': alias }, null, function (err, messages) {

            if (err) throw err;
            if (messages.length > 0) {
                resolve(messages[0])
            } else {
                resolve(false)
            }
        })
    })
}

var removeOfflineMsg = function (alias) {
    return new Promise(function (resolve, reject) {
        mongodb.remove(offlineMessageTable, { 'username': alias }, function (err, res) {
            if (err) throw err;

            resolve(res)

        })
    })
}

var setNewOfflineMsgForAlias = function (msg, alias) {
    return new Promise(function (resolve, reject) {
        getOfflineMessageByAlias(alias).then((offmsg) => {
        
            if (offmsg) {
                offmsg.message.push(msg);
                mongodb.update(offlineMessageTable, { 'username': alias }, offmsg, function (err, saveres) {
                    if (err) throw err;
                    resolve(saveres);
                })
            } else {
                offmsg = {
                    username: alias,
                    message: [msg]
                }
                mongodb.save(offlineMessageTable, offmsg, function (err, saveres) {
                    if (err) throw err;
                    resolve(saveres);
                })
            }
        }).catch((err) => {
            throw err;
        })
    })
}

var queryAlias = function (alias) {
    return new Promise(function (resolve, reject) {
        http.httpGet(DEVICEAPIURL + "/v3/aliases/" + alias, AppKey, MasterSecret).then((regids) => {
            regids = regids.registration_ids;
           
            resolve(regids);
        })
    }).catch(function (err) {
        throw err;
    })
}

JPush.pushNotification = function (notification, alias) {
    if (!(notification instanceof Array)) {
        notification = [notification];
    }
    return new Promise(function (resolve, reject) {
        var pushOPT = {
            "platform": "all",
            "audience": {
                "alias": [alias]
            },
            "notification": {
                "android": {
                    "alert": "有新的派工单指派给你",
                    "title": "电力局电子派工单系统",
                    "extras": {
                        "messages": notification
                    }
                }
            },
            "options": {
                "time_to_live": 86400 * 3,
                "apns_production": true
            }
        }

        queryAlias(alias).then((aliasIDs) => {
            
            if (aliasIDs.length > 0) {
                
                http.httpPost(PUSHAPIURL, AppKey, MasterSecret, pushOPT).then((res) => {
                   
                    resolve({
                        status: 200,
                        message: '',
                        data: res
                    })
                }).catch(function (err) {
                    throw err;
                })
            } else {
                
                Logger.error("The Alias does not exist");
                setNewOfflineMsgForAlias(notification, alias).then((res) => {
                    resolve({
                        status: 200,
                        message: "用户不在线或是没有注册",
                        data: res
                    });
                }).catch((err) => {
                    throw err
                })
            }
        }).catch(function (err) {
            throw err;
        })
    })
}

JPush.sentOfflineMsgForAlias = function (alias) {
    return new Promise(function (resolve, reject) {
        getOfflineMessageByAlias(alias).then((offmsg) => {
            if (offmsg) {
                JPush.pushNotification(offmsg.message, alias).then((pushres) => {
                    removeOfflineMsg(alias).then((remres) => {
                        Logger.info("成功发送离线消息,原有消息已从数据库清除")
                        resolve({
                            status: 200,
                            message: "成功发送离线消息",
                            data: pushres
                        })
                    }).catch((err) => {
                        throw err;
                    })

                }).catch((err) => {
                    throw err;
                })
            } else {
                resolve({
                    status: 200,
                    message: "没有离线消息",
                    data: ''
                })
            }
        }).catch((err) => {
            throw err;
        })
    })

}


module.exports = JPush;