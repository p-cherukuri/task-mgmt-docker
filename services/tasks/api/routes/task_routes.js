// api/routes/task_routes.js

//MongoDB needs IDs to be objects, not just strings
let ObjectID = require('mongodb').ObjectID;

// Routes are wrapped as a function in Express...
// Taking the app instance and database as args
module.exports = function(app, db) {
    
    // Retrieve-a-task Route
    app.get('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const desc = { '_id': new ObjectID(id) };
        db.collection('tasks').findOne(desc, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred, your task could not be retrieved'});
            } else {
                res.send(item);
            }
        });
    });

    // Create-a-task Route
    app.post('/tasks', (req, res) => {
        const task = { desc: req.body.desc, title: req.body.title, completed: "false" };
        db.collection('tasks').insert(task, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred, your task was not created' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // Delete-a-task Route
    app.delete('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const desc = { '_id': new ObjectID(id) };
        db.collection('tasks').remove(desc, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred, your task could not be deleted'});
            } else {
                res.send('Task ' + id + ' deleted!');
            }
        });
    });

    // Update-a-task Route
    app.put('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const desc = { '_id': new ObjectID(id) };
        const task = { desc: req.body.desc, title: req.body.title, completed: req.body.completed };
        db.collection('tasks').update(desc, task, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred, your task could not be updated'});
            } else {
                res.send(task);
            }
        });
    });
};