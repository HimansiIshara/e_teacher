var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var paperModelSchema = new Schema({
    subject_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required : [true, 'subject field is required!']
    },
    p_question_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PQuestion',
        required : [true, 'question field is required!']
    },

    paper_type :{
        type : String,
        required : true
    },
    year :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const Paper= mongoose.model('Paper',paperModelSchema);
module.exports = {Paper};