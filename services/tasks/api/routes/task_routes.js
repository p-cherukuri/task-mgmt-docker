// api/routes/task_routes.js

const cors = require('cors');
//MongoDB needs IDs to be objects, not just strings
let ObjectID = require('mongodb').ObjectID;

// Routes are wrapped as a function in Express...
// Taking the app instance and database as args
module.exports = function(app, db) {
    
    // Retrieve-a-task Route
    app.get('/tasks', cors(), (req, res) => {
        db.collection('tasks').find({}, (err, items) => {
            if (err) {
                res.send({'error':'An error has occurred, your tasks could not be retrieved'});
            } else {
                console.log(items);
                res.send(items);
            }
        });
    });

    // Create-a-task Route
    app.post('/tasks', cors(), (req, res) => {
        const task = { desc: req.body.desc, title: req.body.title, date: req.body.date, completed: false };
        db.collection('tasks').insert(task, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred, your task was not created' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // Delete-a-task Route
    app.delete('/tasks/:id', cors(), (req, res) => {
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

    // Update-a-task Route - Mark as Completed
    app.put('/tasks/:id', cors(),(req, res) => {
        const id = req.params.id;
        const desc = { '_id': new ObjectID(id) };
        const task = { desc: req.body.desc, title: req.body.title, date: req.body.date, completed: req.body.completed };
        db.collection('tasks').update(desc, task, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred, your task could not be updated'});
            } else {
                res.send(task);
            }
        });
    });
};