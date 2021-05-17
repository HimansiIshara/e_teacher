var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var badgeModelSchema = new Schema({
 
     badge :{
        type : String,
        required : true
    },

    marks_range :{
        type : String,
        required : true
    },

    create_date :{
        type : Date,
        default : Date.now
    }
});

const Badge = mongoose.model('Badge',badgeModelSchema);
module.exports = {Badge};