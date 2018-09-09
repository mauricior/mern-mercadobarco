const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const AdBoatSchema = new Schema({
  boatFabricator: {
    type: String,
    required: true
  },
  boatModel: {
    type: String,
    required: true
  },
  boatYear: {
    type: Number,
    required: true
  },
  boatUseHours: {
    type: String
  },
  boatEngines: {
    type: Number,
    required: true
  },
  boatTypeFuel: {
    type: String,
    required: true
  },
  boatSize: {
    type: Number,
    required: true
  },
  boatPrice: {
    type: String,
    required: true
  },
  boatLocalization: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  boatType: {
    type: String,
    required: true
  },
  adDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = AdBoat = mongoose.model('adboat', AdBoatSchema);
