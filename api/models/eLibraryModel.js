var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eLibraryModelSchema = new Schema({
    subject_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required : [true, 'subject field is required!']
    },
    book :{
        type : String,
        required : true
    },
    create_date :{
        type : Date,
        default : Date.now
    }
});

const ELibrary = mongoose.model('ELibrary',eLibraryModelSchema);
module.exports = {ELibrary};