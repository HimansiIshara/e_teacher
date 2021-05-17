var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var teacherModelSchema = new Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : [true, 'user field is required!']
    },
    qualifications :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const Teacher = mongoose.model('Teacher',teacherModelSchema);
module.exports = {Teacher};