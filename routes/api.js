//Ben, set up below
const express = require('express');

const router = express.Router();
//middleware to validate inputs
router.post('/:math', (req, res, next) => {
  if(!req.body.num1 && !req.body.num2) {
    res.status(432).json({message: 'No Data Fool'})
    return
  }
  next();
});

//routes for the calculator
router.post('/add', (req, res, next) => {
  res.json({result: req.body.num1 + req.body.num2});
});

module.exports = router;
