const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log("Connected with MongoDB..."))
    .catch(err => console.error("Error Occured : ",err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    price: Number,
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
});

const Course = mongoose.model('Courses', courseSchema);

    async function getCourses(){
        const course = await Course
    .find({name: /.*by*./i, isPublished: true, price: {$gte: 15}})
        .select({name: 1, author: 1, price: 1});
        if(course.length == 0) return console.log("Records not found!");
        console.log(course);
    }

    getCourses();