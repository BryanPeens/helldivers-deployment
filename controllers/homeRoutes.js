const router = require('express').Router();
const { User, Match, Loadout, Strategy } = require('../models');
const withAuth = require('../utils/auth');

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

    const matches = matchData.map((match) => match.get({ plain: true }));

    res.render('home', { 
      matches, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/match/:id', async (req, res) => {
  try {
    const matchData = await Match.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const match = matchData.get({ plain: true });

    res.render('match', {
      ...match,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Loadout }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// routes for links to views
// get matches
router.get('/matches', async (req, res) => {
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
// get strategies
router.get('/strategies', async (req, res) => {
  try {
    const strategies = await Strategy.findAll();
    res.render('strategies', { strategies });
  } catch (err) {
    res.status(500).json(err);
  }
});
// get loadouts
router.get('/loadouts', async (req, res) => {
  try {
    const loadouts = await Loadout.findAll();
    res.render('loadouts', { loadouts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
