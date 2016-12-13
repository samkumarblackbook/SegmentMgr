/**
 * Created by kumarpadmanabansa01 on 12/12/16.
 */
const todosController = require('../controllers').todos;
const segmentsController = require('../controllers').segments;
const vehiclesController = require('../controllers').vehicles;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the world of Autobahn Segments  API!',
    }));

    app.post('/api/segment', segmentsController.create);

    app.get('/api/segments', segmentsController.list);

    app.post('/api/vehicle', vehiclesController.create);

    app.get('/api/vehicles', vehiclesController.list);
};