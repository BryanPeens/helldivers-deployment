const router = require("express").Router();
const { User, Match, Loadout, Campaign, Stratagem, Project } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const matchData = await Match.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const matches = matchData.map((match) => match.get({ plain: true }));

    res.render("home", {
      matches,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/match/:id", async (req, res) => {
  try {
    const matchData = await Match.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const match = matchData.get({ plain: true });

    res.render("match", {
      ...match,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Loadout }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// routes for links to views
// get matches
router.get("/matches", async (req, res) => {
  try {
    const matchData = await Match.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const matches = matchData.map((match) => match.get({ plain: true }));

    res.render("matches", {
      matches,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get loadouts
router.get("/loadouts", async (req, res) => {
  try {
    res.render("loadouts");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get campaigns
// get campaigns
router.get('/campaigns', async (req, res) => {
  console.log("============================================================= Now inside campaigns");
  try {
    const campaignData = await Campaign.findAll();
    const campaigns = campaignData.map(campaign => campaign.get({ plain: true }));
    res.render('campaign', { 
      campaigns,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/stratagems", async (req, res) => {
  try {
    console.log("================================= INSIDE STRATAGEM");
    const stratagemData = await Stratagem.findAll();
    const stratagems = stratagemData.map((stratagemData) => stratagemData.get({ plain: true }));
    console.log('stratagems', stratagems)
    res.render("stratagems", { stratagems });
  } catch (err) {
    res.status(500).json(err);
  }
});

// =========
router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    console.log("============ IN/PROFILE", req.session.user_id);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/matches', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ 
        model: Project,
        include: [{ model: User, attributes: ['name'] }]
      }],
    });

    const projects = userData.Projects.map(project => project.get({ plain: true }));

    res.render('matches', {
      projects,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// render home page with loadout data
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
