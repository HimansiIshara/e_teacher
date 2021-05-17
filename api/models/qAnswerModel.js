var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var qAnswerModelSchema = new Schema({
    question_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required : [true, 'question field is required!']
    },
    question_answer :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const QAnswer = mongoose.model('QAnswer',qAnswerModelSchema);
module.exports = {QAnswer};