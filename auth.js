const express = require('express')
const router = express.Router()

const AuthControler = require('./AuthControler')
const User = require('./User')

router.post('/api/register', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(404).send('Name is required and should have a minimum of 3 characers')
        return;
    }

    AuthControler.reqister

    // Users.push(user);
    // res.send(user)
})



// router.post('/api/register', (req, res) => {
//     AuthControler.reqister
// })

module.exports = router;