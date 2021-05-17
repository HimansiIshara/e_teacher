var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var studentModelSchema = new Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : [true, 'user field is required!']
    },
    date_of_birth :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const Student = mongoose.model('Student',studentModelSchema);
module.exports = {Student};