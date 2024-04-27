const router = require('express').Router();
const { Campaign } = require('../../models');
router.get('/', async (req, res) => {
  try {
    const campaignData = await Campaign.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const campaigns = campaignData.map(campaign => campaign.get({ plain: true }));
    res.render('campaign', {
      campaigns
     });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;