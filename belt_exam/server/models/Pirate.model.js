const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: [3, "name must be more then 3 characters"]
  },
  imageUrl: {
    type: String,
    required: [true, "image is required"],
  },
  treasureChests: {
    type: Number,
    required: [true,'treasure Chests is required'],
  },
  catchPhrase: {
    type: String,
    required: [true,'catchPhrase is required']
  }
  ,
  crewPosition: {
    type: String,
    required: [true, 'crew position is required']
  },
  pegLeg: {
    type: Boolean,
    default: true
  },
  eyePatch: {
    type: Boolean,
    default: true
  },
  hookHand: {
    type: Boolean,
    default: true
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Pirate', PirateSchema);