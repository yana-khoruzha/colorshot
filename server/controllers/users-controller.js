const { User } = require('../models');
const { validationResult } = require('express-validator');

function create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }
    // res.send(req.body);
    User.findOne({where: { email: req.body.email }}).then(user => {
        if (user) {
            return Promise.reject({statusCode: 422, message: "This email is already used"});
        } else {
            const {username, email, password} = req.body;
            return User.create({username, email, password});
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        res.status(error.statusCode || 400).json({error: error.message});
    })
}

module.exports = {
  create,
};
