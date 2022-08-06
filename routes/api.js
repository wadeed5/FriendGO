const express = require('express');
const { findOne } = require('../models/friend');
const router = express.Router();
const Friend = require('../models/friend'); 

//get a list of friends from the db
router.get('/friends', (req, res, next) => {
    Friend.aggregate([
        {
        $geoNear:
            {
                near: { type: 'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
                distanceField: "dist.calculated", 
                maxDistance: 100000000,
                spherical: true
            }
        }
    ]).then((friends) => {
        console.log(friends);
        res.send(friends);
    })
});

//add a new friend to db 
router.post('/friends', (req, res, next) => {
    Friend.create(req.body).then((friend) => {
        res.send(friend);
    }).catch(next);
});

//update friend record in the db
router.put('/friends/:id', (req, res, next) => {
    Friend.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Friend.findOne({id: req.params.id}).then((friend) => {
            res.send(friend);
        });
    }).catch(next);
});

//remove frined from the db
router.delete('/friends/:id', (req, res, next) => {
    Friend.findByIdAndRemove({_id: req.params.id}).then((friend) => {
        res.send(friend);
    }).catch(next);
});


module.exports = router;