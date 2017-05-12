var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var tabConf = require('../utils/table-config');

// var userchema = new Schema({
//     username:{type:String,required:true},
//     password:{type:String,required:true},
//     role:{type:String,required:false}
// });
var userchema = new Schema(tabConf['users']);


userchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};


userchema.methods.validPassword = function (password) {
    var isvalidate = false
    try {
        isvalidate = bcrypt.compareSync(password, this.password);
    } catch (exception) {
        console.log(exception);
    } finally {
        return isvalidate;
    }
};


module.exports = mongoose.model('User', userchema);