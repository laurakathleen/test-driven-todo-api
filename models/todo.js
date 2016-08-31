var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


//don't have to worry about our Id's because they are being created in our app
var TodoSchema = new Schema({
	task: String,
	description: String
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;