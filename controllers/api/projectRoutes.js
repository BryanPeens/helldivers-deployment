const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// save with images
router.post('/', withAuth, async (req, res) => {
  try {
    const { name, battle_level, description, stratagemImage, orbitalCannonImage, hangarImage, bridgeImage, avatarImage } = req.body;

    const newProject = await Project.create({
      name,
      battle_level,
      description,
      stratagem_image: stratagemImage,
      orbital_cannon_image: orbitalCannonImage,
      hangar_image: hangarImage,
      bridge_image: bridgeImage,
      avatar_image: avatarImage,
      user_id: req.session.user_id,
    });

    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
