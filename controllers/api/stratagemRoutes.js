const router = require('express').Router();
const { Stratagem } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const strategems = await Stratagem.findAll();
    res.render('stratagems', { strategems });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
