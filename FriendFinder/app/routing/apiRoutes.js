var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {

//A GET route with the url /api/friends. 
//This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
    return res.json(tableData);
});

// A POST routes /api/friends. This will be used to handle incoming survey results.
// This route will also be used to handle the compatibility logic.

};