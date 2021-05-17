var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var pQuestionModelSchema = new Schema({
    paper_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paper',
        required : [true, 'paper field is required!']
    },
    paper_question :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const PQuestion = mongoose.model('PQuestion',pQuestionModelSchema);
module.exports = {PQuestion};