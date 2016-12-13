/**
 * Created by kumarpadmanabansa01 on 12/12/16.
 */
const Vehicle = require('../models').Vehicle;

module.exports = {
    create(req, res) {
        return Vehicle
            .create({
                name: req.body.name,
                description: req.body.description,
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                vin: req.body.vin,
            })
            .then(vehicle => res.status(201).send(vehicle))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Vehicle
            .all()
            .then(vehicles => res.status(200).send(vehicles))
            .catch(error => res.status(400).send(error));
    }
};