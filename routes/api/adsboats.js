const express = require('express');
const router = express.Router();

// AdBoat Model
const AdBoat = require('../../models/AdBoat');

// @route  GET api/adsboats
// @des    Get All AdsBoats
// @access Public
router.get('/', (req, res) => {
  AdBoat.find()
    .sort({ adDate: -1 })
    .then(adsboats => res.json(adsboats));
});

// @route  POST api/adsboats
// @des    Create a Post
// @access Public
router.post('/', (req, res) => {
  const newAdBoat = new AdBoat({
    boatFabricator: req.body.boatFabricator,
    boatModel: req.body.boatModel,
    boatYear: req.body.boatYear,
    boatUseHours: req.body.boatUseHours,
    boatEngines: req.body.boatEngines,
    boatTypeFuel: req.body.boatTypeFuel,
    boatSize: req.body.boatSize,
    boatLocalization: req.body.boatLocalization
  });

  newAdBoat.save().then(adboat => res.json(adboat));
});

// @route  DELETE api/adsboats/:id
// @des    Delete an AdsBoats
// @access Public
router.delete('/:id', (req, res) => {
  AdBoat.findById(req.params.id)
    .then(adboat =>
      adboat.remove().then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}));
})


module.exports = router;
