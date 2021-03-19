'use strict';

const HttpStatus = require('http-status-codes');
const interceptors = require('../interceptors');
const express = require('express');

const router = express.Router();

const models = require('../../models'); //M

router.get('/', async function(req, res) { //M
    const row = await models.Skill.findAll();
    res.json(row);
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

router.get('/:id', async function(req, res) { //M
    const row = await models.Skill.findByPk(req.params.id);
    if (row) {
  
      res.json(row);
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
});

router.patch('/:id', interceptors.requireLogin, async function(req, res) { //M
    const row = await models.Skill.findByPk(req.params.id);
    if (row) {
      try {
        await row.update(req.body);
        res.status(HttpStatus.OK).end();  
      } catch (error) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
      }
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  });

  router.delete('/:id', interceptors.requireLogin, async function(req, res) { //M
    const row = await models.Skill.findByPk(req.params.id);
    if (row) {
      await row.destroy();
      res.status(HttpStatus.OK).end();
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  });

module.exports = router;