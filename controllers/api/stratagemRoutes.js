const router = require('express').Router();
const { Stratagem } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const strategies = await Strategy.findAll();
    res.render('stratagems', { strategies });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
