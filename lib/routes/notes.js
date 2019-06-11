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
        .find()
        .lean();

      res.send(allNotes);
    } catch(err) {
      next(err);
    }
  })
  
  .get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
      const foundNote = await Note
        .findById(id)
        .lean();
      
      res.send(foundNote);
    } catch(err) {
      next(err);
    }
  });
