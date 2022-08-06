const express = require('express');
const router = express.Router();
const Friend = require('../models/friend'); 

//get a list of friends from the db
router.get('/friends', (req, res, next) => {
    res.send({type: 'GET'});
});

//add a new friend to db 
router.post('/friends', (req, res, next) => {
    Friend.create(req.body).then((friend) => {
        res.send(friend);
    }).catch(next);
});

//update friend record in the db
router.put('/friends/:id', (req, res, next) => {
    res.send({type: 'PUT'});
});

//remove frined from the db
router.delete('/friends/:id', (req, res, next) => {
    res.send({type: 'DELETE'});
});


module.exports = router;