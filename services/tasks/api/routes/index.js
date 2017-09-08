// api/routes/index.js

// Exporting task_routes.js as a function here

const taskRoutes = require('./task_routes');

module.exports = function(app, db) {
    taskRoutes(app, db);

};