var mongoose = require("mongoose");

var bucketSchema = new mongoose.Schema({
    text: String
});

module.exports = mongoose.model("bucket", bucketSchema);