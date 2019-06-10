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
  });
