var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var qGradeModelSchema = new Schema({
    student_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required : [true, 'student field is required!']
    },
    
    lesson_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required : [true, 'lesson field is required!']
    },

    q_marks :{
        type : String,
        required : true
    },

    create_date :{
        type : Date,
        default : Date.now
    }
});

const QGrade = mongoose.model('QGrade',qGradeModelSchema);
module.exports = {QGrade};