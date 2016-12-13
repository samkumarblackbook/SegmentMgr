/**
 * Created by kumarpadmanabansa01 on 12/12/16.
 */
const Segment = require('../models').Segment;

module.exports = {
    create(req, res) {
        return Segment
            .create({
                name: req.body.name,
                description: req.body.description,
                market: req.body.market
            })
            .then(segment => res.status(201).send(segment))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Segment
            .all()
            .then(segments => res.status(200).send(segments))
            .catch(error => res.status(400).send(error));
    }
};