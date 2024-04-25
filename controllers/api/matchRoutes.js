const router = require('express').Router();
const { Match, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const matchData = await Match.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const matches = matchData.map(match => match.get({ plain: true }));

    res.render('matches', {
      matches,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
