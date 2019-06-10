const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', async(req, res, next) => {
    const { title, body } = req.body;
    try {
      const createdNote = await Note
        .create({ title, body });
      
      res.send(createdNote);
    } catch(err) {
      next(err);
    }
  })
  
  .get('/', async(req, res, next) => {
    try {
      const allNotes = await Note
        .find();

      res.send(allNotes);
    } catch(err) {
      next(err);
    }
  });
