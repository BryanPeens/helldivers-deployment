const router = require('express').Router();
const homeRoutes = require('../homeRoutes');
const userRoutes = require('./userRoutes'); // Move this line up
const projectRoutes = require('./projectRoutes');
const matchRoutes = require('./matchRoutes');

router.use('/api', userRoutes);
router.use('/', homeRoutes);

router.use('/matches', matchRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
