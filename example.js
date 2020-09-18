const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log("Connected with MongoDB..."))
    .catch(err => console.error("Error Occured : ",err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean

});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    
const course = new Course({
    name: "React",
    author: "Khursheed",
    price: 66,
    tags: ['react', 'Frontend and Backend'],
    isPublished: true,
});

// const result = await course.save();
// console.log(result);
}


// Mongoose conditional operators
//eq - equal 
//ne - not equal
//in - in
//nin - not in
//gt - greater than
//gte - greater than or equal
//lt - less than
//lte - less than or equal

createCourse();


    async function getCourse(){
        const courses = await Course
         //.find({author: "Alam", isPublished: true})
         .find()

         //Logical Operators
         //or
         .or([{author: "Alam"},{isPublished: true}])
         //and
         .and([{author: "Alam"},{isPublished: true}])
         .limit(5)
         .sort({name: 1})
        .select({name: 1, price: 1});
        console.log(courses);
    }

    getCourse();