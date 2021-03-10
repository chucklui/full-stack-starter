const express = require('express');

const router = express.Router();

const models = require('../../models'); //M

router.get('/', async function(req, res) {
    const rows = await models.Skill.findAll();
    res.json(rows);
});

router.post('/', async function (req, res) { //M C of CRUDE 
    const row = models.Skill.build(req.body)
    try {
        await row.save();
        res.status(201).json(row);      //save and return the new data
    } catch (error) {                   // if not returnt the error
        console.log(error);
        res.status(422).json(error);
    }
});

module.exports = router;