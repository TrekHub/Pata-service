const User = require('./User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
    bcrypt.hash(req.body.password, 15, ((err, hashedPass) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({ mesage: 'Account created Successfully!' })
            })
            .catch(error => {
                res.json({ message: 'Sorry try again later.. ' })
            })
    }))

}

module.exports = register;