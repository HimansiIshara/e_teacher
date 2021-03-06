var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var lessonModelSchema = new Schema({
    subject_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required : [true, 'subject field is required!']
    },
    /*date_of_birth :{
        type : String,
        required : true
    },*/
    create_date :{
        type : Date,
        default : Date.now
    },
    approveStatus:{
        type:Boolean,
        default:false
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : [true, 'user id required']
    },
});

const Lesson = mongoose.model('Lesson',lessonModelSchema);
module.exports = {Lesson};