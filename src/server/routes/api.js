const express = require('express');
const { body, validationResult } = require('express-validator');
// eslint-disable-next-line import/extensions
const data = require('../data.js');

const router = express.Router();
const types = ['image', 'video'];

router.get('/', (req, res) => {
  res.send("Api V1");
});

router.get('/playlist', (req, res) => {
  res.send(data);
});

router.post('/add', 
  body('name').isString().withMessage('Name must be a text'),
  body('type').custom((value) => {
    if (types.includes(value)) {
      return true;
    }
    throw new Error('Type must be one of the following: image, video');
  }),
  body('url').isURL().withMessage('Invalid url'),
  body('duration').isNumeric().withMessage('Invalid data type for duration'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
          success: false,
          errors: errors.array()
      });
    }
    data.push(req.body);
    return res.status(200).json({
      success: true,
      message: 'Media was added successfully',
    })
  }
);

module.exports = router;