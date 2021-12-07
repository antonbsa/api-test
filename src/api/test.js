const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send('Inside API');
  } catch (err) {
    console.error(err);
    return res.status(400).send('Server error')
  }
})

module.exports = router;