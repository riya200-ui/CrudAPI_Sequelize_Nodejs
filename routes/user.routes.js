module.exports = app => {
    const users = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    // Create a new users
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);
  
  
    // Retrieve a single users with id
    router.get("/:id", users.findOne);
  
    // Update a users with id
    router.patch("/:id", users.update);
  
    // Delete a users with id
    router.delete("/:id", users.delete);
  
   

    app.use('/api/users', router);
  };