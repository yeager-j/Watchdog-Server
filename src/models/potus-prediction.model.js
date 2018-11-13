// potusPrediction-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const potusPrediction = new Schema({
    candidate_name: { type: String, required: true, unique: true },
    hasAnnounced: { type: Boolean, default: false },
    users: { type: [String], default: [] }
  }, {
    timestamps: true
  });

  return mongooseClient.model('potusPrediction', potusPrediction);
};
