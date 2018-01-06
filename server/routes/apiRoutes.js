const express = require('express');
const router = express.Router();

router.get('/unko', (req, res) => {
    console.log('call unko!');
    res.status(200).json({id:'unko',name:'unko2'});
})

module.exports = router;
