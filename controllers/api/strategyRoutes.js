const router = require('express').Router();
const { Strategy } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const strategies = await Strategy.findAll();
    res.render('strategies', { strategies });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
