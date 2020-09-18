const express = require('express');
const route = express.Router();



var courses = [
    { id: 1, name: "Mechanical" },
    { id: 2, name: "Computer" },
    { id: 3, name: "Electrical" }
  ];

route.get("/api/courses", (req, res) => {
    res.send(courses);
  });
    route.get("/api/courses/:id", (req, res) => {
      const result = courses.find(c => c.id === parseInt(req.params.id));
     resouceNotFoundError(result);
      res.send(result);
    });
  
  
    //Sending a POST request
    route.post('/api/courses/',(req, res)=>{  
      //Valiate
      const { error } = validateCourse(req.body);
     //If invalid - return 400 - Bad request
        badRequestError(error);
         
       const course = {
        id: courses.length + 1,
        name: req.body.name
       };
       courses.push(course);
       res.send(course);
    });
  
  
    //Updating Courses
    route.put('/api/courses/:id', (req, res)=>{
      //Find course
      const course = courses.find(c => c.id === parseInt(req.params.id));
      //If not exists return 404 (resource not found error)
      resouceNotFoundError(course);
    
  
      //Valiate
      const { error } = validateCourse(req.body);
     //If invalid - return 400 - Bad request
          badRequestError(error);
        
      //Update Course
      course.name = req.body.name;
      //return the updated one
      res.send(course);
  
    });
  
    route.delete('/api/courses/:id', (req, res)=>{
        //Find course
        const course = courses.find(c => c.id === parseInt(req.params.id));
        //If not exists return 404 (resource not found error)
        if (!course) return resouceNotFoundError(result);
  
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
        
    });
  
    module.exports = route;











    // Functions----------------

  // 400 error -- bad request
  function badRequestError(error){
    if(error) return res.status(400).send(error.details[0].message);
  }
  // 404 error -- resource not found
  function resouceNotFoundError(result){
    if (!result) return res.status(404).send("Coruse not found with that ID.");
  }

  // 400 error
    function validateCourse(course){
      const schema = {
        name : Joi.string().min(3).required(),
      };
      return Joi.validate(course, schema);
    }
