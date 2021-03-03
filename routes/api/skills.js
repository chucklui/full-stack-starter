const express = require('express');

const router = express.Router();

router.get('/', async function(req, res) {
    res.json([
        {id: 1, name: "asd"},
        {id: 2, name: "zxc"}
    ]);
});

module.exports = router;