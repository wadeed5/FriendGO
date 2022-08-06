const express = require('express');


// set up express app 
const app = express();

app.get('/api', (req, res) =>{
    console.log('GET Reqeust');
    res.send({name:'Wadeed'});
});

// listen for request
app.listen(process.env.port || 4000, () => 
    console.log('now listening for requests')
);