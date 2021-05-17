var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var feedbackModelSchema = new Schema({
    student_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required : [true, 'student field is required!']
    },
    
    badge_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Badge',
        required : [true, 'badge field is required!']
    },

    

    create_date :{
        type : Date,
        default : Date.now
    }
});

const Feedback= mongoose.model('Feedback',feedbackModelSchema);
module.exports = {Feedback};