const express = require('express');
const router = express.Router();

//get a list of friends from the db
router.get('/friends', (req, res) => {
    res.send({type: 'GET'});
});

//add a new friend to db 
router.post('/friends', (req, res) => {
    res.send({type: 'POST'});
});

//update friend record in the db
router.put('/friends/:id', (req, res) => {
    res.send({type: 'PUT'});
});

//remove frined from the db
router.delete('/friends/:id', (req, res) => {
    res.send({type: 'DELETE'});
});


module.exports = router;