const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/techcourses',{useNewUrlParser:true, useUnifiedTopology:true})
.then(function() { console.log("Connected With MongoDB")})
.catch(function(err) {console.log("Error Occured: ", err)});



var submit = document.getElementById('submit');
var course_name = document.getElementById('course_name');
var auth_name = document.getElementById('auth_name');

submit.addEventListener('click', function() {
	console.log(course_name.value);
});
