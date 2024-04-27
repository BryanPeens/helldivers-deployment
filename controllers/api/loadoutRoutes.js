const router = require('express').Router();
const { Loadout, User } = require('../../models');

// get loadouts
router.get('/', async (req, res) => {
  try {
    const loadouthData = await Loadout.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const loadout = loadouthData.map(load => load.get({ plain: true }));

    res.render('loadouts', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
