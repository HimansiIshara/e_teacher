var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var subjectModelSchema = new Schema({
   
    subject :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const Subject = mongoose.model('Subject',subjectModelSchema);
module.exports = {Subject};