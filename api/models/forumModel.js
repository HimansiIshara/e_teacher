var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var forumModelSchema = new Schema({
    
    forum_question :{
        type : String,
        required : false
    },
    forum_answer :{
        type : String,
        required : false
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const Forum = mongoose.model('Forum',forumModelSchema);
module.exports = {Forum};