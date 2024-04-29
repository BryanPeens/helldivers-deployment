const router = require('express').Router();
const { Project, User, Match } = require('../../models');
const withAuth = require('../../utils/auth');

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

module.exports = router;