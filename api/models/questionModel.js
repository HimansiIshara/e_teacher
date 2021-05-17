var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var questionModelSchema = new Schema({
    lesson_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required : [true, 'lesson field is required!']
    },
    question :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const Question = mongoose.model('Question',questionModelSchema);
module.exports = {Question};