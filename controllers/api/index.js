const router = require('express').Router();
const homeRoutes = require('../homeRoutes');
const userRoutes = require('./userRoutes'); // Move this line up
const projectRoutes = require('./projectRoutes');

router.use('/api', userRoutes);
router.use('/', homeRoutes);

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
