var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var pAnswerModelSchema = new Schema({
    p_question_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PQuestion',
        required : [true, 'question field is required!']
    },
    paper_answer :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const PAnswer = mongoose.model('PAnswer',pAnswerModelSchema);
module.exports = {PAnswer};