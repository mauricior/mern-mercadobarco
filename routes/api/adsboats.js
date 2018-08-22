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

// @route  GET api/adsboats/:type
// @des    Get AdsBoats by Type
// @access Public
router.get('/:type', (req, res) => {
  AdBoat.find({ boatType: req.params.type })
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
    boatLocalization: req.body.boatLocalization,
    boatType: req.body.boatType
  });

  newAdBoat.save().then(adboat => res.json(adboat));
});

// @route UPDATE api/adsboats/:id
// @des   Update an adsboats by id
// @access Public
  router.update('/:id', (req, res) => {
    const updateAdBoat = new AdBoat({
      boatFabricator: req.body.boatFabricator,
      boatModel: req.body.boatModel,
      boatYear: req.body.boatYear,
      boatUseHours: req.body.boatUseHours,
      boatEngines: req.body.boatEngines,
      boatTypeFuel: req.body.boatTypeFuel,
      boatSize: req.body.boatSize,
      boatLocalization: req.body.boatLocalization,
      boatType: req.body.boatType
    });
    AdBoat.findById(req.params.id, (err,adboat) => {
      adboat = updateAdBoat;
      adboat.save((err, adboat) => {
        if(err) {
          res.json({success: false, error: "Ad not updated"});
        }
        res.json({success: true, message: "Ad updated successfully"});
      });
    });
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
