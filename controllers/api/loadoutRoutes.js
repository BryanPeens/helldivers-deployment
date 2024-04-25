const router = require('express').Router();
const { Loadout } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const loadouts = await Loadout.findAll();
    res.render('loadouts', { loadouts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
