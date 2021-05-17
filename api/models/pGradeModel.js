var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var pGradeModelSchema = new Schema({
    student_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required : [true, 'student field is required!']
    },
    
    paper_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paper',
        required : [true, 'paper field is required!']
    },

    p_marks :{
        type : String,
        required : true
    },

    create_date :{
        type : Date,
        default : Date.now
    }
});

const PGrade = mongoose.model('PGrade',pGradeModelSchema);
module.exports = {PGrade};