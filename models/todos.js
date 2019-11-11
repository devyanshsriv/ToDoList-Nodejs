var mongoose = require("mongoose");

var todosSchema = new mongoose.Schema({
    text: String,
    bucketId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bucket'
    }
});

module.exports = mongoose.model("todo", todosSchema);