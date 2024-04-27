const router = require('express').Router();

const userRoutes = require('../api/userRoutes');
const homeRoutes = require('../homeRoutes');

router.use('/api', userRoutes);
router.use('/', homeRoutes);

module.exports = router;
