var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.send("hello");
});

//import model and route for Category
var bucketRoute = require("./routes/bucketRoute");
app.use("/", bucketRoute);

var todosRoute = require("./routes/todosRoute");
app.use("/", todosRoute);

mongoose.connect("mongodb+srv://devSriv22:dev1996@@localcluster-84ofl.mongodb.net/todo_list?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

/////////********** On LOCAL HOST **************///////
// // on local
var server = app.listen(5000, function () {
    console.log("Listening on port %s...", server.address().port);
});