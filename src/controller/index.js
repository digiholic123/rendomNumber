// Import userController module
const userController = require('./userController');
const controller = {
    userController: userController, // Assign userController module to property userController
};

// Export the controller object to make it accessible from other files
module.exports = controller;  
